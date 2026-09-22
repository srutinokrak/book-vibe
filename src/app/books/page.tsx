
import Image from 'next/image';
import React from 'react';

import { IBook } from '@/types/books.typs';
import BookCard from '@/components/shared/BookCard';

const getBooks = async () => {
  const response = await fetch('http://localhost:3000/booksData.json');
  const data = await response.json();

  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto px-4 py-16">

      {/* Section Header */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-600">
          Explore Our Collection
        </p>

        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Explore All Books
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          Discover timeless classics, inspiring stories, and exciting adventures
          handpicked for every kind of reader.
        </p>
      </div>

      {/* Book Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {booksData.map((book:IBook, ind:number) => {
            return <BookCard key={ind} book={book}/>
         })}

      </div>
    </section>
  );
};

export default Books;

