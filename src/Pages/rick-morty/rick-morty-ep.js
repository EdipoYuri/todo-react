import React, {useState, useEffect} from 'react';
import './rick-morty-style.css'

const Episodes = () => {
    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        getEpisodes()
    }, [])

    const getEpisodes = async () => {
        const response = await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes')
        const jsonData = await response.json()
        setEpisodes(jsonData._embedded.episodes)
        console.log(episodes)
    }

    return (
        <div className="episodes-holder">
            {episodes.map((item, index) => 
                <div className="episode-card" key={index}>
                    <p className="ep-title">{item.number} - {item.name}</p>
                    <img className="ep-cover-image" src={item.image.medium} alt="Episode cover" />
                    <div className="ep-description">
                        <p>Season {item.season}</p>
                        <div dangerouslySetInnerHTML={{__html:item.summary}}></div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Episodes