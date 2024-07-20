import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Textarea } from 'flowbite-react';

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help","Memoir","Business","Children Books",
    "Travel","Religion","Art and Design"
  ]
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
  const handleChangeSelctedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }


  //handle book submission
  const handleBookSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.category.value;
    const description = form.description.value;
    const pdfUrl = form.pdfUrl.value;

    const bookObj = {
      bookTitle,authorName,imageUrl,category,description,pdfUrl
    }

    console.log(bookObj);

    fetch("http://localhost:5000/upload-book", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(bookObj)
    }).then(res => res.json()).then(data =>{
      alert("Book uploaded successfully!!")
      form.reset()
    }).catch(err => {
      alert("Error in uploading book");
      console.error(err); // Log the error for debugging
    });

    //send data to the database


  }

  return (
     
    <div className='px-4 my-12 bg-blue-100 p-8 rounded-lg'>
      <h2 className='mb-8 text-3xl font-bold'>Upload Book</h2>
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* First Row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              placeholder="Book Name"
              required type = "text"
            />
          </div>
          {/* Author Name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              placeholder="Author Name"
              required type = "text"
            />
          </div>
        </div>  
        {/* Second Row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book Image Url" />
            </div>
            <TextInput
              id="imageUrl"
              name="imageUrl"
              placeholder="Book Image URL"
              required type = "text"
            />
          </div>
          {/* Category */}
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor="category" value="Book Category" />
            </div>

            <select id="category" name="category" className='w-full-rounded' value={selectedBookCategory} onChange={handleChangeSelctedValue}>
              {
                bookCategories.map((option)=>
                 <option key={option} value={option}>
                   {option}
                 </option>
                )
              }

            </select>

          </div>
        </div>   

        {/* book description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Book Description" />
          </div>
          <Textarea id="description" name="description"
            placeholder = "Description of the book.."
             required
              className='w-full'
              rows={6}
          />
          
      </div>


      {/* book pdf link */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="pdfUrl" value="Book URL" />
        </div>
        <TextInput 
         id="pdfUrl" 
         name="pdfUrl"
         type="text"
         placeholder="Enter the Pdf URL"
         required
         />
      </div>

      <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-600">Upload Book</Button>
        


    </form>
    </div>
  )
}

export default UploadBook;
