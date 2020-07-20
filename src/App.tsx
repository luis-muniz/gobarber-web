import React from 'react';
import GlobalStyled from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AppProvider from './hooks/index';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>

      <GlobalStyled />
    </>
  );
};

export default App;
