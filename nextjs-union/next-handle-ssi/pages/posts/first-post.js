import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';

import ErrorBoundary from '../../src/component/error-boundary'
import Header from '../../src/component/header'

import Link from 'next/link';
let obj = {
  data: {
    a: 1
  }
}

const ClientHeader = ({ headerData }) => {
  // return (
  //   <div>
  //     this is client header
  //   </div>
  // )
  console.log(headerData)
  return (
    <>
      {headerData.map(data => {
        return <li>{data.name}</li>

      })}
    </>
  )
}
class FirstPost extends React.Component {
  componentDidMount() {
    const { headerData } = this.props;
    const dom = document.getElementById('myh1')
    ReactDom.render(<ClientHeader headerData={headerData} />, dom)
  }
  render() {
    const { headerData } = this.props
    return (
      <>
        <Header />
        {/* <ErrorBoundary> */}
        <h1 id="myh1">{obj.data.a}</h1>
        <h1>First Post</h1>
        <h2>
          <Link href="/">Back to home</Link>
          <a href="/">Back to home</a>
        </h2>
        {/* </ErrorBoundary> */}
      </>
    );
  }
}
export default FirstPost;

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


// This gets called on every request
export async function getServerSideProps() {

}

