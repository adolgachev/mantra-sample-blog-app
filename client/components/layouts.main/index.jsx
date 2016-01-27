import React from 'react';

import AppBar from 'material-ui/lib/app-bar';
import AppCanvas from 'material-ui/lib/app-canvas';
import Paper from 'material-ui/lib/paper';

import Navigations from '../navigations/index.jsx';

const Layout = ({content = () => null }) => (
  <AppCanvas>
    <div className="container-fluid">

      <AppBar title="Mantra Sample" />

      <div className="row middle-xs">
        <Navigations />
      </div>

      <div className="row middle-xs">
        <Paper className="col-sm-12">
          <main className="box">{content()}</main>
        </Paper>
      </div>

    </div>
  </AppCanvas>
);

export default Layout;
