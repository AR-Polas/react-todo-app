import React from 'react';

const Items = (props) => {
    return (
        <div className="d-flex mb-2">
            <i className="fa fa-times bg-danger pt-2" style={{width:'30px'}} aria-hidden="true"
                onClick={() => {props.removeItems(props.id)}}
            > </i>
             <li style={{marginLeft:'10px',fontSize:'20px',color:'white'}}>{props.data}</li>
        </div>
    );
};

export default Items;