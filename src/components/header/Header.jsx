import React from 'react'
import './Header.css'

export default function Header() {

    return (
        <>
            <header>
                <div className="menu">
                    <ul>
                        <a href="#" className="opcao"><li>HOME</li></a>
                        <a href="#" className="opcao"><li>ANSIEDADE</li></a>
                        <a href="#" className="opcao"><li>HOBBIES</li></a>
                        <a href="#" className="cadastro"><li>LOGIN</li></a>
                        <a href="#" className="cadastro"><li>CADASTRO</li></a>
                    </ul>
                </div>
            </header>
        </>
    )
}