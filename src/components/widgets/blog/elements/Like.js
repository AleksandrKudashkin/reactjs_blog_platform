import React, { PropTypes } from 'react';

import { Button } from 'semantic-ui-react';

const Like = ({ likes, addLike }) => (
  <div>
    <Button
      content='Like'
      icon='heart'
      label={{ as: 'a', basic: true, content: likes }}
      onClick={ addLike }
    />
  </div>
);

Like.defaultProps = {
  likes: 0
};

Like.propTypes = {
  likes: PropTypes.number,
  addLike: PropTypes.func
};

export default Like;
