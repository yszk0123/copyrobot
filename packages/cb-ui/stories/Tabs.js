import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Tabs from '../components/Tabs';
import Tab from '../components/Tab';

storiesOf('Tabs', module)
  .add('multi tab', () => (
    <div>
      <Tabs items={[
        <Link to="/"></Link>
      ]}>
        <Tab label="hello 1 (self)" />
        <Tab label="hello 2 (other)" />
        <Tab label="hello 3 (self)" />
      </Tabs>
    </div>
  ));
