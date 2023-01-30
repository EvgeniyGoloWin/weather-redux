import React, {useState} from 'react';
import Cup from '../src/assets/images/cup EFA.jpg'
import Champions from '../src/assets/images/Chemp leg.jpg'

export default function Question({question}) {
    const [open,setOpen] = useState(false);

    return (
        <section>
            <div className={open ? "open" : "closed"}>
                <h4>{question.title}</h4>
                <button onClick={()=> setOpen(!open)}>{open ? "-" : "+"}</button>
            </div>
            {open && <p>{question.info}</p>
            }
        </section>
    );
};
