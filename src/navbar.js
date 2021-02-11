import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
export default class Menu extends Component {
    render(){
        return(
            <div class="container-fluid">
              <div class="row">
               <div class="col-12" >
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <ul class="navbar-nav " >
    <li class="nav-item">
      <NavLink to="/body" activeStyle={{display:"none"}}> Home </NavLink>
    </li>
    <li class="nav-item">
    <NavLink to="/about" activeStyle={{display:"none"}}> About </NavLink>
    </li>
    <li class="nav-item">
    <NavLink to="/contacts" activeStyle={{display:"none"}}> Contacts </NavLink>
    </li>
    <li class="nav-item">
    <NavLink to="/profile" activeStyle={{display:"none"}}> Login </NavLink>
    </li>
  </ul>
</nav>
</div>
</div>
            </div>
     );
  }
}
