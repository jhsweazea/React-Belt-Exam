import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
    const history = useHistory();
    const [pirates, setPirates] = useState([])
    const [loaded, setLoaded] = useState(false)

    const changeLoaded = () => {
        setLoaded(!loaded)
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
        .then(res => {
            setPirates(res.data)
            setLoaded(true)
        })
        .catch(err => console.log(err))
    }, [loaded])

    const deleteHandler = (pirateID) => {
        axios.delete("http://localhost:8000/api/pirates/" + pirateID)
        .then(res => {
            console.log(res.data)
            changeLoaded()
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Pirate Crew</h1>
            <Link to="/new">Add a pirate!</Link>
            {
                pirates.map((pirate, index) => {
                    return(
                        <div>
                            {/* I'm not confident this V works right */}
                            <img src={pirate.pirateImage} alt="{pirate.pirateName}"/> 
                            <h2>{pirate.pirateName}</h2>
                            <button onClick={() => history.push(`/${pirate._id}`)}>View Pirate</button>
                            <button onClick={() => {deleteHandler(pirate._id)}}>Walk the Plank!</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Dashboard