import React from 'react'
import { userContext } from './context'

export default function () {
  let user = React.useContext(userContext)

  return (
    <div>
        <h1 style={{textAlign:"center"}}>Welcome React Store</h1>
        <p>Hello: {user}.</p>
    </div>
  )
}
