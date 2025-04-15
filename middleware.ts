import { NextRequest } from "next/server";
import {AUTHENTICATION_COOKIE} from "@/constants/auth-cookie";
import {unauthenticatedRoutes} from "@/constants/routes";

export function middleware(request: NextRequest) {
    const auth = request.cookies.get(AUTHENTICATION_COOKIE)?.value;

    if (
        !auth &&
        !unauthenticatedRoutes.some((route) =>
            request.nextUrl.pathname.startsWith(route.path)
        )
    ) {
        return Response.redirect(new URL("/auth/login", request.url));
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};