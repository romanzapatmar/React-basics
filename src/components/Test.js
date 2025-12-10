import React from 'react'

function Test(props) {
 
  return (
    <>
     <h1>Hello, {props.name}</h1>
     <h2>Your name is{props.age}</h2>
    </>
  )
}

export default Test