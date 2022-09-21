import {useContext} from 'react';
import { PoleContext } from '../../utils/GlobalState';
function Thickness ()
{
    const {pole, updateThickness} = useContext(PoleContext)
    const thicknessArray = [0, 4, 5, 6, 7, 8, 10]
    const handleClick = event =>
    {
        updateThickness(Number(event.target.value))
    }
    return (
        <div>
            <select id='thicknessSelect' value={pole.thickness} defaultValue={0} onChange={handleClick}>
                {thicknessArray.map((thickness) => (
                        <option value={thickness} key={thickness}>{thickness}</option>
                    ))}
            </select>
        </div>
    )
}
export default Thickness