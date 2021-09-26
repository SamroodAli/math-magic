import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeContext from '../theme';
import Main from './Main';
import './style/App.css';

const App = () => {
  const theme = useState(false);
  return (
    <Router>
      <ThemeContext.Provider value={theme}>
        <Main />
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;
