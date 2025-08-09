import { connectToDB } from "../../../../../lib/mongodb";
import Note from "../../../../../models/Note";
import { NextResponse } from "next/server";

export async function GET(_req: Request, {params} : {params: {id: string}}){
    await connectToDB();
    const note = await Note.findById(params.id);
    return note ? NextResponse.json(note) : NextResponse.json({error: 'Note not found'}, { status: 404});
}

export async function DELETE(_req: Request, {params} : {params: {id: string}}){
    await connectToDB();
    await Note.findByIdAndDelete(params.id);
    return NextResponse.json({ message: 'Note deleted'});
}

export async function PATCH(request: Request, {params}: {params: {id: string}}){
    const {id} = params;

    const { title, content} = await request.json();

    await connectToDB();


    const updatedNote = await Note.findByIdAndUpdate(
        id,
        { title, content },
        { new: true}
    );

    if(!updatedNote){
        return new NextResponse("Note not found", {status: 404});
    }

    return NextResponse.json(updatedNote);
}

export async function POST(request: Request){
    try{
        const{ title, content } = await request.json();

        await connectToDB();

        const newNote = await Note.create({title, content});

        return NextResponse.json(newNote, {status: 201});
    } catch(err){
        console.error("failed to create note", err);
        return new NextResponse("Failed to create note", { status: 500});
    }
}