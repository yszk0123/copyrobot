import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Comment from '../components/Comment';

storiesOf('Comment', module)
  .add('self comment', () => (
    <Comment value="hello" />
  ))
  .add('other comment', () => (
    <Comment value="hello" other />
  ))
  .add('multi comment', () => (
    <div>
      <Comment value="hello 1 (self)" />
      <Comment value="hello 2 (other)" other />
      <Comment value="hello 3 (self)" />
      <Comment value="hello 4 (other)" other />
    </div>
  ))
  .add('many comments', () => (
    <div>
      {Array.apply(null, Array(30)).map((_, i) => (
        <Comment key={i} value="hello" other={i % 2 === 0} />
      ))}
    </div>
  ));
