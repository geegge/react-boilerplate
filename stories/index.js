import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';

import Button from '../src/components/shared/Button'

storiesOf('Button', module)
  .add('with name', () => (
    <Button name="Button" />
  ));