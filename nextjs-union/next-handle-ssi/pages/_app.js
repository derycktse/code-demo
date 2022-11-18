
import ErrorBoundary from '../src/component/error-boundary'


function MyApp({ Component, pageProps, optimize }) {
  console.log('_app render')

  const { buildId } = optimize
  return (
    <div id="myapp">
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </div>
  )
}


MyApp.getInitialProps = async function ({ Component, ctx }) {

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

export default MyApp;

export  function getServerSideProps({params,req,res,query,preview,previewData,resolvedUrl,locale,locales,defaultLocale}) {
  console.log('app getServerSideProps')
  return {
    app: 'getServerSideProps'
  }
}