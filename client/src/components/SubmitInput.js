import React from "react";


function SubmitInput({setInputArray, moveData, inputArray, index}){
    // const [value, setValue] = useState("")
    // var select = document.getElementById('input-value')

    // for(let i = 0; i < moveData.length; i++){
    //     var opt = moveData[i].input
    //     console.log(opt)
    //     var el = document.createElement("option")
    //     el.textContent = opt
    //     el.value = opt
    //     console.log(select)
    //     select.appendChild(el);
    // }

    const renderOptions = moveData.map((data) => {

        return (
            <option value={data.id}>{`${data.moveName} (${data.input})`}</option>
        )
    })
        
    

    function handleChange(e){
        const tempValue = e.target.value
        let newArr = inputArray
        newArr[index] = tempValue
        setInputArray(newArr)
        console.log(newArr)
    }

    return(
        <div>
            <select onChange={handleChange} id="input-value">
                <option>Choose an Input</option>
                {renderOptions}
                {/* <option onChange={()=>setInputArray([...inputArray, "MK"])} value="MK">Forward MK</option>
                <option onChange={()=>setInputArray([...inputArray, "LK"])} value="LK">Short LK</option>
                <option onChange={()=>setInputArray([...inputArray, "HK"])} value="HK">Roundhouse HK</option>
                <option onChange={()=>setInputArray([...inputArray, "LP"])} value="LP">Jab LP</option>
                <option onChange={()=>setInputArray([...inputArray, "MP"])} value="MP">Strong MP</option>
                <option onChange={()=>setInputArray([...inputArray, "HP"])} value="HP">Fierce HP</option> */}

            </select>
        </div>
    )

}

export default SubmitInput;