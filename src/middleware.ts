import { withClerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

export default withClerkMiddleware(() => {
  console.log("middleware is running");
  return NextResponse.next();
});

// Stop Middleware running on static files
export const config = {
  matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
};
