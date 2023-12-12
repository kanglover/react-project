import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Page from './Page';
import LoginOrRegisterContainer from '../containers/LoginOrRegister';
import { RootState } from '../store';
import { useNavigate } from 'react-router-dom';

const LoginOrRegister = () => {
  const { authenticated } = useSelector<RootState, RootState['user']>((state) => state.user);
  const navigate = useNavigate();

  /*
   * Redirect to '/' if is already logged in.
   */
  useEffect(() => {
    if (authenticated) {
      navigate('/');
    }
  }, [authenticated]);

  const pageTitle = () => {
    return 'LoginOrRegister | reactGo';
  };

  const pageMeta = () => {
    return [
      { name: 'description', content: 'A reactGo example of a login or register page' },
    ];
  };

  const pageLink = () => {
    return [];
  };

  const getMetaData = () => ({
    title: pageTitle(),
    meta: pageMeta(),
    link: pageLink(),
  });

  return (
    <Page {...getMetaData()}>
      <LoginOrRegisterContainer />
    </Page>
  );
};

export default LoginOrRegister;
