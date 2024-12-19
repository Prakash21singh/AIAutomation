
import { createAutomations, saveListener, saveTrigger, updateAutomationName } from "@/actions/automations";
import { useMutationData } from "./use-mutation-data"
import { useEffect, useRef, useState } from "react";
import {z} from "zod";
import { useZodForm } from "./use-zod-form";
import { RootDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { TRIGGER } from "@/redux/slices/automation";

export const useCreateAutomation = (id?:string) => {
        const {isPending,mutate} = useMutationData(
          ["create-automation"],
          ()=> createAutomations(id),
          'user-automations'
        );

        return {isPending, mutate};
}


/**
 * This hook does mutliple things 
 * Declare's two state one for edit and one for inputRef
 * create's two function that will toggle the edit
 * creates a mutationData by providing the name 
 * Then create's a useEffect Hook that will Check two thing
 * First Is inputRef.current exists?
 * Second Is inputRef.current.contains() 
 * if inputRef.current.value !== "" then mutate by provinding the name
 * otherwise disable the edit
 * 
 */




export const useEditAutomation = (automationId:string) =>{

  const [edit, setEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const enableEdit = () => setEdit(true);
  const disableEdit = () => setEdit(false);

  const {isPending, mutate} = useMutationData(
    ["update-automation"],
    (data:{name:string})=>updateAutomationName(automationId,{name:data.name}),
    "automation-info",
    disableEdit
  );


  useEffect(()=>{

    function handleClickOutside(this:Document,event:MouseEvent){
      if(inputRef.current && !inputRef.current.contains(event.target as Node | null)){
        if(inputRef.current.value !== ""){
          mutate({
            name:inputRef.current.value
          })
        }else{
          disableEdit()
        }
      }
    }

    document.addEventListener("mousedown",handleClickOutside)

    return () =>{
      document.removeEventListener("mousedown",handleClickOutside)
    }

  },[]);


  return {
    edit,
    enableEdit,
    disableEdit,
    inputRef,
    isPending
  }

}



export const useListener =(id:string) =>{
  const [Listener, setListener] = useState<"MESSAGE" | "SMARTAI">();

  const promptSchema = z.object({
    prompt:z.string(),
    reply:z.string()
  });

  const  {isPending, mutate } = useMutationData(
    ["create-listener"],
    (data:{prompt:string,reply:string}) => saveListener(
      id,
      Listener || "MESSAGE",
      data.prompt,
      data.reply
    ),
    "automation-info"
  );


  const {
    errors,
    onFormSubmit,
    register,
    reset,
    watch
   } = useZodForm(
    promptSchema,
    mutate,
  );


  const onSetListener = (type:"SMARTAI" | "MESSAGE") => setListener(type);

  return {
    onSetListener,
    register,
    onFormSubmit,
    Listener,
    isPending
  }
}



export const useTriggers = (id:string) =>{
  const types = useAppSelector((states)=>states.AutomationReducer.trigger?.types)

  const dispatch:RootDispatch = useDispatch()

  const onSetTriggers = (type:"COMMENT" | "DM") => dispatch(TRIGGER({trigger:{
    type
  }}));

  const {isPending,mutate} = useMutationData(
    ["add-trigger"],
    (data:{types:string[]})=> saveTrigger(id,data.types),
    "automation-info"
  );



  const onSaveTrigger = () => mutate({types});


  return {
    types,
    onSetTriggers,
    onSaveTrigger,
    isPending
  }
}