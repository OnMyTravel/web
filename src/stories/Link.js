import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Link from '../components/Link'

  storiesOf('Links', module)
    .add('Looking as a button', () => (<Router>
      <Fragment>
        <p>
          This <Link to="">Hello Link</Link> is surrounded by a nice text.
        </p>
      </Fragment>
    </Router>))

