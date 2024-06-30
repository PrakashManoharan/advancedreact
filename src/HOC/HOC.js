import React from 'react';

const HOC = (Component, data) => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: data,
        name: JSON.stringify(localStorage.getItem('username')),
      };

      console.log('name: ', this.state.name);
    }

    handleClick = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      return (
        <Component
          username={this.state.name}
          countNumber={this.state.count}
          handleClick={this.handleClick}
        />
      );
    }
  };
};

export default HOC;
