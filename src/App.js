import { Routes, Route } from "react-router-dom";
import Feed from './containers/Feed/Feed';
import PostInfo from './containers/PostInfo/PostInfo';
import User from './containers/User/User';
import Logo from './assets/logo.png';

function App() {

  return (
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
}

export default App;
