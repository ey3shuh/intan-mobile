'use client';
import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import Image from 'next/image';
import { Paper, IconButton, InputBase, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccViewInstory from './index-instory/AccViewInstory';
import '../../app/globals.css';
import Navbar from '@/pages/Navbar';
import { useRouter } from 'next/navigation';
import { db } from '../../firebase'; // Adjust the import based on your project structure
import { collection, getDocs } from 'firebase/firestore';

// Define the Story interface
interface Story {
  id: string;
  title: string; // Add other properties as needed
}

const ViewInstory = () => {
  const router = useRouter();
  const [stories, setStories] = useState<Story[]>([]); // Define the state type here
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'new-instory'));
        const storiesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Story[]; // Type assertion here
        setStories(storiesList);
      } catch (error) {
        console.error("Error fetching stories: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* -------------------------------Header--------------------------- */}
      <div className="w-full p-2 bg-custom-bg">
        <ul className="flex items-center h-full">
          <li className="flex items-center px-4">
            <Image
              src="/instagram-stories.png"
              alt="instory"
              width={40}
              height={40}
              className="object-contain bg-custom-bg my-2"
            />
          </li>
          <li className="flex items-center">
            <h1 className="text-header-bg text-xl xl:text-2xl px-4 font-sfPro font-medium">
              Instory
            </h1>
          </li>
        </ul>
      </div>

      {/* -------------------------------Header--------------------------- */}

      <div className='m-4'>
        {/* -----------------------------Search Bar--------------------------- */}
        <div>
          <div className="flex justify-center">
            <Paper
              component="form"
              variant="outlined"
              sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                border: '1px solid #ccc',
                borderRadius: '8px',
              }}
            >
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" inputProps={{ 'aria-label': 'Search' }} />
            </Paper>
          </div>
        </div>
        {/* ----------------------Search Bar--------------------------- */}
        {/* ----------------------New Instory Button--------------------- */}
        <div className="mt-4 mb-2">
          <Button
            variant="contained"
            className="bg-[#D97740] font-sfPro text-[1rem] rounded-md text-transform-none"
            onClick={() => router.push('/instory/new-instory')}
            style={{ width: '200px' }}
          >
            New Instory
          </Button>
        </div>
        {/* ----------------------Preview Button---------------------- */}
        <div>
          <Button
            variant="outlined"
            className="border-[#D97740] rounded-md text-[#D97740] font-sfPro text-[1rem] text-transform-none"
            style={{ width: '200px' }}
          >
            Preview Instory
          </Button>
        </div>

        {/* -------------------------------Tabs------------------------------- */}
        <div className="grid grid-cols-6 pt-6 pb-2 ">
          <Button variant="text" className="text-transform-none font-sfPro text-gray-500 text-[0.9rem]">
            All
          </Button>
          <Button variant="text" className="text-transform-none font-sfPro text-gray-500 text-[0.9rem]">
            Active
          </Button>
          <Button variant="text" className="text-transform-none font-sfPro text-gray-500 text-[0.9rem]">
            Draft
          </Button>
        </div>
        {/* -------------------------------Tabs------------------------------- */}

        {/* Display loading or fetched stories */}
        {loading ? (
          <p>Loading stories...</p>
        ) : (
          stories.map(story => (
            <div key={story.id}>
              {/* Render each story here */}
              <p>{story.title}</p> {/* Adjust according to your story structure */}
            </div>
          ))
        )}

        <AccViewInstory />
      </div> 
      <Navbar />
    </div>
  );
}

export default ViewInstory;
