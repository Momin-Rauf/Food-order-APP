import { Fragment } from "react"

const Card = (props)=>{
    return (
        <Fragment>
            <div className="bg-white text-black rounded-2xl p-5 shadow-md shadow-black text-center " >{props.children}</div>
        </Fragment>
    )
}

export default Card;