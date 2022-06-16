import React from 'react';

//tab
import MyTabs from './Tab';

import { NavigationContainer } from '@react-navigation/native';

const AppContainer = () => {
  return (
    <>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </>
  );
};
export default AppContainer;
