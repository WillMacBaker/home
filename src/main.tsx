import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
        <Routes> 
            {/*TODO: REFER TO THIS PAGE IN REACT ROUTER https://reactrouter.com/start/library/routing AND CONTINUE FROM HERE */}
            <Route path= "/" element={ <App />} />

         </Routes>
      </BrowserRouter> 
  </StrictMode>
)
