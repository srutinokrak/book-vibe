import ReadButton from '@/components/BookDetails/ReadButton';
import WishListButton from '@/components/BookDetails/WishList';
import { IBook } from '@/types/books.typs';
import Image from 'next/image';
import React from 'react';

interface IBookDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

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

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
    const { id } = await params;

    const booksData = await getBooks();

    const book = booksData.find(
        (book: IBook) => String(book.bookId) === String(id)
    ) as IBook;
  
    console.log(book,'book');
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="card lg:card-side bg-base-100 shadow-xl border border-base-200 overflow-hidden">

                {/* Book Image */}
                <figure className="lg:w-2/5 bg-base-200 p-8 flex items-center justify-center">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={500}
                        height={600}
                        className="w-full max-w-sm `h-112.5` object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                </figure>

                {/* Book Details */}
                <div className="card-body lg:w-3/5 p-8 lg:p-12">

                    {/* Category */}
                    <div>
                        <span className="badge badge-primary badge-outline font-medium">
                            {book.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl lg:text-4xl font-bold mt-3">
                        {book.bookName}
                    </h1>

                    {/* Author */}
                    <p className="text-lg text-base-content/60">
                        by <span className="font-semibold text-base-content">
                            {book.author}
                        </span>
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-3 mt-4">
                        <div className="rating rating-sm">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <input
                                    key={star}
                                    type="radio"
                                    className="mask mask-star-2 bg-orange-400"
                                    checked={Math.round(book.rating) === star}
                                    readOnly
                                />
                            ))}
                        </div>

                        <span className="font-semibold">
                            {book.rating}/5
                        </span>
                    </div>

                    {/* Review */}
                    <p className="text-base-content/70 leading-7 mt-4">
                        {book.review}
                    </p>

                    {/* Book Information */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">

                        <div className="bg-base-200 rounded-xl p-4">
                            <p className="text-sm text-base-content/50">
                                Pages
                            </p>
                            <p className="font-bold text-lg">
                                {book.totalPages}
                            </p>
                        </div>

                        <div className="bg-base-200 rounded-xl p-4">
                            <p className="text-sm text-base-content/50">
                                Publisher
                            </p>
                            <p className="font-bold text-lg">
                                {book.publisher}
                            </p>
                        </div>

                        <div className="bg-base-200 rounded-xl p-4">
                            <p className="text-sm text-base-content/50">
                                Published
                            </p>
                            <p className="font-bold text-lg">
                                {book.yearOfPublishing}
                            </p>
                        </div>

                    </div>

                    {/* Tags */}
                    <div className="mt-6">
                        <p className="font-semibold mb-3">Tags</p>

                        <div className="flex flex-wrap gap-2">
                            {book.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="badge badge-secondary badge-outline px-4 py-3"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action */}
                    <div className="card-actions justify-start mt-8">
                     <ReadButton book={book}/>
                      <WishListButton book={book}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;