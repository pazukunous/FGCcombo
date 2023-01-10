import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';
import { Link } from 'react-router-dom';
import './Home.css';
import akuma from '../assets/characters/akuma.png'
import alex from '../assets/characters/alex.png'
import chunli from '../assets/characters/chunli.png'
import dudley from '../assets/characters/dudley.png'
import elena from '../assets/characters/elena.png'
import gill from '../assets/characters/gill.png'
import hugo from '../assets/characters/hugo.png'
import ibuki from '../assets/characters/ibuki.png'
import ken from '../assets/characters/ken.png'
import makoto from '../assets/characters/makoto.png'
import necro from '../assets/characters/necro.png'
import oro from '../assets/characters/oro.png'
import q from '../assets/characters/q.png'
import remy from '../assets/characters/remy.png'
import ryu from '../assets/characters/ryu.png'
import sean from '../assets/characters/sean.png'
import twelve from '../assets/characters/twelve.png'
import urien from '../assets/characters/urien.png'
import yang from '../assets/characters/yang.png'
import yun from '../assets/characters/yun.png'
import CharacterIcon from './CharacterIcon';
function Home({user}, {setCurrChar}){

    const [allChars, setAllChars] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState();

    // useEffect(()=>{
    //     fetch('/characters')
    //     .then((res) => res.json())
    //     .then(data => {
    //         setAllChars(data)
    //         console.log(data)
    //     })
    // },[])

    return(
        <div className='home'>
            <div className='characters'>
                <div className='row1'>
                    <Icon setCharacterName={setSelectedCharacter} characterName="akuma" charImg={akuma}/>
                    <Icon setCharacterName={setSelectedCharacter} characterName="alex" charImg={alex}/>
                    <Icon setCharacterName={setSelectedCharacter} characterName="chunli" charImg={chunli}/>
                    <Icon setCharacterName={setSelectedCharacter} characterName="dudley" charImg={dudley}/>
                </div>
                <div className='row2'>
                    <Icon setCharacterName={setSelectedCharacter} characterName="elena" charImg={elena}/>
                    <Icon setCharacterName={setSelectedCharacter} characterName="gill" charImg={gill}/>
                    <Icon setCharacterName={setSelectedCharacter} characterName="hugo" charImg={hugo}/>
                    <Icon setCharacterName={setSelectedCharacter} characterName="ibuki" charImg={ibuki}/>
                </div>
                <div className='row3'>
                    <Icon setCharacterName={setSelectedCharacter} characterName="ken" charImg={ken}/>
                    <Icon setCharacterName={setSelectedCharacter} characterName="makoto" charImg={makoto}/>
                    <Icon setCharacterName={setSelectedCharacter} characterName="necro" charImg={necro}/>
                    <Icon setCharacterName={setSelectedCharacter} characterName="oro" charImg={oro}/>
                </div>
                <div className='row4'>
                    <Icon setCharacterName={setSelectedCharacter} characterName="q" charImg={q}/>
                    <Icon setCharacterName={setSelectedCharacter} characterName="remy" charImg={remy}/>
                    <Icon setCharacterName={setSelectedCharacter} characterName="ryu" charImg={ryu}/>
                    <Icon setCharacterName={setSelectedCharacter} characterName="sean" charImg={sean}/>
                </div>
                <div class='row5'>
                    <Icon setCharacterName={setSelectedCharacter} characterName="twelve" charImg={twelve}/>
                    <Icon setCharacterName={setSelectedCharacter} characterName="urien" charImg={urien}/>
                    <Icon setCharacterName={setSelectedCharacter} characterName="yang" charImg={yang}/>
                    <Icon setCharacterName={setSelectedCharacter} characterName="yun" charImg={yun}/>
                    </div>
            </div>
            <div className="character-container">

                <CharacterIcon char={selectedCharacter}/>
            </div>
        </div>
    )
}

export default Home