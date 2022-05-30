import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ListPage from "./pages/ListPage/ListPage"
import SinglePage from "./pages/SinglePage/SinglePage"
import NewPage from "./pages/NewPage/NewPage"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="users">
            <Route index element={<ListPage />} />
            <Route path=":userId" element={<SinglePage />} />
            <Route path="new" element={<NewPage />} />
          </Route>
          <Route path="products">
            <Route index element={<ListPage />} />
            <Route path=":productId" element={<SinglePage />} />
            <Route path="new" element={<NewPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
