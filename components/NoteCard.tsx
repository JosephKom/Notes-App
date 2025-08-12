import React from "react";
interface Prop{
  note: {
    _id: string,
    title: string,
    note: string,
    createdAt: string,
  }
}

const NoteCard = ({note}: Prop) => {

  return (
    <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg w-150 h-150 border-4">
     

      <div className="bg-white p-4 sm:p-6">
        <time dateTime="2022-10-10" className="block text-xs text-gray-500">
          {" "}
          {note.createdAt.toLocaleString()}{" "}
        </time>

        <a href="#">
          <h3 className="mt-0.5 text-4xl text-gray-900 font-bold text-center">
            {note.title}
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-lg text-gray-500">
          {note.note}
        </p>
      </div>
    </article>
  );
};

export default NoteCard;
