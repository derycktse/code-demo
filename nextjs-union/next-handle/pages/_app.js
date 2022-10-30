// import App from 'next/app'
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';


const reducer = (state = { tick: 'init', tack: 'init', toe: 'init' }, action) => {
  switch (action.type) {
    case 'TICK':
      return { ...state, tick: action.payload };
    case 'TACK':
      return { ...state, tack: action.payload };
    case 'TOE':
      return { ...state, toe: action.payload };
    default:
      return state;
  }
};

export const makeStore = initialState => {
  const store = createStore(reducer, initialState);

  return store;
};

function MyApp({ Component, pageProps, optimize }) {

  debugger
  console.log('render optimize', optimize)
  const { buildId } = optimize
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

MyApp.getInitialProps = async function ({ Component, ctx }) {

  console.log('_app getInitial Prop fired')
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
    // env: ctx.state.env || {},
    // region: ctx.state.country,
    // language: ctx.state.language,
    // subdomain: ctx.state.subdomain,
    // optimize: ctx.state.optimize || {},
  };
}

export default withRedux(makeStore, {
  debug: true
})(MyApp)