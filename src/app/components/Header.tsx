import React from "react"

const Header = () => {
    return(
        <header>
            <nav className="p-4 flex flex-row bg-three justify-center">
                <nav className="flex justify-around w-[70%]">
                    <a href="">Início</a>
                    <a href="">Promoções</a>
                    <a href="">Pedidos</a>
                    <a href="">Perfil</a>
                </nav>
            </nav>
        </header>
    )
}

export default Header