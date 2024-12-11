"use server"

import { OnCurrentUser } from "../user"
import { createAutomation, getAutomations } from "./queries";

export const createAutomations = async () =>{

    const user  = await OnCurrentUser();

    try {
        
        const create = await createAutomation(user.id);

        if(create){
            return {
                status:200,
                data:"Automation Created"
            }
        }

        return {
            status:404,
            data:"Oops! Something went wrong"
        }

    } catch (error) {
        return {
            status:500,
            data:"Internal Server Error"
        }
    }


}

export const getAllAutomation = async () =>{

    const user = await OnCurrentUser();


    try {
        const automation = await getAutomations(user.id)

        if(automation) return {status:200, data:automation.automations}

        return { status:404 }
    } catch (error) {
        return {
            status:500,
            data:"Internal Server Error"
        }
    }
}