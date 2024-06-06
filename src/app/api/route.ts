// Suggested code may be subject to a license. Learn more: ~LicenseLog:613305873.
import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(req) {
  // Do whatever you want
  console.log(req.body);
  
}