import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

// Create a new topic with title, description, and due date
export async function POST(request) {
  const { title, description, dueDate } = await request.json(); // Include due date
  
  // Validate that required fields are present
  if (!title || !description || !dueDate) {
    return NextResponse.json({ message: "Title, description, and due date are required." }, { status: 400 });
  }

  await connectMongoDB();
  await Topic.create({
    title,
    description,
    dueDate: new Date(dueDate), // Store the due date
    completed: false, // Default to incomplete
  });

  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

// Get all topics with due date and completion status
export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

// Delete a topic by ID
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
