import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


const NavBar = () => (
  <nav className="nav-wrapper grey darken-3">
  <div className="container">
      <div className="row">
          <div className="col-sm-12">
              <Link to="/LogIn" className="brand-logo" />
              <SignedInLinks />
              <SignedOutLinks />
            </div>
        </div>

    </div>
</nav>
);
export default NavBar;
