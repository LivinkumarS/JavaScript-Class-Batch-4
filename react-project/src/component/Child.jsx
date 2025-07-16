import React, { useContext } from 'react'
import GrandChild from './GrandChild'
import { NumberContext } from '../App';

export default function Child() {
    const number = useContext(NumberContext);
  return (
    <div><h2>Child: {number}</h2>
      <hr />
      <GrandChild /></div>
  )
}
