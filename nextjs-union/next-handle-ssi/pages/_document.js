import Document, { Html, Head, Main, NextScript, } from 'next/document'

import Header from '../src/component/header'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    console.log('document getinitial props fired!!')
    console.log("document url", ctx.req.url)

    console.log('get server side props')
    // Fetch data from external API
    const res = await fetch('https://63661b00f711cb49d108f773.mockapi.io/api/v1/header/data1')
    const data = await res.json()

    // Pass data to the page via props

    // if (typeof window !== 'undefined') {
    //   return {};
    // }
    const { state, store, req } = ctx;
    const initialProps = await Document.getInitialProps(ctx);
    return {
      store,
      state,
      req,
      ...initialProps,
      headerData: data,
    };
  }

  render() {
    const { req, headerData } = this.props
  
    console.log('document render')
    // const headerstring = ReactDOMServer.renderToString(<Header />)
    return (
      <Html>
        <Head >
          <title>title{req.url}</title>
        </Head>
        <body>
          <Header headerData={headerData}/>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument;


// export function getServerSideProps({params,req,res,query,preview,previewData,resolvedUrl,locale,locales,defaultLocale}) {
//   console.log('document getServerSideProps')
//   return {
//     document: 'getServerSideProps'
//   }
// }
