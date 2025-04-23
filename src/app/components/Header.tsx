import React from "react"

const Header = () => {
    return(
        <header className="fixed w-full opacity-75 z-40">
            <nav className="p-6 flex flex-row bg-three justify-center">
                <div className="flex justify-around w-[70%]">
                    <a href="">Início</a>
                    <a href="">Promoções</a>
                    <a href="">Pedidos</a>
                    <a href="">Perfil</a>
                </div>
            </nav>
        </header>
    )
}

export default Header