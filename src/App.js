import { Suspense, lazy  } from 'react';
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Logo from './assets/logo.png';

/* Lazy loads route containers to save on bundle size */
const Feed = lazy(() => import('./containers/Feed'));
const PostInfo = lazy(() => import('./containers/PostInfo'));
const User = lazy(() => import('./containers/User'));

/*
  UPGRADES:
  - In the feed page use a pop up to display the posts instead of routing to a different page. To make the experience smoother.
  - Consider caching the data so that on load the app uses the cached data until it can complete the api request.
  - When the appliation grows in components I would use something like storybook to document them for other devs.
  - Add an error boundary in case the network fails to load
  - Make sure that we stay on top of dynamic import opportunities to manage bundle size. Import logic only when requirements are met and it's needed.
  - It might be worth to consider using preact to save on bundle size and next.js to make content more accessible to bots and improve SEO
*/

const App = () => (
  <>
    <header>
      <Link to="/">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
    </header>
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="post/:userId" element={<PostInfo />} />
          <Route path="user/:userId" element={<User />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  </>
);

export default App;
