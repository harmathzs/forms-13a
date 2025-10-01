import { Fragment } from "react";

export default function RadioGroup(props) {
    // TODO - state?
    // lifecycle methods?

    return (
        <div className="radio-group">
            {props.ids.map((id, idx)=>
            <Fragment key={idx}>
                <input
                    type="radio"
                    id={id}
                    name={props.name}
                    value={props.values[idx]}
                />
                <label htmlFor={id}>{props.labels[idx]}</label>
            </Fragment>)}

        </div>        
    )
}