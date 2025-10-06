import { useState } from "react"
const NumberInput = props => {
    const [number, setNumber] = useState(42)

    const handleNumberChange = e => {
        //console.log('handleNumberChange e', e)
        const newNumberValue = e.target.value
        console.log('newNumberValue', newNumberValue)
        setNumber(newNumberValue)
    }

    return (
    <>
    <label htmlFor="adv-number">Number:</label>
    <input type="number" id="adv-number" name="adv-number" min="0" max="100" step="1" value={number} 
        onChange={handleNumberChange} />
    </>
    )
}
export default NumberInput
