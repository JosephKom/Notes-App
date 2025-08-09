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
    <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg w-150 h-150">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        className="h-56 w-full object-cover"
      />

      <div className="bg-white p-4 sm:p-6">
        <time dateTime="2022-10-10" className="block text-xs text-gray-500">
          {" "}
          {note.createdAt}{" "}
        </time>

        <a href="#">
          <h3 className="mt-0.5 text-lg text-gray-900">
            {note.title}
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {note.note}
        </p>
      </div>
    </article>
  );
};

export default NoteCard;
