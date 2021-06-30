import React from 'react'


const Checkbox = ({id, text}) => {

    //const {id, text} = props
    //another option const Checkbox = (props) =>
    return (
        <div>
            <input type='checkbox' data-id={id} name='checkbox' /> {text}
        </div>
    );
}

export default Checkbox