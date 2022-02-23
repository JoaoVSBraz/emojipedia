import React from "react"
import emojipedia from '../emojipedia'
import Emoji from "./Emoji"

function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>

            <dl className="dictionary">
                {emojipedia.map((emoji) => {
                    return (
                        <Emoji
                            id={emoji.id}
                            key={emoji.id}
                            name={emoji.name}
                            emoji={emoji.emoji}
                            meaning={emoji.meaning} />
                    )
                })}
            </dl>
        </div>
    )
}

export default App