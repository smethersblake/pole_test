import React from 'react';
import {useContext} from 'react';
import { PoleContext } from "../../utils/GlobalState";
import Data from '../../utils/json/inventory test.json'

function Results ()
{
    const {pole} = useContext(PoleContext)
    const size = () =>
    {
        const poleLength = parseInt(pole.length)
        if (poleLength < 1000)
        {
            return (
                <h1>Scrap Pole</h1>
            )
            
        }
        else
        {
            var diaArray = []
            for (let i = 0; i < Data.length; i++)
            {
                const dia = parseInt(Data[i]['Part No'].slice(4, 6))
                const thick = parseInt(Data[i]['Part No'].slice(6, 8))
                if (dia === pole.diameter && thick === pole.thickness)
                {
                    diaArray.push(parseInt(Data[i]['Part No'].slice(0, 4)))
                }
            }
            var closest = Math.max(...diaArray.filter(num => num <= poleLength))
            if (!isFinite(closest))
            {
                return (
                    <>Invaild Pole Size</>
                )
            }
            console.log(closest)
            return (
                <div>
                    <h1>{closest}{pole.diameter}0{pole.thickness}R</h1>
                </div>
            )
        }
    }
        return (
            <div>
                <h1>
                    {size()}
                </h1>
            </div>
        )
}
export default Results