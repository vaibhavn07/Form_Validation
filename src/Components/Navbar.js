import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
 background-color: #000;
    height: 3rem;
    width: 100vw;
    font-weight: 100;
    /* font-family:"ariel"  */
`;
function Navbar() {
  return (
    <Nav>
      <h1 className='text-center text-white '>Multi Step Form</h1>
    </Nav>
  )
}

export default Navbar
