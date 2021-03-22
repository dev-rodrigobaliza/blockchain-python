import { useEffect, useState } from 'react';

function Joke() {
    const [joke, setJoke] = useState({});

    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then((json) => setJoke(json) );
    }, []);

    const { setup, punchline} = joke;

    return (
        <div>
            <h3>Joke</h3>
            <p>{setup}</p>
            <p><em>{punchline}</em></p>
        </div>
    )
}

export default Joke;