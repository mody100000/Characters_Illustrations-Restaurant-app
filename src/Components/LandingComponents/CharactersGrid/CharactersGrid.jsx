import React from 'react'
import character1 from "@assets/01.png"
import character2 from "@assets/02.png"
import character3 from "@assets/03.png"
import character5 from "@assets/05.png"
import character6 from "@assets/06.png"

const Card = ({ img, title }) => {
    return (
        <div className="relative group overflow-hidden bg-[#9a9a9a] shadow-lg rounded-2xl cursor-pointer">
            <img src={img} alt={title} className='w-full h-[20rem] object-contain transition-transform duration-300 group-hover:scale-110' />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-white text-4xl font-bold">{title}</h2>
            </div>
        </div>
    );
};

function CharactersGrid() {
    const cards = [
        { id: 1, img: character1, title: "Crusty Boy" },
        { id: 2, img: character2, title: "Manchy" },
        { id: 3, img: character3, title: "Snappy Girl" },
        { id: 4, img: character5, title: "Sweet note" },
        { id: 5, img: character6, title: "Crusty Love" },
        { id: 6, img: character1, title: "Crusty Boy" },
    ]

    return (
        <div>
            <h1 className='text-center text-3xl mt-20 font-bold'>Know About All Avatars</h1>
            <div className='flex items-center justify-center'>
                <div className="grid grid-cols-1 p-10 w-full sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 sm:px-28 py-20">
                    {cards.map((card) => (
                        <Card key={card.id} img={card.img} title={card.title} />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default CharactersGrid