import { getAllAutomation, getAutomationInfo } from "@/actions/automations";
import { OnUserInfo } from "@/actions/user";
import { QueryClient, QueryFunction } from "@tanstack/react-query"

const prefetch = async (
    client:QueryClient,
    action:QueryFunction,
    key:string,
)=>{
    
    return client.prefetchQuery({
        queryKey:[key],
        queryFn:action,
        staleTime:60000
    });
}

export const PrefetchUserProfile =async (client:QueryClient) =>{
    return await prefetch(client,OnUserInfo,"user-profile")
}

export const PrefetchUserAutomations = async (client:QueryClient) =>{
    return await prefetch(client, getAllAutomation, "user-automations")
}


export const PrefetchUserAutomation = async (
    client:QueryClient,
    automationId:string
) =>{
    return await prefetch(
        client,
        ()=>getAutomationInfo(automationId),
        "automation-info"
    )
}


/**
 * Structure is like this
 * |
 * |
 * |-(A) Create a function/action that will find the data in the database
 * |
 * |
 * |-(B) Create another function that will accept the client 
 * |
 * |
 * |-(C) Create another function that will accept the client, action and key
 * |
 * |
 * |-(D) Call that function (C) in function (B)
 * |
 * | 
 */