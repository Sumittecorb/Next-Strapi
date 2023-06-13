import { Provider } from "react-redux";
import { store } from "../store/store";
import "../styles/globals.css";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import CardSkeleton from "../components/LoaderSkeleton/cardSkeleton";

let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
       <PersistGate  persistor={persistor} loading={CardSkeleton}>
       <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )

}

export default MyApp;
