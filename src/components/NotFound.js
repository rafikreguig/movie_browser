import React from 'react'
import Hero from './Hero'

export default function NotFound() {
  return (
    <div>
        <Hero text="Oops!"/>
        <h3 className="m-5">This page can't be found.</h3>
    </div>
  )
}
