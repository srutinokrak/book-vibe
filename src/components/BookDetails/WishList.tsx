"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.typs";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BooksContext);

  const handleAddToWishlist = () => {
    console.log("add to wishlist trigger", book);

    setWishlist([...wishlist, book]);
    toast.success(`You have added "${book.bookName}" to your wishlist`);
  };
  return (
    <button className="btn btn-primary px-8" onClick={() =>handleAddToWishlist ()}>
      Add to Wishlist
    </button>
  );
};

export default WishListButton;
