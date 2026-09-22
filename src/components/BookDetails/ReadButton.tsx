'use client'
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.typs";
import React, { useContext } from "react";
import { toast } from "react-toastify";



const ReadButton = ({book}: {book: IBook}) => {


  const { readBooks, setReadBooks} = useContext(BooksContext);
  


const handleReadBook = () => {
    console.log('read books trigger',book);

    setReadBooks([...readBooks, book])
    toast.success(`You have read "${book.bookName}"`)
}
  return (
     <button className="btn btn-primary px-8" onClick={() => handleReadBook()}>Read</button>
  )
};

export default ReadButton;
