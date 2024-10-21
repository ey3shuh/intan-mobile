'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db, storage } from '@/firebase'; // Ensure storage is imported
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import '../../app/globals.css';
import { FaUpload } from 'react-icons/fa'; // Example for upload icon

const NewInstory = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [status, setStatus] = useState('Draft');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null); // Preview image URL
  const router = useRouter();

  // Function to handle image selection
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImageFile(file);
      setImagePreviewUrl(URL.createObjectURL(file)); // Preview the image locally
    }
  };

  // Submit function to handle form data
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitting:", { title, link, status }); // Log the data being submitted

    try {
      let imageUploadUrl = '';

      // Handle image upload if an image file is selected
      if (imageFile) {
        const storageRef = ref(storage, `instory-images/${imageFile.name}`);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);

        // Wait for the upload to finish
        await new Promise((resolve, reject) => {
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              console.log('Upload Progress:', snapshot.bytesTransferred, '/', snapshot.totalBytes); // Log upload progress
            },
            (error) => {
              console.error('Upload failed:', error); // Log the error if upload fails
              reject(error);
            },
            async () => {
              try {
                imageUploadUrl = await getDownloadURL(uploadTask.snapshot.ref);
                console.log('Image URL:', imageUploadUrl);
                resolve(true);
              } catch (error) {
                console.error('Error getting download URL:', error);
                reject(error);
              }
            }
          );
        });
      }
  
     // Prepare data to send to Firestore
     const instoryData = {
      title,
      link,
      status,
      imageUrl: imageUploadUrl, // Save the uploaded image URL
    };
  
      // Log the data being sent to Firestore
      console.log('Instory Data:', instoryData);

      // Add the document to Firestore
      const docRef = await addDoc(collection(db, 'new-instory'), instoryData);
      console.log('Document written with ID: ', docRef.id);  // Log successful document creation

   // Reset the form fields
   setTitle('');
   setLink('');
   setStatus('Draft');
   setImageFile(null);
   setImagePreviewUrl(null);

   // Navigate back to the instory page after submission
      router.push('/instory');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error saving instory:', error);
        alert('Error saving instory: ' + error.message);
      } else {
        console.error('An unknown error occurred:', error);
        alert('An unknown error occurred.');
      }
    }
  };
  
  
  return (
    <div>
      {/* Header Section */}
      <div className="w-full p-2 bg-custom-bg fixed top-0 z-50">
        <ul className="flex items-center h-full">
          <li className="flex items-center px-4">
            <button onClick={() => router.push('/instory')}>
              <ArrowBackIosIcon className="text-header-bg my-4" />
            </button>
          </li>
          <li className="flex items-center">
            <h1 className="text-header-bg text-xl xl:text-2xl px-4 font-sfPro font-medium">
              New Instory
            </h1>
          </li>
        </ul>
      </div>

      {/* Breadcrumbs */}
      <div className="w-full p-4 border-b flex items-start mt-[70px]">
        <ul className="text-[1rem] font-sfPro font-medium text-gray-500">
          <li className="flex items-center px-2">
            <span className="mr-2 underline cursor-pointer" onClick={() => router.push('/instory')}>Instory</span>
            <span className="mx-2">/</span>
            <span className="ml-2 text-header-bg">New</span>
          </li>
        </ul>
      </div>

      <div className='m-4'>
        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label 
            className="block text-[1rem] 
            text-gray-500 font-sfPro 
            font-semibold mt-4" 
            htmlFor="title"
            >Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='mt-2 border border-gray-300 rounded-lg p-4 w-full text-[1rem] font-sfPro font-normal placeholder-gray-300 focus:border-header-bg focus:outline-none'
              placeholder="Insert title"
              required
            />
          </div>

          {/* Status */}
          <div className='my-6'>
            <label className='block text-[1rem] text-gray-500 font-sfPro font-semibold pb-4' htmlFor="status">Status</label>
            <div className='flex space-x-12'>
              <label className='flex items-center space-x-4 text-[1rem] font-sfPro'>
                <input
                  type='radio'
                  value='Draft'
                  checked={status === 'Draft'}
                  onChange={(e) => setStatus(e.target.value)}
                  className='accent-gray-500 w-6 h-6'
                />
                <span>Draft</span>
              </label>
              <label className='flex items-center space-x-4 text-[1rem] font-sfPro'>
                <input
                  type='radio'
                  value='Active'
                  checked={status === 'Active'}
                  onChange={(e) => setStatus(e.target.value)}
                  className='accent-gray-500 w-6 h-6'
                />
                <span>Active</span>
              </label>
            </div>
          </div>

          {/* Live URL */}
          <div className='my-6'>
            <label className="block text-[1rem] 
            text-gray-500 font-sfPro font-semibold">Link</label>
            <input
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="mt-1 border border-gray-300 
              rounded-lg p-4 w-full text-[1rem] 
              font-sfPro font-normal 
              placeholder-gray-300 focus:border-header-bg 
              focus:outline-none"
              placeholder="Insert link"
              required
            />
          </div>

          {/* Image Upload
          <div className="my-6">
            <label className="block mb-1 text-[1rem] text-gray-500 font-sfPro font-semibold">Image</label>
            <div className="border-dashed border-2 border-gray-400 rounded-lg p-6 text-center font-sfPro text-[1rem]">
              <label
                htmlFor="file-upload"
                className="cursor-pointer text-header-bg hover:underline"
              >
                <div className="flex justify-center items-center">
                  <FaUpload className="mr-2 text-2xl" />
                </div>
                Click to upload
                <p className="text-xs text-gray-500">PNG or JPG</p>
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                required
              />
            </div>
          </div> */}

          {/* Image Preview */}
          {/* {imagePreviewUrl && (
            <div className="flex flex-col items-center my-6">
              <div className="w-24 h-24 
              border-4 border-orange-500 
              rounded-full overflow-hidden">
                <img
                  src={imagePreviewUrl}
                  alt="Image Preview"
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-center mt-2 font-sfPro">{title}</span>
            </div>
          )} */}

          {/* Buttons */}
          <div className="flex justify-center gap-4 my-4 fixed bottom-0 inset-x-0 mx-auto">
            <button
              type="button"
              onClick={() => router.push('/instory')}
              className="border border-header-bg text-header-bg font-sfPro text-[1.1rem] px-6 py-1 w-45 inline-block hover:bg-header-bg hover:text-custom-bg focus:ring"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="border border-header-bg bg-header-bg text-white font-sfPro text-[1.1rem] px-6 py-1 w-45 inline-block hover:bg-gray-700 focus:ring"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewInstory;

