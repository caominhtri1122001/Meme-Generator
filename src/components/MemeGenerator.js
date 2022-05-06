import React from "react";

function MemeGenerator() {
    return (
        <div className="meme-container">
            <form>
                <input type="text"
                    placeholder="Input top text..."
                />
                <input type="text"
                    placeholder="Input bottom text..."
                />
                <button>Generate</button>
            </form>
            <div className="meme">
                <img alt="" src="https://i.imgflip.com/26am.jpg" />
                <h2 className="top"></h2>
                <h2 className="bottom"></h2>
            </div>
        </div>
    )
}

export default MemeGenerator