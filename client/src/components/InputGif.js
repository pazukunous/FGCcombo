import { useEffect, useState } from "react";

function InputGif({currInput, charID}){
    const [charName, setCharName] = useState("")
    const [charNameLower, setCharNameLower] = useState("")
    const [imgSource, setImgSource] = useState("")

    useEffect(()=>{
        fetch(`/characters/${charID}`)
        .then((res) => res.json())
        .then(data =>{
            setCharName(data[0].charName)
            setCharNameLower(data[0].charName.toLowerCase())
            
        })
    },[])

    useEffect(() => {
        setImgSource(`https://www.justnopoint.com/zweifuss/colorswap.php?pcolorstring=${charName}Palette.bin&pcolornum=0&pname=${charNameLower}/${charNameLower}-${currInput}.gif`)
        
    },[charName, charNameLower, currInput])

    
    // imgSource = `https://www.justnopoint.com/zweifuss/colorswap.php?pcolorstring=${charName}Palette.bin&pcolornum=0&pname=${charNameLower}/${charNameLower}-${currInput}.gif`
    return(
        <div>
            <img src={imgSource}/>
        </div>
    )
}

export default InputGif;