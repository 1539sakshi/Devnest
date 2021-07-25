import { useState } from 'react';
import '../index.css';
import Card from './Card';

function Container({ list }) {
    const [data, setData] = useState(list);
    return (
        <div>
        <h1>Calorie Read Only</h1>
        <div className="container">
            {
                data.map((element, index) => {
                    return <Card key={index} setData={setData} cals={element.cals} name={element.name} index={index} data={data} />
                })
            }
        </div>
        </div>
    );

}

export default Container;