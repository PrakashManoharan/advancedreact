import React, { Component } from 'react';
import TableColumn from './TableColumn';

export default class TableDemo extends Component {
  render() {
    return (
      <>
        <table>
          <tr>
            <TableColumn />
          </tr>
        </table>
      </>
    );
  }
}
