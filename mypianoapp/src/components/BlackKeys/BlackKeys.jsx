import { useState } from 'react';
import './blackKeys.css';

const BlackKeys = () => {
    

    return (
        <div className="blackKeys">
            <div className='columnLeft'>
                <button className='blackKey'>DO#</button>
                <button className='blackKey'>RE#</button>
            </div>

            <div className='columnRight'>
                <button className='blackKey'>FA#</button>
                <button className='blackKey'>SOL#</button>
                <button className='blackKey'>LA#</button>
            </div>
            
            
        </div>
        

       
    )
}


export default BlackKeys