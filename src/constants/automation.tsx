import { PlaneBlue, SmartAi, TinyInstagram } from "@/icons";
import { v4 } from "uuid";

export interface AutomationListenerProps {
    id:string;
    label:string;
    icon:React.ReactNode;
    description:string;
    type:"SMARTAI" | "MESSAGE"
}
export interface AutomationTriggerProps {
    id:string;
    label:string;
    icon:React.ReactNode;
    description:string;
    type:"COMMENT" | "DM"
}

export const AUTOMATION_LISTENERS:AutomationListenerProps[] = [
    {   
        id: v4(),
        label:"Send user a message",
        icon:<PlaneBlue/>,
        description:"Enter the messasge that you want to send the user",
        type:"MESSAGE"
    },
    {   
        id: v4(),
        label:"Let smart AI take over",
        icon:<SmartAi/>,
        description:"Tell AI about your project. (Upgrade to use this feature)",
        type:"SMARTAI"
    }
]

export const AUTOMATION_TRIGGERS:AutomationTriggerProps[] = [
    {   
        id: v4(),
        label:"User comment on my post",
        icon:<TinyInstagram/>,
        description:"Select if you want to automate comments on your post",
        type:"COMMENT"
    },
    {   
        id: v4(),
        label:"Send me a dm with a keyword",
        icon:<SmartAi/>,
        description:"Select if you want to automation DMs of your profile",
        type:"DM"
    }
]