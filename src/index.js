import React from 'react'
import ReactDom from 'react-dom'
import CheckboxList from './CheckboxList'

function main(){
  return (
    <div>
      <CheckboxList/>
    </div>
  );
}

ReactDom.render(<CheckboxList/>, document.getElementById('root'));