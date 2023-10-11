import React from 'react';
import ReactDOM from 'react-dom/client';
import A from './component/A';

const root = ReactDOM.createRoot(document.getElementById('root'));
export class B extends React.Component
{
  render(){
    return(
      <h1>my name vansh ia am, 19 year old boy</h1>
    )
  }
}
root.render(
  <A></A>
);
