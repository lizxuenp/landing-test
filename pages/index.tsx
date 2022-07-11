import type { NextPage } from 'next';
import Image from 'next/image';
import sec from '../public/cyber-4511128_960_720.jpg';
import IOT from '../public/online.jpg';
import IMG4 from '../public/IMG4-removebg-preview.png';
import octocat from '../public/Octocat.png';

import { BeakerIcon, DotsCircleHorizontalIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { LayoutContext } from '../components/layout';
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import Post from '../components/post';
import Like from '../components/like';

const Home: NextPage = () => {
  const { db } = useContext(LayoutContext);
  const router = useRouter();
  const [currentUser, setCurentUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<DocumentData[]>([]);

  const didRunRef = useRef(false);

  useEffect(() => {
    if (didRunRef.current === false) {
      didRunRef.current = true;

      // console.log('index/useEffect');
      const auth = getAuth();
      let unsub = onAuthStateChanged(auth, (user) => {
        if (user) {
          // console.log('index/useEffect/setCurentUser(user)', user);
          setCurentUser(user);

          const postsData: DocumentData[] = [];
          const getPosts = async () => {
            let postDocs = await getDocs(collection(db, "posts"));
            postDocs.forEach((doc) => {
              postsData.push({ ...doc.data(), id: doc.id });
            });
            console.log(postsData);
            setPosts(postsData);
          }
          getPosts();

        } else {
          // console.log('index/useEffect/setCurentUser(null)');
          setCurentUser(null);
        }
      });
      return unsub();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='space-y-6 pb-8'>
      <div className='flex flex-col lg:grid lg:grid-cols-5 gap-6 px-8'>
        <div className='h-64 lg:col-span-3 rounded-3xl bg-cyan-400 flex items-center justify-center'>

        </div>
        <div className='h-64 lg:col-span-2 rounded-3xl bg-gradient-to-r from-rose-200 to-rose-300 relative'>
          <div className='relative w-[190px] h-full left-0'>
            <Image src={IMG4} alt='IMG4' layout='fill' objectFit='contain' className='rounded-bl-3xl' />
          </div>
          <div className='z-30 absolute top-8 right-8 sm:right-16 md:top-16 md:right-32 lg:right-4 xl:top-16 xl:right-16 rotate-12'>
            <a href='https://github.com/lizxuenp' target='_blank' rel='noreferrer'>
              <Image src={octocat} alt='Octocat' height='70px' width='82px' />
            </a>
          </div>


        </div>
      </div>
      <div className='flex items-center gap-2'>
        <BeakerIcon className='h-8 pl-10 text-fuchsia-400' /><div className='text-xl font-bold dark:text-white-liz'>Exp</div>
      </div>
      <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-8'>

        <div className='bg-white dark:bg-gray-700 shadow-md dark:shadow-xl rounded-3xl h-[200px]'>
          <div className='h-[160px] w-full relative'>
            <Image src={sec} alt='sec' layout='fill' objectFit='cover' className='rounded-3xl' />
          </div>
          <div className='flex items-center justify-end h-[40px] px-4'>
            {/* <Like likedBy={['']} user={currentUser} /> */}
            <DotsCircleHorizontalIcon className='h-6 cursor-pointer text-gray-300 hover:text-yellow-liz' onClick={() => router.push('/security')} />
          </div>
        </div>

        <div className='dark:bg-white bg-gray-700 shadow-md dark:shadow-xl rounded-3xl h-[200px]'>
          <div className='h-[160px] w-full relative'>
            <Image src={IOT} alt='IOT' layout='fill' objectFit='cover' className='rounded-3xl' />
          </div>
          <div className='flex items-center justify-end h-[40px] px-4'>
            {/* <Like likedBy={['']} user={currentUser} /> */}
            <DotsCircleHorizontalIcon className='h-6 cursor-pointer text-gray-300 hover:text-yellow-liz' onClick={() => router.push('/')} />
          </div>
        </div>

        {
          currentUser && posts.map((item) => <Post key={`${item.id}`} user={currentUser} imgref={item.imgref} link={item.link} postId={item.id} likedBy={item.likedBy} />)
        }
      </div>

    </div>
  );
}

export default Home;
