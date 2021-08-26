import React from 'react';
const Qualititie = (props) => {
    return (
        <div>
            {props.qualities.map((item) => <span className={"badge m-1 bg-" + item.color} key={item._id}>{item.name}</span>)}
        </div>
    );
}

export default Qualititie;