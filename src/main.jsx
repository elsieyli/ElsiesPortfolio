import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
   <StrictMode>
     <div
       style={{
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         height: '100vh',
         fontSize: '32px',
         fontWeight: 'bold',
         textAlign: 'center',
       }}
     >
       Under Maintenance...🚧
     </div>
   </StrictMode>,
 );

 //<App/> WAS HERE 
 