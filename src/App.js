import { Routes, Route, Navigate, Link } from "react-router-dom";
import Feed from './containers/Feed';
import PostInfo from './containers/PostInfo';
import User from './containers/User';
import Logo from './assets/logo.png';

const App = () => (
  <>
    <header>
      <Link to="/">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
    </header>
    <div className="app">
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="post/:userId" element={<PostInfo />} />
        <Route path="user/:userId" element={<User />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  </>
);

export default App;
