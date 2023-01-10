import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Submit.css"
import SubmitInput from "./SubmitInput";

function Submit({user}){
    const {charID} = useParams();
    var [formNum, setFormNum] = useState(2);
    const [formDesc, setFormDesc] = useState("");
    const [inputArray, setInputArray] = useState([])
    const [moveData, setMoveData] = useState([])
    // const [currComboID, setCurrComboID] = useState(null)



    // console.log(charID)
    // console.log(user)

    useEffect(() => {
        fetch(`/moves?character_id=${charID}`)
        .then((res) => res.json())
        .then(data => {
            setMoveData(data)
        })
    },[])

    function handleChange(e){
        const formText= e.target.value
        setFormNum(formText)
    }

    function handleDescChange(e){
        const formText = e.target.value
        setFormDesc(formText)
    }

    // const renderInputBoxes=(num)=>{
    //     for (let i=0; i<num; i++){
    //         console.log(num)
    //         return(
    //             <SubmitInput
    //             setInputArray={setInputArray}
    //             moveData={moveData}
    //             />

    //         )}
    // }
    console.log(inputArray)

    const renderInputBoxes = Array.from({ length: formNum }, (x, i) => {
        if (formNum != 0)
        {
        return(
            <SubmitInput
                setInputArray={setInputArray}
                moveData={moveData}
                inputArray={inputArray}
                index={i}
                
                />
        )}
      })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formNum)
        console.log(formDesc)
        console.log(parseInt(charID))
        console.log(user.id)
        fetch(`http://localhost:3000/combos`, {
            // mode: "no-cors",
            method: "POST",
            headers: {"Content-Type": 'application/json',},
            body:JSON.stringify({
                hits: formNum,
                description: formDesc,
                character_id: charID,
                user_id: user.id
            })
        })
        .then(res => res.json())
        // .then(data => {setCurrComboID(data.id)
        // console.log(data)})
        .then(setFormDesc(""))
        .then(data => submitComboMoves(data.id))
        // window.location.reload()

        // inputArray.forEach(input => fetch(`http://localhost:3000/combo_moves`, {
        //     method: "POST",
        //     headers: {"Content-Type": 'application/json'},
        //     body: JSON.stringify({
        //         combo_id: currComboID,
        //         move_id: parseInt(input)
        //     })
        // })
        // .then(res => res.json())
        // .then(data => console.log(data)))
    }

    function submitComboMoves(comboID){
        inputArray.forEach(input => fetch(`http://localhost:3000/combo_moves`, {
            method: "POST",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({
                combo_id: comboID,
                move_id: parseInt(input)
            })
        })
        .then(res => res.json())
        .then(data => console.log(data)))
    }

    return(
        <div className="submit-box">
            <form className="submit-form">
                <textarea value={formDesc} onChange={handleDescChange} placeholder="Combo Description..." name="description">

                </textarea>
                <input onKeyPress="return false" type="number" value={formNum} onChange={handleChange} id="hits" className="hits" min="2" max="10"></input>
                {renderInputBoxes}
                <button className="submit-btn" onClick={handleSubmit}>Submit Combo!</button>
            </form>
        </div>
    )

}

export default Submit;