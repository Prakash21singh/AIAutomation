
import { createAutomations, saveListener, updateAutomationName } from "@/actions/automations";
import { useMutationData } from "./use-mutation-data"
import { useEffect, useRef, useState } from "react";
import {z} from "zod";
import { useZodForm } from "./use-zod-form";

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
  const [listener, setListener] = useState<"MESSAGE" | "SMARTAI">("MESSAGE");

  const promptSchema = z.object({
    prompt:z.string(),
    reply:z.string()
  });

  const  {isPending, mutate } = useMutationData(
    ["create-listener"],
    (data:{prompt:string,reply:string}) => saveListener(
      id,
      listener,
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
    listener,
    isPending
  }
}