import React from "react";
import { Link } from "react-router-dom";

function Icon({setCharacterName, characterName, charImg}){
    return(
        <Link to={`/combos/${characterName}`}><img className="portrait" onMouseEnter={() => setCharacterName(characterName)} onMouseLeave={() => setCharacterName("")} src={charImg}/></Link>
    )
}

export default Icon;