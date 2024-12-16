"use server"

import { OnCurrentUser } from "../user"
import { addListener, createAutomation, findAutomation, getAutomations, updateAutomation } from "./queries";

export const createAutomations = async (id?:string) =>{

    const user  = await OnCurrentUser();

    try {
        
        const create = await createAutomation(user.id , id);

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

        if(automation) return {status:200, data:automation.automations || []}

        return { status:404, data:[] }
        
    } catch (error) {
        return {
            status:500,
            data:[]
        }
    }
}



export const getAutomationInfo = async function(id:string){

    await OnCurrentUser()

    try {
        const automation = await findAutomation(id);

        if(automation) return {status:200,data:automation}

        return  {status:404}
    } catch (error) {
        return {status:500}
    }

}


export const updateAutomationName = async (
    automationId:string,
    data:{
        name?:string,
        active?:boolean,
        automation?:string,
    }
) =>{
    await OnCurrentUser()

    try {
        const update = await updateAutomation(automationId,data)

        if(update) return {status:200,data:"Automation successfully updated"}

        return {status:404, data:"Opps! could not find automation"}
    } catch (error) {
        return {status:500, data:"Opps! somethig went wrong"}
    }
}



export const saveListener = async function(
    automationId:string,
    listener:"MESSAGE" | "SMARTAI",
    prompt:string,
    reply?:string
){

    await OnCurrentUser()

    try {
        const create = await addListener(automationId,listener,prompt,reply)

        if(create) return {status:200,data:"Listener Created"} 

        return {status:404}

    } catch (error) {
        return {status:500}
    }
}