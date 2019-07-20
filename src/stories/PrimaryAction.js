import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PrimaryAction from '../components/PrimaryAction'

  storiesOf('Buttons', module)
    .add('PrimaryAction', () => <PrimaryAction onClick={action('primary-action-click')}>Hello Button</PrimaryAction>)

