import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/router";

import { Provider } from "react-redux";
import store from "./store/store";

import { YMaps } from "@pbe/react-yandex-maps";
import { Footer } from "@/widgets/Footer";

function App() {
  return (
    
    <YMaps>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </YMaps>
   
  
  );
}

export default App;
