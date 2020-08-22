import React from 'react';

function Age(props) {
    return(
        <button onClick={props.clicked} className="btn btn-primary" style={{margin:'10px'}}>Age</button>
    )
    
}

export default Age;
