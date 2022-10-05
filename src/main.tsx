import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { Route, Router } from './MyRouter';
import { About, Root } from './Pages';
const container = document.getElementById('root');
ReactDOM.createRoot(container as HTMLElement).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>,
);
