// import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
    <div id="myapp">
      <Component {...pageProps} />
    </div>
    )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

MyApp.getInitialProps = async function({ Component, ctx }) {

  if (typeof window === 'undefined') {
    // matchStateToCtx();
  }


  return {
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
    // env: ctx.state.env || {},
    // region: ctx.state.country,
    // language: ctx.state.language,
    // subdomain: ctx.state.subdomain,
    // optimize: ctx.state.optimize || {},
  };
}

export default MyApp