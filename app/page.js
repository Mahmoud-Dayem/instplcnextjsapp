import React from 'react';
import NavigationBar from "./NavigationBar";
import GetAllForms from "@/components/get-all-forms";


export default function Home() {
  return (
    <main >
      <NavigationBar />
      <GetAllForms/>
      
    </main>
  );
}
