import { duplicateValidation } from "@/lib/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateTriggerProps {
    trigger?:{
        type?:"COMMENT" | "DM"
        keyword?:string
        types?:string[]
        keywords?:string[]
    }
}

const initialState:InitialStateTriggerProps = {
    trigger:{
        type:undefined,
        keyword:undefined,
        keywords:[],
        types:[]
    }
}

export const AUTOMATION = createSlice({
    name:"Automation",
    initialState:initialState,
    reducers:{
        TRIGGER:(state,action:PayloadAction<InitialStateTriggerProps>)=>{
            state.trigger!.types = duplicateValidation(
                state.trigger?.types!,
                action.payload.trigger?.type!
            )

            return state;
        }
    }
});


export const { TRIGGER } = AUTOMATION.actions;

export default AUTOMATION.reducer;