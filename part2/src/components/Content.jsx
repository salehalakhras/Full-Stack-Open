import React from 'react';
import Part from './Part';

const Content = ({ parts }) => {
   let total = parts.reduce((total, part) => total + part.exercises, 0);
  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part}></Part>)}
      <p><strong>Total of {total} exercises</strong></p>
    </div>
  )
}

export default Content
