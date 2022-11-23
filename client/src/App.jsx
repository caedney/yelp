import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Update from './routes/Update';
import { RestaurantsContextProvider } from './context/RestaurantsContext';

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/restaurants/:id" element={<Detail />} />
            <Route exact path="/restaurants/:id/update" element={<Update />} />
          </Routes>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
};

export default App;
