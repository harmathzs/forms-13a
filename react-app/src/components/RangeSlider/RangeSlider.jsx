import { useState } from "react"
export default function RangeSlider(props) {
    const {onSlide} = props
    const [number, setNumber] = useState(50)

    const handleSlide = e => {
        const {value} = e.target
        const newNumber = +value
        //console.log('handleSlide e', e)
        onSlide(newNumber)
        setNumber(newNumber)
    }

    return (
        <>
        <label htmlFor="adv-range">Range:</label>
        <input type="range" id="adv-range" name="adv-range" 
            min="0" max="100" step="1" value={number} 
            onInput={handleSlide} />
        <span id="rangeValue" style={{minWidth:'32px'}}>{number}</span>        
        </>
    )
}