import React from 'react';
import NavigationBar from "./NavigationBar";
import GetAllForms from "@/components/get-all-forms";
import NavBar from "@/components/NavBar";


import CardView from '@/components/Card'
import Card from '@/components/Card'
import { unstable_cache } from 'next/cache'
import pool from '@/app/lib/db';
import getPosts from '@/components/getposts';


export default async function Home() {
  let requests = await getPosts();


  return (
    <main >
      <NavBar/>
      {/* <NavigationBar />  */}
      {/* <GetAllForms/> */}
      {/* <CardView requests={requests}/> */}
      
    </main>
  );
}
