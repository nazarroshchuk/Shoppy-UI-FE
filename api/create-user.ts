'use server'

import {redirect} from "next/navigation";
import {post} from "@/api/fetch";
import {FormErrorInterface} from "@/common/form-error.interface";

export default async function createUser(_prevState: FormErrorInterface, formData: FormData){
    try {
        const error: FormErrorInterface  = await post('users',formData);

        if(error){
            return error ;
        }

        redirect('/')
    } catch {
        return {error:"Something went wrong"}
    }
}