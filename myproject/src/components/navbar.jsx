import React from 'react'
import { Button, Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';
 function ComponentNavbar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">YADAH</span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
        <Link to={"/register"}>
        <Button>Get started</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/Home" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/Overview">Dashboard</Navbar.Link>
        <Navbar.Link href="/Dealsettings">Edit Product</Navbar.Link>
        <Navbar.Link href="/Category">Category</Navbar.Link>
        <Navbar.Link href="/account">Account</Navbar.Link>
        {/* <Navbar.Link href="#">Contact</Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default ComponentNavbar