import { useEffect, useState } from "react";
// import image from "../logo.svg";

export const Form = () => {
    const [counter, setCounter] = useState(0);
    const [age] = useState(0);
    console.log("Before use Effect");

    useEffect(() => {
        console.log("First Effect");
    })

    useEffect(() => {
        //  Updating
        console.log("Second Effect");
        // only once!
    }, []);

    useEffect(() => {
        //  Updating
        console.log("Third Effect");
    }, [counter, age]);

    console.log("After use Effect");
    return (
        <div>
            <h3>Counter: {counter} </h3>
            <button onClick={() => {
                setCounter(counter + 1);
            }}>Add 1</button>
            {/* <img src={image} alt="" /> */}
        </div>
    );
};




//  Prettier
//  eslint