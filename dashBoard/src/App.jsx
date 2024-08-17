import MainContainer from './components/dashboard-ui/MainContainer';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/dashboard"
          element={<MainContainer />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
