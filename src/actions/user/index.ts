"use server"

import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { createUser, finduser } from "./queries"
import { refreshToken } from "@/lib/fetch"
import { updateIntegration } from "../integrations/queries"

export const OnCurrentUser = async () => {
    const user = await currentUser()
    
    if(!user) return redirect("/sign-in");

    return user
}


export const OnBoardUser = async () =>{
    const user = await OnCurrentUser()

    try {
        const found = await finduser(user.id);

        if(found){
            if(found.integrations.length > 0){
                const today = new Date()

                const time_left = found.integrations[0].expiresAt?.getTime()! - today.getTime();

                const days = Math.round(time_left / (1000 * 3600 * 24));

                if(days < 5){
                    console.log("Refresh!");

                    const refresh = await refreshToken(found.integrations[0].token);

                    const today = new Date()

                    const expire_date = today.setDate(today.getDate() + 60);

                    const update_token = await updateIntegration(
                        refresh.access_token,
                        new Date(expire_date),
                        found.integrations[0].id
                    )

                    if(!update_token){
                        console.log("Update token failed");
                    }

                }
            }

            return {
                status:200,
                data:{
                    firstname:found.firstname,
                    lastname:found.lastname
                }
            }
        }


        const created = await createUser({
            clerkId:user.id,
            email:user.emailAddresses[0].emailAddress,
            firstname:user.firstName!,
            lastname:user.lastName!
        });


        return {
            status:201,
            data:created
        }

    } catch (error) {
        console.log(error)
        return {status:500}
    }
}


export const OnUserInfo = async () =>{
    const user = await OnCurrentUser();

    try {
        const profile = await finduser(user.id);

        if(profile) return {
            status:200,
            data:profile
        }

        return  {
            status:404
        }
        
    } catch (error) {
        
        return {
            status:500
        }
    }
}