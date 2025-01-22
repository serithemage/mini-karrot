import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Router basename="/mini-karrot">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* 추후 다른 라우트들이 추가될 예정 */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
