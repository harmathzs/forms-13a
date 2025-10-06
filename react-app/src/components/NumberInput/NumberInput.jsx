import { useState } from "react"
const NumberInput = ({onValueChange}) => {
    const [number, setNumber] = useState(42) // TODO - HF: init, min, max -> props
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(100)

    const handleNumberChange = e => {
        //console.log('handleNumberChange e', e)
        let newNumberValue = +e.target.value
        // validate number value
        if (newNumberValue<minValue) newNumberValue = minValue
        if (newNumberValue>maxValue) newNumberValue = maxValue

        console.log('newNumberValue', newNumberValue)

        if (newNumberValue != number) {
            onValueChange(newNumberValue)
            setNumber(newNumberValue)
        }
    }

    return (
    <>
    <label htmlFor="adv-number">Number:</label>
    <input type="number" id="adv-number" name="adv-number" min={minValue} max={maxValue} step="1" value={number} 
        onChange={handleNumberChange} />
    </>
    )
}
export default NumberInput
