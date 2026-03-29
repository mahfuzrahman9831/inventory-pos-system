import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/inventory/:path*',
    '/pos/:path*',
    '/sales/:path*',
    '/suppliers/:path*',
    '/customers/:path*',
    '/marketing/:path*',
    '/reports/:path*',
    '/settings/:path*',
  ],
}