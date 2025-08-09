import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

if(!MONGODB_URI){
    throw new Error("Define MONGODB_URI environment")
}

let cached = (global as any).mongoose || {conn: null, promise: null};

export async function connectToDB() {
    if(cached.conn)
        return cached.conn;

    if(!cached.promise){
        cached.promise = mongoose.connect(MONGODB_URI, {
            dbName: "notes-app",
            bufferCommands: false,

        });
    }

    cached.conn = await cached.promise;
    return cached.conn;

}