import React from 'react';
import './Template.css';

const Templete = ({ children, todosLength }) => {
  return (
    <div className="Template">
      <h2 className="title">오늘의 할 일 ({todosLength})</h2>
      <div>{children}</div>
    </div>
  );
};

export default Templete;
