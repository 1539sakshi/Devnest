import React from 'react';
import "./Button.css"

let count;
function Button({ state, setstate }) {
    return (
            <div className = "box" >    
                <button onClick = {() => {
                    count = state+1
                    setstate(count)
                    }}> 
                {state} 
                </button>
            </div>
    )
}
export default Button