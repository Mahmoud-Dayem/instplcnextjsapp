import React from 'react'

import { unstable_cache } from 'next/cache';
import pool from '@/app/lib/db';

const getPosts= async ()=>{

  // const requests =  unstable_cache(
  //   async () => {

      const [rows] = await pool.execute(`SELECT * FROM plc_modification_requests ORDER BY id desc`);

      return rows;
      // return await db.select().from(posts)
  //   },
  //   ['posts'],
  //   { revalidate: 100, tags: ['posts'] }

  // )
  // return requests
}
export default getPosts
