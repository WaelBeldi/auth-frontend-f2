import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../Redux/actions/authActions';

const AppNavBar = () => {
  const isAuth = useSelector(state => state.authReducer.isAuth)
  console.log("isAuth", isAuth)
  const user = useSelector(state => state.authReducer.user)
  console.log("user:", user)

  const dispatch = useDispatch()
  
  const logout = () => {
    dispatch(logoutUser())
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
          <Button variant="secondary">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>Home</Link>
          </Button>
          {isAuth ? (
            <Button variant="secondary">
              <Link to="/profile" style={{ textDecoration: "none", color: "white" }}>Profile</Link>
            </Button>
          ) : (<></>)}
        </Nav>
        {isAuth ? <Button onClick={logout}>Logout</Button>
          : <>
            <Login />
            <Register />
          </>}
      </Container>
    </Navbar>
  )
}

export default AppNavBar