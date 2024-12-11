"use server"

import { client } from "@/lib/prisma"

export const updateIntegration =async (token:string, expires:Date, id:string) => {
    return await client.integrations.update({
        where:{
            id,
        },
        data:{
            token,
            expiresAt:expires
        }
    });
}