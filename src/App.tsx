import React from 'react';

import Common from './page/Common';
import ThemeProvider from './layout/ThemeProvider/ThemeProvider';

const App: React.FC = () => {
  return (
    <ThemeProvider color="#f00000">
      <div className="App os-app">
        <Common />
      </div>
    </ThemeProvider>
  );
};

export default App;
