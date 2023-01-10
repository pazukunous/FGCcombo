import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ViewCombo.css"
import InputButton from "./InputButton";
import InputGif from "./InputGif";


function ViewCombo(){

    const {id} = useParams();

    const [comboMoves, setComboMoves] = useState([])
    const [inputList, setInputList] = useState([]) //array of inputs (lk,mk,hk)
    const [char, setChar] = useState("") //char ID
    const [currInput, setCurrInput] = useState();
    // const [charName, setCharName] = useState("");

    useEffect(()=>{
        fetch(`/combo_moves?combo_id=${id}`)
        .then((res) => res.json())
        .then(data => {
            setComboMoves(data)
        })
    },[])

    useEffect(() => {
        fetch(`/moves`)
        .then((res)=>res.json())
        .then(data => {
            var tempList = []
            comboMoves.forEach(element => {
                data.forEach(element2 => {
                    if (element.move_id === element2.id)
                    {
                        setChar(element2.character_id)
                        tempList = [...tempList, element2.input.toLowerCase()]
                        
                    }
                })
            })
            setInputList(tempList)
            
        })
    },[comboMoves])

    useEffect(() => {
        setCurrInput(inputList[0])
        
    },[inputList])

    // useEffect(() => {
    //     fetch(`/characters/${charID}`)
    //     .then((res) => res.json())
    //     .then(data => {

    //     })
    // }, [char])

    const renderInputButtons = inputList?.map((input) => {
        return(
            <InputButton
            button={input}
            setCurrInput={setCurrInput}
            />
        )
    })


    return(
        <div className="view-combo">
            <div className="char-animation">
                <InputGif
                currInput={currInput}
                charID={char}
                />
            </div>
            <div className="view-controls">
                {renderInputButtons}
            </div>
        </div>
    )
}

export default ViewCombo;