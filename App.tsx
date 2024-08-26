import React, { Fragment } from 'react';
import AppNavigation from './src/AppNavigation';
import { StatusBar } from 'react-native';

const App: React.FC = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" translucent backgroundColor={'transparent'} />
      <AppNavigation />
    </Fragment>
  );
};

export default App;
