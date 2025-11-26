import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User.model";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const  {
      // slug,
      email,
      phone,
      // role,
      name,
      // avatar,
      // locale,
      email_validated,
      phone_validated,
      bio,
      // company,
    } = body;

    // Basic validation
    if ( !email || !phone || !name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const user = await User.create({
      // slug,
      email,
      phone,
      // role,
      name,
      // avatar,
      // locale,
      email_validated,
      phone_validated,
      bio,
      // company,
    });

    return NextResponse.json(
      { message: "User created successfully", user },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/db error:", error);
    const message =
        error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json(
      { error: "Internal server error", details: message },
      { status: 500 }
    );
  }
}
