'use client'
import axios from "axios";
import { useEffect } from "react";
export default function Home() {
  const getDta = async () => {
    const response = await axios.get(`http://localhost:4000`)
    console.log(response);
    
  }

  useEffect(()=> {
    getDta()
  },[ ])
  return (
    <div className="" >
      hi
    </div>
  );
}
