import mongoose from 'mongoose';


const NoteSchema = new mongoose.Schema({
    userEmail: {type: String, required: true},
    title: {type: String, required: true},
    note: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
}, {timestamps: true});

export const Note = mongoose.models.Note || mongoose.model('Note', NoteSchema);