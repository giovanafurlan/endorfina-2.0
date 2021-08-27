import React from 'react'
import './Header.css'

export default function Header() {

    return (
        <>
            <header>
                <div className="menu">
                    <hr></hr>
                    <ul>
                        <a href="#"><li>Home</li></a>
                        <a href="#"><li>Ansiedade</li></a>
                        <a href="#"><li>Hobbies</li></a>
                        <a href="#" className="cadastro"><li>Login</li></a>
                        <a href="#" className="cadastro"><li>Cadastro</li></a>
                    </ul>
                    <hr></hr>
                </div>
            </header>
        </>
    )
}