import { connectToDB } from "../../../../lib/mongodb";
import { Note } from "../../../../models/Note";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";


export async function POST(request: Request){

    try{

        const session = await getServerSession(authOptions)
        console.log("Session:",session)

        if(!session?.user?.email){
            return new NextResponse("Unauthorized", { status: 401})
        }

        const{ title, note } = await request.json();
        console.log("Body:", {title,note});

        if(!title || !note){
            return new NextResponse("Missing title or note", {status: 400})
        }

        await connectToDB();

        const newNote = await Note.create({
            title, 
            note,
            userEmail: session.user.email

        });

        return NextResponse.json(newNote, {status: 201});
    } catch(err){
        console.error("failed to create note", err);
        return new NextResponse("Failed to create note", { status: 500});
    }
}