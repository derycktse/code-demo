
import ErrorBoundary from '../src/component/error-boundary'

import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { makeStore } from '../src/store/index';


function MyApp({ Component, pageProps, optimize, store }) {
  debugger
  console.log('_app render')

  const { buildId } = optimize
  return (
    <Provider store={store}>
      <div id="myapp">
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </div>
    </Provider>
  )
}


MyApp.getInitialProps = async function ({ Component, ctx }) {

  debugger
  console.log('_app getInitial Prop fired')
  // console.log("app url", ctx.req.url)
  let optimize;
  if (typeof window === 'undefined') {
    // matchStateToCtx();
    optimize = {}
  }


  console.log('optimize', optimize)
  return {
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
    optimize,
  };
}

// export default MyApp;
export default withRedux(makeStore, {
  debug: true
})(MyApp);

export function getServerSideProps({ params, req, res, query, preview, previewData, resolvedUrl, locale, locales, defaultLocale }) {
  console.log('app getServerSideProps')
  return {
    app: 'getServerSideProps'
  }
}