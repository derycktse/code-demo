import Document, { Html, Head, Main, NextScript,  } from 'next/document'



class MyDocument extends Document {
  static async getInitialProps(ctx) {
    console.log('document getinitial props fired!!')
    console.log("document url", ctx.req.url)
    if (typeof window !== 'undefined') {
      return {};
    }
    const { state, store, req } = ctx;
    const initialProps = await Document.getInitialProps(ctx);
    return {
      store,
      state,
      req,
      ...initialProps,
    };
  }

  render(){
    const {req} = this.props
    console.log('document render')
    return (
      <Html>
        <Head>
          <title>title{req.url}</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument;


export function getServerSideProps({params,req,res,query,preview,previewData,resolvedUrl,locale,locales,defaultLocale}) {
  console.log('document getServerSideProps')
  return {
    document: 'getServerSideProps'
  }
}