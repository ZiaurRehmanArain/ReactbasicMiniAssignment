import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom";


import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbars() {
  const navigate=useNavigate()
 let Login=()=>{
    console.log('login')
    navigate('/Sigin')
  }
 let SignUp=()=>{
    console.log('SignUp')
    navigate('/Login')
  }
  return (
    <Navbar style={{fontSize:'1.5rem',backgroundColor:'rgb(248,249,247)',position:"sticky",top:0+'px',zIndex:1}}  expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link style={{textDecoration:'none'}} to='/'> <Nav.Link   href="#home">Home</Nav.Link></Link>
          <Link style={{textDecoration:'none'}} to="/Gellary"> <Nav.Link href="#home">Gellary</Nav.Link></Link> 
          <Link style={{textDecoration:'none'}} to="/Service">   <Nav.Link href="#home">Services</Nav.Link></Link> 
          <Link style={{textDecoration:'none'}} to="/Contact"> <Nav.Link href="#home">Contact </Nav.Link></Link> 
          <Link style={{textDecoration:'none'}} to="/About">  <Nav.Link href="#home">About us</Nav.Link></Link> 
         </Nav>
           
            <Button onClick={()=>Login()} variant="outline-success" style={{marginRight:10+'px'}}>SignUp </Button>
            <Button onClick={()=>SignUp()} variant="outline-success">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;