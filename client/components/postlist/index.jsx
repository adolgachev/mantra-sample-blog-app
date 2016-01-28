import React from 'react';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

class PostList extends React.Component {
  render() {
    const {posts} = this.props;

    return (
      <List>
        {posts.map(post => (
          <ListItem key={post._id} primaryText={post.title} onTouchTap={this.goToPost.bind(this, post._id)} />
        ))}
      </List>
    );
  }

  goToPost(key) {
    FlowRouter.go(`/post/${key}`);
  }
}

export default PostList;
