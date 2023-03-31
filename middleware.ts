/** @format */

// middleware.ts
import { NextFetchEvent, NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import urlConfig from '@utils/api/config';
import { getRequest } from '@utils/api/fetch';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest, event: NextFetchEvent) {
	if (request.nextUrl.pathname === '/') {
		return NextResponse.next();
	} else {
		try {
			const isAuthenticated = await getRequest(urlConfig.auth.getProfile);
			if (isAuthenticated === false) {
				return NextResponse.redirect(new URL('/', request.url));
			} else {
				return NextResponse.next();
			}
		} catch (e: any) {
			return NextResponse.redirect(new URL('/', request.url));
		}
	}
}

export const config = {
	matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
export const runtime = 'nodejs';
