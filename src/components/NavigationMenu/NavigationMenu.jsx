import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import './NavigationMenu.css'; 
import { Link } from 'react-router-dom';

function NavigationMenu() {
  return (
    <div className="sidebar d-flex flex-column align-items-center p-3 bg-white" bg="light">
      <div className="avatar mb-4">
        <Image
          src="https://randomuser.me/api/portraits/men/41.jpg"
          roundedCircle
          className="avatar-img"
        />
      </div>
      <Nav  className="flex-column w-100 nav-links">
        <Nav.Link eventKey="link-1"><Link to='/orders' className='nav-link' >ПРИХОД</Link></Nav.Link>
        <Nav.Link eventKey="link-2"><Link to='/orders' className='nav-link' >ГРУППЫ</Link></Nav.Link>
        <Nav.Link eventKey="link-3"><Link to='/products' className='nav-link' >ПРОДУКТЫ</Link></Nav.Link>
        <Nav.Link eventKey="link-4"><Link to='/orders' className='nav-link' >ПОЛЬЗОВАТЕЛИ</Link></Nav.Link>
        <Nav.Link eventKey="link-5"><Link to='/orders' className='nav-link' >НАСТРОЙКИ</Link></Nav.Link>
      </Nav>
    </div>
  );
}

export default NavigationMenu;
