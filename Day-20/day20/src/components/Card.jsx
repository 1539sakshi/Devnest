import '../index.css';

function Card({ index, setData, cals, name, data }) {
   
    return (
        <div className="card">
            <div>
                <p>{name}</p>
                <p>You have consumed {cals} calories today</p>
            </div>
            <button onClick={() => {
                const newData = data.filter((element, i) => index !== i);
                setData(newData);
            }}>Delete</button>
        </div>
    );
}

export default Card;