import React, {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'

const View = () => {
    const {_id} = useParams();
    const [pirateName, setPirateName] = useState("")
    const [pirateImage, setPirateImage] = useState()
    const [pirateTreasures, setPirateTreasures] = useState()
    const [piratePhrase, setPiratePhrase] = useState("")
    const [crewPosition, setCrewPosition] = useState("")
    const [pegLeg, setPegLeg] = useState()
    const [eyePatch, setEyePatch] = useState()
    const [hookHand, setHookHand] = useState()
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${_id}`)
        .then(res =>{
            setPirateName(res.data.pirateName)
            setPirateImage(res.data.pirateImage)
            setPirateTreasures(res.data.pirateTreasures)
            setPiratePhrase(res.data.piratePhrase)
            setCrewPosition(res.data.crewPosition)
            setPegLeg(res.data.pegLeg)
            setEyePatch(res.data.eyePatch)
            setHookHand(res.data.hookHand)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>Viewing pirate:</h1>
            <h1>{pirateName}</h1>
            <img src={pirateImage} alt="{pirateName}"/> 
            <h2>"{piratePhrase}"</h2>
            <h2>About:</h2>
            <p>Position: {crewPosition}</p>
            <p>Treasures: {pirateTreasures}</p>
            <p>Peg Leg: {
                pegLeg ? "Yes" : "No"
                }</p>
            <p>Eye Patch: {
                eyePatch ? "Yes" : "No"
                }</p>
            <p>Hook Hand: {
                hookHand ? "Yes" : "No"
                }</p>
            <br/>
            <Link to="/">Back to the crew board</Link>
        </div>
    )
}

export default View
