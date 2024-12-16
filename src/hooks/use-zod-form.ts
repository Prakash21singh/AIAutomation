import { UseMutateFunction } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z, ZodSchema } from "zod";
import {zodResolver} from "@hookform/resolvers/zod"

export const useZodForm = (
    schema:ZodSchema,
    mutationFn:UseMutateFunction,
    defaultValues?:any
) =>{
    const {
        handleSubmit,
        register,
        formState:{errors},
        watch,
        reset
    } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues:{
            ...defaultValues
        },
    });


    const onFormSubmit = handleSubmit(async(values) => mutationFn({...values}))

    return {
        register,
        errors,
        onFormSubmit,
        watch,
        reset
    }
}