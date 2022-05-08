import axios from "axios";
import React, {Component} from "react";

class MemeGenerator extends Component {
    state = {
        topText: "",
        botText: "",
        randomImage: "https://i.imgflip.com/26am.jpg",
        allMemeImgs: []
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => this.setState({ allMemeImgs: response.data.memes }));
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
        const randMemeImgUrl = this.state.allMemeImgs[randNum].url;
        this.setState({randomImage: randMemeImgUrl})
    }

    render() {
        return (
            <div className="meme-container">
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        placeholder="Input top text..."
                        value={this.state.value}
                        onChange={this.handleChange}
                        name="topText"
                    />
                    <input type="text"
                        placeholder="Input bottom text..."
                        value={this.state.value}
                        onChange={this.handleChange}
                        name="botText"
                    />
                    <button>Generate</button>
                </form>
                <div className="meme">
                    <img alt="" src={this.state.randomImage} />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.botText}</h2>
                </div>
            </div>
        )
    }
   
}

export default MemeGenerator