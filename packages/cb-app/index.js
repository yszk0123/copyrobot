import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router';
import Result from './components/Result';
import 'normalize.css';
import './styles.css';
import * as styles from './styles.css';

function fullImage(to, name) {
  return function FullImageContent() {
    return (
      <Link className={styles.Home} to={to}>
        <img src={`/images/${name}.jpg`} alt={name} className={styles.FullImage} />
      </Link>
    );
  };
}

const Home = fullImage('/result', 'sample1');

function App({ children }) {
  return <div>{children}</div>;
}

function NoMatch() {
  return <div>Not Found</div>;
}

const route =
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/result" component={Result} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>;

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.createElement('div');
  document.body.appendChild(rootElement);
  ReactDOM.render(route, rootElement);
});
