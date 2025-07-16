import React from 'react'
import GrandChild from './GrandChild'

export default function Child(prop) {
  return (
   <div>
     <h2>From child Tag, The message is: {prop.message}</h2>
     <hr />
     <GrandChild message={prop.message}/>
   </div>
  )
}
