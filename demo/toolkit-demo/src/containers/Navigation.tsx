import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logOut } from '../actions/users';
import { NavigationWrapper, Item, Logo } from '../css/components/navigation';
import { AppDispatch, RootState } from '../store';

const LogOut = Item.withComponent('button') as React.ElementType;

const Navigation = () => {
    const user = useSelector<RootState, RootState['user']>((state) => state.user);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const dispatchLogOut = useCallback(() => {
        dispatch(logOut());
        navigate('/login');
    }, []);

    return (
        <NavigationWrapper role="navigation">
            <Logo to="/">Ninja Ocean</Logo>
            {user.authenticated ? (
                <LogOut onClick={dispatchLogOut}>Logout</LogOut>
            ) : (
                <Item to="/login">Log in</Item>
            )}
            <Item to="/dashboard">Dashboard</Item>
            <Item to="/about">About</Item>
        </NavigationWrapper>
    );
};

export default Navigation;
