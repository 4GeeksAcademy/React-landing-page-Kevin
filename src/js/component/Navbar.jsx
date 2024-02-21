import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <h2 className='text-white col-9'>Start Bootstrap</h2>
        <a className="navbar-brand" href="#">Home</a>
        <a className="navbar-brand" href="#">About</a>
        <a className="navbar-brand" href="#">Services</a>
        <a className="navbar-brand" href="#">Contact</a>
      </div>
    </nav>
  );
};


export default Navbar