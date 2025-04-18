'use server';

import {API_URL} from "@/constants/api";
import {getErrorMessage} from "@/util/errors";
import {cookies} from "next/headers";

const getHeaders = async () => {
    const cookiesServer = await cookies();

    return {
        Cookie: cookiesServer.toString(),
    }
}

export const post = async (path: string, formData: FormData) => {
    try {
        const headers = await getHeaders();
        const res = await fetch(`${API_URL}/${path}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', ...headers},
            body: JSON.stringify(Object.fromEntries(formData)),
        })

        const parsedRes = await res.json()

        if(!res.ok){
            console.log(parsedRes)
            return { error: getErrorMessage(parsedRes) };
        }

    } catch (error) {
        console.log(error)
        return { error: getErrorMessage(error) }
    }

    return { error: '' };
}

export const get = async (path: string) => {
   try {
       const headers = await getHeaders();
       const res = await fetch(`${API_URL}/${path}`, {
           headers: {...headers}
       })

       return res.json()
   } catch (e) {
       console.log(e)
   }
}