import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import CartIcon from '../cart/cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown/cart-dropdown.component';

import { ReactComponent as ShyftLabLogo } from '../../assests/shyftlabs_logo.svg';

import './navigation.styles.scss';

const Navigation = () => {
    const isCartOpen = useSelector(selectIsCartOpen);
    
    return (
        <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <ShyftLabLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
                <CartIcon />
            </div>
            {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
        </Fragment>
    );
};

export default Navigation;