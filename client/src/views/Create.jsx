import React, { useState } from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'

const Create = () => {

    const history = useHistory()

    const [pirateName, setPirateName] = useState("")
    const [pirateImage, setPirateImage] = useState()
    const [pirateTreasures, setPirateTreasures] = useState()
    const [piratePhrase, setPiratePhrase] = useState("")
    const [crewPosition, setCrewPosition] = useState("")
    const [pegLeg, setPegLeg] = useState(true)
    const [eyePatch, setEyePatch] = useState(true)
    const [hookHand, setHookHand] = useState(true)

    const [errors, setErrors] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Form submitted!")
        const postData = {
            pirateName,
            pirateImage,
            pirateTreasures,
            piratePhrase,
            crewPosition,
            pegLeg,
            eyePatch,
            hookHand
        }
        axios.post("http://localhost:8000/api/pirates/new", postData)
            .then(res => {
                history.push("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <h1>Add a Pirate, Arr!</h1>
            <Link to="/">Back to the Crew Board</Link>
            <form onSubmit={submitHandler}>
                <p>
                    Pirate Name:
                    <input type="text" onChange={e => setPirateName(e.target.value)} />
                </p>
                <p>
                    Image URL:
                    <input type="url" onChange={e => setPirateImage(e.target.value)} />
                </p>
                <p>
                    # of Treasure Chests:
                    <input type="number" onChange={e => setPirateTreasures(e.target.value)} />
                </p>
                <p>
                    Pirate Catch Phrase:
                    <input type="text" onChange={e => setPiratePhrase(e.target.value)} />
                </p>
                <p>
                    Crew Position:
                    <select onChange={e => setCrewPosition(e.target.value)}>
                        <option value="" selected disabled hidden>Choose a crew position...</option>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                </p>
                <p>
                    Peg Leg:
                    <input type="checkbox" defaultChecked onChange={e => setPegLeg(e.target.checked)} />
                </p>
                <p>
                    Eye Patch:
                    <input type="checkbox" defaultChecked onChange={e => setEyePatch(e.target.checked)} />
                </p>
                <p>
                    Hook Hand:
                    <input type="checkbox" defaultChecked onChange={e => setHookHand(e.target.checked)} />
                </p>
                <button>Add Pirate</button>
            </form>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
        </div>
    )
}

export default Create