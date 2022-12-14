import React from 'react';
// import { Link } from 'react-router-dom';
import { useState, FC, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import icon from '../../assets/iconOrkesta.png'
import 'bootstrap/dist/css/bootstrap.min.css';



const SideBar = () => {

  const [open, setOpen] = useState(true);

  const [mostrar, setMostrar] = useState(true);

  const mostrarClick = event => {

    setMostrar(current => !current);

  };

  const navigate = useNavigate();
  // const rutaservidor="/"; //Pruebas
  const rutaservidor = "/Orkesta/Procollect/CRM"; //Produccion
  return (
<>



    <div id="sidebar-nav" className="list-group border-0 rounded-0 text-sm-start min-vh-100">
    <Link  to={rutaservidor + '/Dashboard'} className='list-group-item    d-inline-block text-truncate'><div className='ml-2  text-slate-200 text-sm font-medium'><i className="fa-solid fa-chart-line"></i><span className="ms-1  d-none d-sm-inline">Dashboard</span></div></Link>
    <Link  to={rutaservidor + '/SubirArchivos'} className='list-group-item    d-inline-block text-truncate'><div className='ml-2  text-slate-200 text-sm font-medium'><i className="fa-solid fa-upload"></i><span className="ms-1  d-none d-sm-inline">Subir Archivos</span></div></Link>
    <Link  to={rutaservidor + '/AdminCargas'} className='list-group-item    d-inline-block text-truncate'><div className='ml-2  text-slate-200 text-sm font-medium'><i className="fa-solid fa-user"></i><span className="ms-1  d-none d-sm-inline">Administrador de Cargas</span></div></Link>
  
      {/* <a href={rutaservidor + "/Dashboard"} className="list-group-item    d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="fa-solid fa-chart-line"></i><span className="ms-1  d-none d-sm-inline">Dashboard</span></a> */}
      {/* <a href={rutaservidor + "/SubirArchivos"} className="list-group-item   d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="fa-solid fa-upload"></i><span className="ms-1 d-none d-sm-inline">Subir Archivos</span></a>
      <a href={rutaservidor + "/AdminCargas"} className="list-group-item  d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="fa-solid fa-user"></i><span className="ms-1 d-none d-sm-inline">Administrador de Cargas</span></a> */}
      <div className="dropdown ">
        <a className="d-flex align-items-center  list-group-item border-end-0   d-inline-block text-truncate link-dark text-decoration-none dropdown-toggle" href="#" data-bs-toggle="dropdown" id="navbarDropdownReportes" aria-expanded="false"><i className="fa-solid fa-bars"></i><span className="ms-1 d-none d-sm-inline  ">Reportes</span></a>
        <ul className="dropdown-menu   text-small shadow" aria-labelledby="navbarDropdownReportes">
        <Link  to={rutaservidor + '/RepoCarga'}   className='dropdown-item border-end-0 d-inline-block text-truncate'><div className='ml-2  text-slate-200 text-sm font-medium'><span className="ms-1  d-none d-sm-inline">Reportes de Carga</span></div></Link>
        <Link  to={rutaservidor + '/RepoGestion'} className='dropdown-item border-end-0 d-inline-block text-truncate'><div className='ml-2  text-slate-200 text-sm font-medium'><span className="ms-1  d-none d-sm-inline">Reportes de Gesti??n</span></div></Link>
        <Link  to={rutaservidor + '/RepoAgentes'} className='dropdown-item border-end-0 d-inline-block text-truncate'><div className='ml-2  text-slate-200 text-sm font-medium'><span className="ms-1  d-none d-sm-inline">Reportes de Agentes</span></div></Link>
        <Link  to={rutaservidor + '/RepoCalidad'} className='dropdown-item border-end-0 d-inline-block text-truncate'><div className='ml-2  text-slate-200 text-sm font-medium'><span className="ms-1  d-none d-sm-inline">Reportes de Calidad</span></div></Link>
          {/* <li><a className="dropdown-item border-end-0 d-inline-block text-truncate" href={rutaservidor + "/RepoCarga"}> Reportes de Carga</a></li>
          <li><a className="dropdown-item border-end-0 d-inline-block text-truncate" href={rutaservidor + "/RepoGestion"}> Reportes de Gesti??n</a></li>
          <li><a className="dropdown-item border-end-0 d-inline-block text-truncate" href={rutaservidor + "/RepoAgentes"}>Reportes de Agentes</a></li>
          <li><a className="dropdown-item border-end-0 d-inline-block text-truncate" href={rutaservidor + "/RepoCalidad"}>Reportes de Calidad</a></li> */}
        </ul>
      </div>

    </div>

    </>
  )
}


export default SideBar