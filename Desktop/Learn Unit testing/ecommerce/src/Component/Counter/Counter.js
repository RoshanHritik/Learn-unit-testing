import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

 function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount((prev) => prev + 1);
    };
    const decrement = () => {
        setCount((prev) => prev - 1);
    };
    const restart = () => {
        setCount(0);
    };
    

const switchSigns = () => {
    setCount((prev) => prev * -1);
};

return (
    <div>
        <h1>
            Count: <h3 data-testid="count">{count}</h3>
        </h1>
        <div>
            <button onClick={increment}> Increment </button>
            <button onClick={decrement}> Decrement </button>
            <Button onClick={restart}> Restart </Button>
            <button onClick={switchSigns}> Switch Signs </button>
        </div>
    </div>
);
 }


export default Counter;