import React from 'react'

function TableRow(props){
    
    return(
       <tr>
           <td>{props.data.age}</td>
           <td>{props.data.name}</td>
           <td>{props.data.points}</td>
           <td>{props.data.rank}</td>
       </tr>
    )
}

export default TableRow;