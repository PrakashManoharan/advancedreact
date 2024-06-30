import React, { Component } from 'react';
import TableDemo from './TableDemo';
import ListDemo from './ListDemo';

export default class Fragments extends Component {
  render() {
    return (
      <>
        <h1>Fragments Demo</h1>
        <br />
        <TableDemo /> <br />
        <ListDemo />
      </>
    );
  }
}
