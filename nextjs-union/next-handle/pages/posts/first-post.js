import React, { useState, useEffect } from 'react';

import ErrorBoundary from '../../src/component/error-boundary'

import Link from 'next/link';
let obj = {
  data: {
    a: 1
  }
}
export default function FirstPost() {
  console.log('post render')

  useEffect(() => {

    setTimeout(() => {
      console.log(123);
      throw Error()
    }, 3000)
  });

  // const {obj:{c: {}}} = obj;

  if (typeof window !== "undefined") {
    obj = {}
  }

  return (
    <>
      {/* <ErrorBoundary> */}
        <h1>First Post{obj.data.a}</h1>
        <h2>
          <Link href="/">Back to home</Link>
          <a href="/">Back to home</a>
        </h2>
      {/* </ErrorBoundary> */}
    </>
  );
}

// export function getServerSideProps() {
//   console.log('post getServerSideProps')
//   return {
//       props: { message: "Welcome to the About Page" },
//   };
// }

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   console.log('get static props')

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       // posts,
//     },
//   }
// }
