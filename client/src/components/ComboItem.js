import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./ComboItem.css"

import LP from '../assets/buttons/lp.png'
import LK from '../assets/buttons/lk.png'
import MP from '../assets/buttons/mp.png'
import MK from '../assets/buttons/mk.png'
import HP from '../assets/buttons/hp.png'
import HK from '../assets/buttons/hk.png'
import EXP from '../assets/buttons/exp.png'
import EXK from '../assets/buttons/exk.png'

function ComboItem({charID, hits, desc, comboID, charName}){
    // console.log(charID)
    // console.log(hits)
    // console.log(desc)
    // console.log(comboID)
    // console.log(charName)

    const [allMoves, setAllMoves] = useState([])
    const inputArray = []
    const [comboMoves, setComboMoves] = useState([])


    useEffect(() => {
        fetch(`/moves`)
        .then((res) => res.json())
        .then(data => {
            setAllMoves(data)
            // console.log(data)
        })
    },[])

    useEffect(() => {
        fetch(`/combo_moves?combo_id=${comboID}`)
        .then((res) => res.json())
        .then(data => {
            setComboMoves(data)
            // console.log(data)
        })
    },[])

    const showMoves = comboMoves.map((oneMove) => { 
        allMoves.map(oneMoveFromAll => {
            if (oneMove.move_id === oneMoveFromAll.id)
            {
                inputArray.push(oneMoveFromAll.input)
            }
        })



    })
    
    return(
        <Link style={{textDecoration: 'none'}} to={`/combo/${comboID}`}>
        <div className="oneCombo">
            <p>{desc} </p>
            <p>Hits: {hits} </p>
            {showMoves}
            <p>{inputArray.join(" ")}</p>
        </div>
        </Link>
    )
}

export default ComboItem;