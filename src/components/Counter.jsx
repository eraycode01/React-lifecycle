import { useState, useEffect } from 'react';


function Counter() {

    const [number, setNumber] = useState(0);
    const [name, setName] = useState("mehmet")



    useEffect(() => {

        console.log("state componenet mount edildi")

       const interval = setInterval(() => {
            setNumber((n) => n + 1)
        }, 1000)

return () => clearInterval(interval);

    }, []); // köşeli parantez ile koponentlerin mount edildiği ilk anı loglamak için okullanılır.

    useEffect(() => {
        console.log("NUMBER state güncellendi")
    }, [number]);

    return (
        <div >
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Click</button>
            <br /><hr />

        </div>
    )
}

export default Counter
