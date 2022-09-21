import { Label, TextInput } from "flowbite-react"
import {useContext, useState} from 'react';
import { PoleContext } from "../../utils/GlobalState";
import Results from "../Results";

function Length ()
{
    const { pole, updateLength } = useContext(PoleContext)
    const [num, setNum] = useState('')
    const handleClick = () =>
    {
        const set = document.getElementById('lengthInputField').value
        updateLength(set)
        console.log(pole)
    }
    const handleNumChange = event =>
    {
        const limit = 4
        setNum(event.target.value.slice(0, limit))
    }
    return (
        <div>
            <div>
                <Label
                    htmlFor="length"
                value="Pole Length"/>
            </div>
            <TextInput
                id="lengthInputField"
                value={num}
                type="number"
                sizing="sm"
                placeholder="Enter Pole Size"
                maxLength={4}
                required={true}
                shadow={true}
                onChange={handleNumChange}
            />
            <button type="button" onClick={handleClick}>submit</button>
            <div><Results />
                {/* <Result/> */}
                {/* <h1>{pole.length}
                </h1> */}
            </div>
        </div>
    )
}
export default Length