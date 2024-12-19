import { getAllAutomation, getAutomationInfo } from "@/actions/automations"
import { OnUserInfo } from "@/actions/user"
import { useQuery } from "@tanstack/react-query"

export const useQueryAutomations = () => {
    return useQuery({
        queryKey:["user-automations"],
        queryFn:getAllAutomation,
    })
}


export const useQueryAutomation = (automationId:string) =>{
    return useQuery({
        queryKey:["automation-info"],
        queryFn:()=>getAutomationInfo(automationId)
    })
}


export const useQueryUser = () =>{
    return useQuery({
        queryKey:["user-profile"],
        queryFn:OnUserInfo
    })
}