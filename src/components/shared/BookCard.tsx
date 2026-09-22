import { IBook } from '@/types/books.typs';
import Image from 'next/image';
import Link from 'next/link';

interface IBookCardProps {
    book: IBook

} 


const BookCard = ({ book }:IBookCardProps) => {
    return (
         <div
        
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            {/* Book Image */}
            <div className="relative h-72 overflow-hidden bg-slate-100">
              <Image
                src={book.image}
                alt={book.bookName}
                height={200} width={200} 
                className="mx-auto object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Category Badge */}
              <div className="absolute left-4 top-4">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur">
                  {book.category}
                </span>
              </div>

              {/* Rating */}
              <div className="absolute right-4 top-4">
                <span className="flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1 text-sm font-medium text-white backdrop-blur">
                  ⭐ {book.rating}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5">

              {/* Title */}
              <h3 className="line-clamp-1 text-xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600">
                {book.bookName}
              </h3>

              {/* Author */}
              <p className="mt-1 text-sm text-slate-500">
                by <span className="font-medium text-slate-700">{book.author}</span>
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Book Info */}
              <div className="my-5 flex items-center justify-between border-y border-slate-100 py-3 text-sm text-slate-500">
                <span>📖 {book.totalPages} pages</span>
                <span>📅 {book.yearOfPublishing}</span>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs text-slate-400">Publisher</p>
                  <p className="max-w-32 truncate text-sm font-medium text-slate-700">
                    {book.publisher}
                  </p>
                </div>
                <Link href={`/books/${book.bookId}`}>
                <button className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-200 transition-all hover:bg-emerald-700 hover:shadow-lg">
                  View Details →
                </button>
                </Link>

              </div>
            </div>
          </div>
    );
};

export default BookCard;
