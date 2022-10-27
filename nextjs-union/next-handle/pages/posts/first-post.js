import React, { useState, useEffect } from 'react';
import Link from 'next/link';
let obj = {
  data: {
    a: 1
  }
}
export default function FirstPost() {

  useEffect(() => {

    setTimeout(() => {
      console.log(123);
    }, 3000)
  });
  if (typeof window !== "undefined") {
    // throw Error()
    obj = {}
  }

  return (
    <>
      <h1>First Post{obj.data.a}</h1>
      <h2>
        <Link href="/">Back to home</Link>
        <a href="/">Back to home</a>
      </h2>
    </>
  );
}