import { getAllAutomation } from "@/actions/automations"
import { useQuery } from "@tanstack/react-query"

export const useQueryAutomation = () => {
    return useQuery({
        queryKey:["user-automations"],
        queryFn:getAllAutomation,
    })
}