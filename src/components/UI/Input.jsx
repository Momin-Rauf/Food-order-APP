import React from "react";
    const Input = React.forwardRef((props,ref)=>{
    return (
        <div>
        <label className="rounded-r-none px-2 shadow-sm shadow-black my-1.5 bg-blue-900 text-white rounded-3xl border-l-2 border-b-2 border-t-2  w-28 border-[1px] border-blue-900" htmlFor={props.input.id} >{props.label}</label>
        <input className="rounded-l-none px-2 shadow-sm shadow-black my-2 border-r-2 border-t-2 border-b-2 rounded-3xl  w-28 border-[1px]  border-blue-900" ref={ref}  {...props.input}/>
        </div>
    )
});
export default Input;