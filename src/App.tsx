import React from 'react';
import GlobalStyled from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      <SignUp />
      <GlobalStyled />
    </>
  );
};

export default App;
