import React from 'react'
import { link } from 'react-router-dom'
function Navbar() {
    const links=[
        {name:"Home",link:"/"},
        {name:"Movie",link:"/tv"},
        {name:'Tv Shows",link:"/"},
        {name:"My List",link:"/"},
    ]
  return (
    <div>Navbar</div>
  )
}

export default Navbar