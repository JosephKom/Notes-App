import { connectToDB } from "../../../../lib/mongodb";
import Note from "../../../../models/Note";
import { NextResponse } from "next/server";


export async function POST(request: Request){
    try{
        const{ title, note } = await request.json();

        if(!title || !note){
            return new NextResponse("Missing title or note", {status: 400})
        }

        await connectToDB();

        const newNote = await Note.create({title, note});

        return NextResponse.json(newNote, {status: 201});
    } catch(err){
        console.error("failed to create note", err);
        return new NextResponse("Failed to create note", { status: 500});
    }
}