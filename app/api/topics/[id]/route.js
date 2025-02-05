import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

// Update a topic with new title, description, and due date
export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description, newDueDate: dueDate } = await request.json(); // Include due date
  
  await connectMongoDB();
  
  await Topic.findByIdAndUpdate(id, { 
    title, 
    description,
    dueDate: new Date(dueDate), // Update due date
  });
  
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

// Get a topic by its ID
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
