import React from 'react'
import Button from './Button'

const PhotoSection = () => {
    return (
        <section className="h-[600px] relative flex items-center justify-center">
            <img src="/s1.jfif" alt="" className="object-cover w-full h-full brightness-50 absolute" />
            <div className="flex flex-col w-[30%] relative flex items-center content-center">
                <h1 className="text-7xl text-white">Sabor artesanal</h1>
                <p className="mt-4 text-2xl text-center text-white">Os melhores hambúrgueres artesanais da cidade, feitos com ingredientes selecionados.</p>
                <Button className="mt-4">Ver Cardapio</Button>
            </div>
        </section>
    )
}

export default PhotoSection