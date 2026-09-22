
import Image from 'next/image';
import React from 'react';
import BookCard from '../shared/BookCard';
import { IBook } from '@/types/books.typs';

const getBooks = async () => {
  try{

    const response = await fetch(`${process.env.NEXT_PUBLIC_Server_Base_Url}/booksData.json`);
    const data = await response.json();
    
    return data;
  }catch(error){
    console.error('Error fetching books data:', error);
    return [];
  }
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
          Explore Popular Books
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          Discover timeless classics, inspiring stories, and exciting adventures
          handpicked for every kind of reader.
        </p>
      </div>

      {/* Book Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {booksData.slice(0,6).map((book:IBook, ind:number) => {
            return <BookCard key={ind} book={book}/>
         })}

      </div>
    </section>
  );
};

export default Books;

