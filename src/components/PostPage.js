import React, { DOM, PropTypes } from 'react';

import { Item } from 'semantic-ui-react';
import BlogItem from 'components/widgets/blog/Item';
import request from 'superagent';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: {
      metaInfo: {
        id: void 0,
        author: '',
        createdAt: '',
        updatedAt: ''
      },
      imageArgs: {
        src: '',
        width: void 0,
        height: void 0,
        alt: '',
      },
      header: '',
      text: '',
      likes: void 0
    }};
  }

  componentDidMount() {
    this.fetchPost(this.props.params.id);
  }

  fetchPost(postId) {
    request.get(
      `http://localhost:3001/posts/${postId}`,
      {},
      (err, res) => {
        this.setState({ post: res.body });
      }
    );
  }

  render() {
    const { post } = this.state;

    return DOM.div(null,
      React.createElement(Item.Group, {},
        React.createElement(Item, {},
          React.createElement(BlogItem,
            { post }
          )
        )
      )
    );
  }
}

Post.propTypes = {
  params: PropTypes.object
};

export default Post;
