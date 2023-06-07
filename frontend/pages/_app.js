import { Provider } from "react-redux";
import { store } from "../store/store";
import "../styles/globals.css";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
<<<<<<< HEAD
let persistor = persistStore(store);
=======

let persistor = persistStore(store);

>>>>>>> 2ea43e5ade91e79752c8a50915fe394d32a43078
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
       <PersistGate  persistor={persistor} loading={null}>
       <Component {...pageProps} />;
      </PersistGate>
    </Provider>
  )
}
export default MyApp;