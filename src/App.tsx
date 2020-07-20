import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyled from './styles/global';
import AppProvider from './hooks/index';
import Routes from './routes/index';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyled />
    </BrowserRouter>
  );
};

export default App;
