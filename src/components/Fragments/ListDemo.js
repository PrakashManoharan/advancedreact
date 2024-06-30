import React, { Component, Fragment } from 'react';

export default class ListDemo extends Component {
  render() {
    const colors = [
      { id: 1, color: 'red' },
      { id: 2, color: 'blue' },
      { id: 3, color: 'green' },
    ];

    return (
      <>
        {colors.map((item) => (
          <React.Fragment key={item.id}>{item.color}</React.Fragment>
        ))}
      </>
    );
  }
}
