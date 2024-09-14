import { useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import './style.css'


export default function Accordion() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <p>Eu sou um Accordion</p>
            <div className="accordion-container">
                <div className="accordion-title">
                    <p>Novidades</p>
                    <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
                </div>

                {isOpen && (
                    <div className={`accordion-content ${isOpen ? 'open' : 'closed'}`}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut sapien eu turpis scelerisque blandit.
                            Proin mauris libero, aliquam vel sollicitudin aliquam, condimentum quis sem. Aliquam in condimentum leo
                            , a tincidunt est. Duis eleifend tincidunt fermentum. Maecenas pellentesque elit vitae tellus dignissim maximus.
                            Aliquam fringilla aliquam leo eu facilisis. Integer ut augue ullamcorper, commodo tortor eget, feugiat mi.

                        </p>
                    </div>
                )}
            </div>
        </>
    )
}