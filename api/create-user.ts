'use server'

import {redirect} from "next/navigation";
import {post} from "@/api/fetch";
import {FormResponse} from "@/common/form-response.interface";
import {isRedirectError} from "next/dist/client/components/redirect-error";

export default async function createUser(_prevState: FormResponse, formData: FormData) {
    try {
        const error: FormResponse = await post('users', formData);

        if (error?.error) {
            return error;
        }

        redirect('/auth/login');
    } catch (error) {
        if (isRedirectError(error)) {
            throw error; // rethrow to let Next.js handle it
        }
        return {error: "Something went wrong"}
    }
}