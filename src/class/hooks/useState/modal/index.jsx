import { useState } from "react"

import './style.css'

export default function Modal() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)}>abrir modal</button>

            {isOpen && (

                <div className="modal-container">
                    <div className="overlay">
                        <div className="modal">
                            <div className="exit-button-container">
                                <button onClick={() => setIsOpen(false)} className="exit-button">Exit</button>
                            </div>
                            <div>
                                <h1>teste</h1>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut sapien eu turpis scelerisque blandit.
                                    Proin mauris libero, aliquam vel sollicitudin aliquam, condimentum quis sem. Aliquam in condimentum leo
                                    , a tincidunt est. Duis eleifend tincidunt fermentum. Maecenas pellentesque elit vitae tellus dignissim maximus.
                                    Aliquam fringilla aliquam leo eu facilisis. Integer ut augue ullamcorper, commodo tortor eget, feugiat mi.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </>
    )
}