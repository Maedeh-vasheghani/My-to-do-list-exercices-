import React, {useState} from "react";

export default function IncrButtonFonction() {

    const  [ count, setCount] = useState( 0);
    return (
        <button className="btn2 btn-secondary" onClick={()=> setCount(count + 1)}> clique sur moi stp
        </button>
    )

}