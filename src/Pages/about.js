import React from 'react'

const About = () => {
    async function teste(){
        const response = await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes')
        const jsonData = await response.json();
        console.log(jsonData);
        
    }

    return(
        <div>   
            <h1>Olá... É isso ai</h1>
            <button onClick={() => teste()}>TESTE</button>
        </div>
    )
}

export default About