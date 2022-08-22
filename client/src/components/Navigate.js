
import React from "react";

  
  import {
      Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,   
  } from 'reactstrap';

const Navigate = () => {



 window.addEventListener('load', ()=> {
  const toggleBtn = document.getElementById('btn')
  const bar = document.getElementById('box')


    const toggle = (e) =>{


bar.style.display = 'block'
 console.log('hi',bar)
    
    } 

  toggleBtn.addEventListener('click', ()=> {

    toggle();
  })

 

 })



  
    return (
      <header className=" bg-dark-gradient">
   
        
      <Navbar className="font-cursive-bold " id="1">
        <div className="brand-toggle">
        <NavbarBrand className="text-beige" href="/"><h1>Your Blog Site</h1></NavbarBrand>
        <NavbarToggler className="toggleButton bg-accent-green" id="btn"/>
        </div>
        
       
          <Nav className="me-auto " id="navigationBar" navbar>
            <div className="me-auto hru " id="box" >
            <NavItem>
              <NavLink href="/"><h2 className="text-beige"><i class="fa-solid fa-book-open"/> Blog</h2></NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/about"><h2 className="text-beige"><i class="fa-solid fa-book-open-reader"></i> About</h2></NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/add-blog"><h2 className="text-beige"><i class="fa-solid fa-plus text-beige"/> Add Blog</h2></NavLink>
            </NavItem>
            </div>
          
          
          </Nav>
         
      </Navbar>
  

      </header>
    )
}

export default Navigate;