import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SearchBox from './pages/SearchBox';
import Dashboard from './pages/Dashboard';
import Study from './pages/Study.jsx';
import Finance from './pages/Finance.jsx';
import Todo from "./pages/Todo.jsx";
import Health from './pages/Health.jsx';

function App() {
  return (
    <Router>
      <SearchBox />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/study" element={<Study />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/health" element={<Health />} />
      </Routes>
    </Router>
  );
}

export default App;
