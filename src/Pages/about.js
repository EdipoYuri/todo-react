import React, { useState } from 'react'
import '../App.css'

const About = () => {
    const [data, setData] = useState([]);
    const [cardInfo, setCardInfo] = useState(null);

    const handleCardSearch = (event) => {
        setCardInfo(event.target.value)
    }

    const onSubmitSearchCard = (event) => {
        event.preventDefault()
        teste()
    }

    const teste = async () => {
        const response = await fetch('https://db.ygoprodeck.com/api/v6/cardinfo.php')
        const jsonData = await response.json()
        const card = jsonData.filter((item, index) => item.name === cardInfo)
        console.log("Entrou")
        console.log(card)
        setData(card)
    }

    return(
        <div>
            <form onSubmit={onSubmitSearchCard}>   
                <input type="text" onChange={handleCardSearch} />
                <button > BUSCAR </button>
            </form>
            <ul className="task-list">
                {data.map((item, index) => 
                    <li key={index}>
                        <p>Name : {item.name} | Type : {item.type}</p>
                        <p>Atk  : {item.atk} | Def  : {item.def} | Level: {item.level}</p>
                        <p>Image: </p>
                        <img src={item.card_images[0].image_url} alt="Card" />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default About