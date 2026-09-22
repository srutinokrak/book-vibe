import { IBook } from '@/types/books.typs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IListedBookCardProps {
    book: IBook;
}

const ListedBookCard = ({book}:IListedBookCardProps) => {
    return (
          <div key={book.bookId} className="flex w-full gap-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-lg">
      
      {/* Book Image */}
      <div className="relative h-56 w-36 shrink-0 overflow-hidden rounded-xl">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover"
        />
      </div>

      {/* Book Information */}
      <div className="flex flex-1 flex-col justify-between">
        
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
              {book.category}
            </span>

            <span className="text-sm text-gray-500">
              {book.yearOfPublishing}
            </span>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            {book.bookName}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            by {book.author}
          </p>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
            {book.review}
          </p>

          {/* Tags */}
          <div className="mt-3 flex gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Information */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex gap-5 text-sm text-gray-600">
            <span>⭐ {book.rating}</span>
            <span>📖 {book.totalPages} pages</span>
            <span>{book.publisher}</span>
          </div>

         <Link href={`/books/${book.bookId}`} className="flex items-center gap-2">
          <button className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
            View Details
          </button>
         </Link>
        </div>
      </div>
    </div>
    );
};

export default ListedBookCard;