import React from "react";
import { useParams } from "react-router-dom";
import './Combos.css'
import { useEffect, useState } from "react";
import ComboItem from "./ComboItem";
import { Link } from "react-router-dom";

function Combos(){
    const [allCombos, setAllCombos] = useState([]);
    const {id} = useParams();
    const [charID, setCharID] = useState(null)

    

    useEffect(()=>{
        fetch(`/combos?char_name=${id.charAt(0).toUpperCase() + id.slice(1)}`)
        .then((res) => res.json())
        .then(data => {
            setAllCombos(data)
            // console.log(data)
        })
    },[])

    useEffect(()=>{
        var charName = id.charAt(0).toUpperCase() + id.slice(1)
        fetch(`/characters?charName=${charName}`)
        .then((res) => res.json())
        .then(data => {
            console.log(data[0].id)
            setCharID(data[0].id)
        })
    })

    const renderCombos = allCombos?.map((oneCombo) => {
        return(
            <ComboItem
            charID = {oneCombo.character_id}
            hits = {oneCombo.hits}
            desc = {oneCombo.description}
            comboID = {oneCombo.id}
            charName = {id.charAt(0).toUpperCase() + id.slice(1)}
            />
        )
    })

    return(
        <div className="combos-content">
            <div className="combo-name-button">
            <h3 className="combo-text-above">{id.charAt(0).toUpperCase() + id.slice(1)} Combos</h3>
            <Link to={`submit/${charID}`}><button type="button">Submit a Combo</button></Link>
            </div>
            <div className="combos-box">
                {renderCombos}
            </div>
        </div>
    )
}

export default Combos;