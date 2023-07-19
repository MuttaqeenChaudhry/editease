import React from 'react'

function Alert(props) {
    const capitalize =(word)=>{
        const stringrcv = word.toLowerCase();
        return stringrcv.charAt(0).toUpperCase() + stringrcv.slice(1);
    }
    return (
        <div style={{height: '60px'}}>
        {props.alert &&
        <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.typ)}</strong>: {props.alert.msg}
        </div>
        }
        </div>
    )
}

export default Alert
