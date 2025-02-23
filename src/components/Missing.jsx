import React from 'react';
import error from '../assets/error.png';

const Missing = () => {
  return (
    <div style={{textAlign: 'center',padding: '40px 0'}} className="missing">
        <h3><b style={{color: 'red'}}>404</b> Page not found !</h3>
        <img style={{width: '400px',height: '400px'}} src={error} alt='img'/>
    </div>
  )
}

export default Missing;