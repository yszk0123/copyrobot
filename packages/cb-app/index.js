import React from 'react';
import ReactDOM from 'react-dom';
import { Comment } from 'cb-ui';
import 'normalize.css';
import './styles.css';

function App() {
  return (
    <div>
      <Comment value="Hello, world!" />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.createElement('div');
  document.body.appendChild(rootElement);
  ReactDOM.render(<App />, rootElement);
});
