import React, {useEffect,useState} from "react";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";
import axios from "axios";

function MemeApp() {
    const [state, setState] = useState({
        memes:[]
    });
    useEffect(() => {
        axios.get("https://api.imgflip.com/get_memes")
            // .then(response => setState({ memes: response.data}))
            .then(response => console.log(response.data))
    })
    return (
        <div className="container">
            <Header/>
            <MemeGenerator />
        </div>
    )
}

export default MemeApp