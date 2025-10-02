import { useEffect, useState } from "react"

export default function ColorPicker(props) {
    const {onColorPick} = props
    const [state, setState] = useState({
        color: '#263159'
    })

    const handleColorChange = e => {
        props.onColorPick(e.target?.value)
        setState({color: e.target?.value})
    }
    const componentDidUpdate = () => {
        console.log('componentDidUpdate color', state.color)
    }

    useEffect( ()=>{
        componentDidUpdate()
    }, [state,])

    return (
    <>
        <label htmlFor="adv-color">Color picker:</label>
        <input type="color" id="adv-color" name="adv-color" value={state.color} onChange={handleColorChange} />
    </>
    )
}