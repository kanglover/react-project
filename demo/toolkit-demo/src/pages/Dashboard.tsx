import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Page from './Page';
import DashboardContainer from '../containers/Dashboard';
import { RootState } from '../store';

const Dashboard = () => {
  const { authenticated } = useSelector<RootState, RootState['user']>((state) => state.user);
  const navigate = useNavigate();

  /*
   * Redirect to '/' if is not authenticated
   */
  useEffect(() => {
    if (!authenticated) {
      navigate('/');
    }
  }, []);

  const pageTitle = () => {
    return 'Dashboard | reactGo';
  };

  const pageMeta = () => {
    return [
      { name: 'description', content: 'A reactGo example of a dashboard page' },
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
      <DashboardContainer />
    </Page>
  );
};

export default Dashboard;
