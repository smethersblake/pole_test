import { useContext } from 'react';
import { PoleContext } from '../../utils/GlobalState';
function Diameter ()
{
        const {pole, updateDiameter} = useContext(PoleContext)
    const diameterArray = [0,30, 35, 40, 45, 50, 55, 60, 70, 80, 90, 10, 12]
    const handleClickDiameter = event =>
    {
        updateDiameter(Number(event.target.value))
    }
        return (
            <div>
                <h1>Diameter</h1>
                <select id='diameterSelect' value={pole.diameter} defaultValue={0} onChange={handleClickDiameter}>
                    {diameterArray.map((diameter) => (
                        <option value={diameter} key={diameter}>{diameter}"</option>
                    ))}
                </select>
            </div>
        )
    }
export default Diameter
export var poleDiameter