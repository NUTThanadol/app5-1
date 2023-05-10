import React from 'react'
//import Route from './route'
import Route1 from './route'
import { userContext } from './context'
function App() {
  return (
    <userContext.Provider value={'Nut Tanadol'}>
    <Route1/> 
    </userContext.Provider> 
  )
  
}

export default App;
