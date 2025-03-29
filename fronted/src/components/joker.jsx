import { useState, useEffect } from "react";


function Joker() {
    let [joke, setJoke] = useState({ } );
    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewjoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }
    useEffect(()=>{
        async function getFirstJoke(){
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });

        }
        getFirstJoke();
    } ,[])


    return (
        <>
            <h2>This is  page</h2>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
            <button onClick={getNewjoke}>click me</button>

        </>
    )
}

export default Joker


