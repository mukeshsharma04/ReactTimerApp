import React from 'react';
import {Link, IndexLink}  from 'react-router';


var DrawerMenu = (props) => {
 return (
  <div className="mdl-layout__drawer hel">
   <span
    className="mdl-layout-title" >
    React Timer App
   </span>
   <nav className="mdl-navigation">
    <ul className="demo-list-item mdl-list">
     <li className="mdl-list__item">
      <IndexLink to="/" activeClassName="active">
       Timer
      </IndexLink>
     </li>
     <li className="mdl-list__item">
      <Link to="/countdown" activeClassName="active">
       Countdown
      </Link>
     </li>
    </ul>
   </nav>
  </div>
 );
}

module.exports = DrawerMenu;
