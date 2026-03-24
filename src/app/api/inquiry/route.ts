import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    
    const { name, email, phone, message, stoneReference } = body;

    if (!name || !email || !phone || !message || !stoneReference) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newInquiry = await Inquiry.create({
      name,
      email,
      phone,
      message,
      stoneReference,
    });

    return NextResponse.json(
      { message: "Inquiry sent successfully", data: newInquiry },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating inquiry:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
