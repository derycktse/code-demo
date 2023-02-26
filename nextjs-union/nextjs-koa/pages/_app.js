import App from 'next/app';

class MyApp extends App {
  static async getInitialProps({ctx}) {
    
    // console.log(ctx.req)
    return {}
  }
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />
  }
}


export default MyApp