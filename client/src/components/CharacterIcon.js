import akumaIcon from '../assets/charactericon/akuma.png'
import alexIcon from '../assets/charactericon/alex.png'
import chunliIcon from '../assets/charactericon/chunli.png'
import dudleyIcon from '../assets/charactericon/dudley.png'
import elenaIcon from '../assets/charactericon/elena.png'
import gillIcon from '../assets/charactericon/gill.png'
import hugoIcon from '../assets/charactericon/hugo.png'
import ibukiIcon from '../assets/charactericon/ibuki.png'
import kenIcon from '../assets/charactericon/ken.png'
import makotoIcon from '../assets/charactericon/makoto.png'
import necroIcon from '../assets/charactericon/necro.png'
import oroIcon from '../assets/charactericon/oro.png'
import qIcon from '../assets/charactericon/q.png'
import remyIcon from '../assets/charactericon/remy.png'
import ryuIcon from '../assets/charactericon/ryu.png'
import seanIcon from '../assets/charactericon/sean.png'
import twelveIcon from '../assets/charactericon/twelve.png'
import urienIcon from '../assets/charactericon/urien.png'
import yangIcon from '../assets/charactericon/yang.png'
import yunIcon from '../assets/charactericon/yun.png'
import React from 'react'
import { useState } from 'react'

function CharacterIcon({char}){
    return(
        <div>
        {!char && <p className='character-text'> Choose Your Character</p>}
        {char === "akuma" && <img className="character-icon" src={akumaIcon}/>}
        {char === "alex" && <img className="character-icon" src={alexIcon}/>}
        {char === "chunli" && <img className="character-icon" src={chunliIcon}/>}
        {char === "dudley" && <img className="character-icon" src={dudleyIcon}/>}
        {char === "elena" && <img className="character-icon" src={elenaIcon}/>}
        {char === "gill" && <img className="character-icon" src={gillIcon}/>}
        {char === "hugo" && <img className="character-icon" src={hugoIcon}/>}
        {char === "ibuki" && <img className="character-icon" src={ibukiIcon}/>}
        {char === "ken" && <img className="character-icon" src={kenIcon}/>}
        {char === "makoto" && <img className="character-icon" src={makotoIcon}/>}
        {char === "necro" && <img className="character-icon" src={necroIcon}/>}
        {char === "oro" && <img className="character-icon" src={oroIcon}/>}
        {char === "q" && <img className="character-icon" src={qIcon}/>}
        {char === "remy" && <img className="character-icon" src={remyIcon}/>}
        {char === "ryu" && <img className="character-icon" src={ryuIcon}/>}
        {char === "sean" && <img className="character-icon" src={seanIcon}/>}
        {char === "twelve" && <img className="character-icon" src={twelveIcon}/>}
        {char === "urien" && <img className="character-icon" src={urienIcon}/>}
        {char === "yang" && <img className="character-icon" src={yangIcon}/>}
        {char === "yun" && <img className="character-icon" src={yunIcon}/>}
        </div>
    )
}

export default CharacterIcon