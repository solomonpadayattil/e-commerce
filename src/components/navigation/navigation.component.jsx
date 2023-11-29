import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as ShyftLabLogo } from '../../assests/shyftlabs_logo.svg';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
             <ShyftLabLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/cart'>
            CART
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;