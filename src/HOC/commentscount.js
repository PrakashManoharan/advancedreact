import React from 'react';
import HOC from './HOC';

class Comments extends React.Component {
  render() {
    return (
      <div>
        <p>You have commented this post {this.props.countNumber} times.</p>
        <button onClick={this.props.handleClick}>Add comment</button>
      </div>
    );
  }
}

const EnhancedComments = HOC(Comments, 5);
export default EnhancedComments;
