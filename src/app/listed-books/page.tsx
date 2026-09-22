"use client";

import ListedBookCard from "@/components/shared/ListedBookCard";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.typs";
import Image from "next/image";
import React, { useContext, useState } from "react";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);
  const [sortBy, setSortBy] = useState<"rating"|"pages"|"year">("rating");
  
  // console.log(readBooks, wishlist, "readBooks, wishlist");
  // console.log(sortBy,"sortBy");

const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing- a.yearOfPublishing);
    }
   return sortedBooks;
}

 const sortedReadBooks = sortBooks(readBooks);
 const sortedWishlist =  sortBooks(wishlist);

 console.log(sortedReadBooks,"sortedReadBooks");
 console.log(sortedWishlist,"sortedWishlist");



  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="my-5 bg-amber-100 rounded-3xl py-16 font-bold text-4xl text-center">
        Listed Books
      </h2>
  <div className="text-center mb-5">

      <select value={sortBy} 
      onChange={(e) => setSortBy(e.target.value as "rating"|"pages"|"year")}
      className="select select-success">
        <option disabled={true}>Sort by </option>
        <option value={"rating"}>Rating</option>
        <option value={"pages"}>Number of pages</option>
        <option value={"year"}>Publisher year</option>
      </select>
  </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10 space-y-[25px]">
          {sortedReadBooks.length > 0 ? (
            sortedReadBooks.map((book: IBook) => {
              return <ListedBookCard key={book.bookId} book={book} />;
            })
          ) : (
            <p className="text-center text-2xl font-semibold">
              No Read Books Found
            </p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {sortedWishlist.length > 0 ? (
            sortedWishlist.map((book: IBook) => {
              return <ListedBookCard key={book.bookId} book={book} />;
            })
          ) : (
            <p className="text-center text-2xl font-semibold">
              No Wishlist Books Found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
