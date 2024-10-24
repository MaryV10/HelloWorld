

import { RouterProvider } from 'react-router-dom';
import './App.css'
import { router } from './router/router';
import { YMaps } from '@pbe/react-yandex-maps';

function App() {
  return (
      
        <YMaps>
          <RouterProvider router={router} />
   </YMaps>
   
  );
}

export default App;
