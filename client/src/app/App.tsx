

import { RouterProvider } from 'react-router-dom';
import './App.css'
import { router } from './router/router';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
      
        
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
   
  );
}

export default App;
