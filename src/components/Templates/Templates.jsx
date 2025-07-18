import TopMenu from '../TopMenu/TopMenu.jsx'
import NavigationMenu from '../NavigationMenu/NavigationMenu.jsx';
import { Outlet } from 'react-router-dom';
import './Templates.css';

const Templates = () => {
  return (
    <>
      <TopMenu />
      <NavigationMenu />
      <div className="main-content">
        <div className="content-wrapper">
          <Outlet /> {/* 👈 здесь будет рендериться контент маршрута */}
        </div>
      </div>
    </>
  );
};

export default Templates;
