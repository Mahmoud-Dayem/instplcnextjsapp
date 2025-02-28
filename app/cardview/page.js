import React from 'react'
import CardView from '@/components/Card'
import Card from '@/components/Card'
import { unstable_cache } from 'next/cache'
import pool from '@/app/lib/db';
import getPosts from '@/components/getposts';

async function page() {

    
    let requests = await getPosts();
    

    return (
        <CardView requests={requests}/>
    )
}

export default page