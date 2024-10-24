import React from 'react';

const Table = ({ columns, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column, columnIndex) => (
              <td key={columnIndex}>{row[column.selector]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
