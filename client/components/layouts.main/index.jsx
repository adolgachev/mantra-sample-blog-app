import React from 'react';

import AppBar from 'material-ui/lib/app-bar';
import AppCanvas from 'material-ui/lib/app-canvas';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import IconButton from 'material-ui/lib/icon-button'

class Layout extends React.Component {
  render() {
    const {content} = this.props;

    return (
      <AppCanvas>
        <div>
          <AppBar title="Mantra Sample"
                  onLeftIconButtonTouchTap={this.goHome.bind(this)}
                  iconElementRight={<IconButton onTouchTap={this.goToAdd.bind(this)}><ContentAdd /></IconButton>} />

          {content()}

        </div>
      </AppCanvas>
    );
  }

  goHome() {
    FlowRouter.go(`/`);
  }

  goToAdd() {
    FlowRouter.go('/new-post')
  }
}
export default Layout;
