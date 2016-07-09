import { configure } from '@kadira/storybook';
import 'normalize.css';
import 'cb-app/styles.css';
const req = require.context('../packages', true, /\/stories\/.*\.jsx?$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
