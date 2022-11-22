import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Update from './routes/Update';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/restaurants/:id" element={<Detail />} />
        <Route exact path="/restaurants/:id/update" element={<Update />} />
      </Routes>
    </Router>
  );
};

export default App;
