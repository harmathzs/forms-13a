import { Fragment, useState } from "react";

export default function RadioGroup({name, ids, values, labels, children}) {
    const [choice, setChoice] = useState('adv-radio1')
    // lifecycle methods?

    const handleRadioChange = e => {
        console.log('handleRadioChange e', e)
        setChoice(e.id)
    }

    return (
        <div className="radio-group">
            {ids.map((id, idx)=>
            <Fragment key={idx}>
                <input
                    type="radio"
                    id={id}
                    name={name}
                    value={values[idx]}
                    onChange={()=>handleRadioChange({id})}
                />
                <label htmlFor={id}>{labels[idx]}</label>
                {/*<p>{JSON.stringify(children)}</p>*/}
            </Fragment>)}

        </div>        
    )
}