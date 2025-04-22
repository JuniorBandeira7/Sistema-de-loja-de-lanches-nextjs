import React from 'react'

interface CardProps {
    photoUrl: string
    productName: string
    price: string
    description: string
}

const Card: React.FC<CardProps> = ({photoUrl, productName, price, description}) => {
    return (
        <a href="#" className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100">
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{productName}</h5>
                <p className="mb-3 font-normal text-gray-500">{description}</p>
                <h6 className='text-black'>R$ {price}</h6>
            </div>
            <img className="object-cover w-full rounded-lg md:h-auto md:w-48 mr-2 mb-6 w-28 h-28 lg:w-40 lg:h-32 sm:w-30 sm:h-30 block" src={photoUrl} alt="oi" />
        </a>
    )
}

export default Card