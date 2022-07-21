import { Routes, Route } from "react-router-dom";
import Feed from './containers/Feed';
import PostInfo from './containers/PostInfo';
import User from './containers/User';
import Logo from './assets/logo.png';

const App = () => (
  <>
    <header>
      <img src={Logo} alt="logo" className="logo" />
    </header>
    <div className="app">
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="post/:userId" element={<PostInfo />} />
        <Route path="user/:userId" element={<User />} />
      </Routes>
    </div>
  </>
);

export default App;
