import React from 'react';
import HOC from './HOC';

class Likes extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.username}
        <p>You have liked this post {this.props.countNumber} times.</p>
        <button onClick={this.props.handleClick}>Like</button>
      </div>
    );
  }
}

const EnhancedLikes = HOC(Likes, 10);

export default EnhancedLikes;
