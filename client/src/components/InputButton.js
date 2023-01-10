import LP from '../assets/buttons/lp.png'
import LK from '../assets/buttons/lk.png'
import MP from '../assets/buttons/mp.png'
import MK from '../assets/buttons/mk.png'
import HP from '../assets/buttons/hp.png'
import HK from '../assets/buttons/hk.png'
import EXP from '../assets/buttons/exp.png'
import EXK from '../assets/buttons/exk.png'

import "./InputButton.css"


function InputButton({button, setCurrInput}){


    return(
        <div>
        {button === "lp" && <img onClick={()=>setCurrInput("lp")} className="input-icon" src={LP}/>}
        {button === "lk" && <img onClick={()=>setCurrInput("lk")} className="input-icon" src={LK}/>}
        {button === "mp" && <img onClick={()=>setCurrInput("mp")} className="input-icon" src={MP}/>}
        {button === "mk" && <img onClick={()=>setCurrInput("mk")} className="input-icon" src={MK}/>}
        {button === "hp" && <img onClick={()=>setCurrInput("hp")} className="input-icon" src={HP}/>}
        {button === "hk" && <img onClick={()=>setCurrInput("hk")} className="input-icon" src={HK}/>}
        {button === "exp" && <img onClick={()=>setCurrInput("exp")} className="input-icon" src={EXP}/>}
        {button === "exk" && <img onClick={()=>setCurrInput("exk")} className="input-icon" src={EXK}/>}
        </div>
    )

}

export default InputButton;