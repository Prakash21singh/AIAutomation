"use server"

import { client } from "@/lib/prisma"

export const finduser = async (clerkId:string) =>{
    return await client.user.findUnique({
        where:{
            clerkId
        },
        include:{
            subscription:true,
            integrations:{
                select:{
                    id:true,
                    token:true,
                    expiresAt:true,
                    name:true
                }
            }
        }
    });
}


export const createUser = async ({
    clerkId,
    email,
    firstname,
    lastname
}:{
    clerkId:string;
    email:string;
    firstname?:string;
    lastname?:string;
}) => {
    return await client.user.create({
        data:{
            clerkId,
            email,
            firstname,
            lastname,
            subscription:{
                create:{}
            }
        },
        select:{
            firstname:true,
            lastname:true,
            email:true
        }
    })
}