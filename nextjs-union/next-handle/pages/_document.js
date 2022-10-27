import Document, { Html, Head, Main, NextScript,  } from 'next/document'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    console.log('document getinitial props fired!!')
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
    return (
      <Html>
        <Head>
          <title>my document</title>
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