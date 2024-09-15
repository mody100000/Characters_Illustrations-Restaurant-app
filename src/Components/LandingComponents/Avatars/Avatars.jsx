import React from 'react'
import avatar1 from "@assets/crusty boy.jpg"
import avatar2 from "@assets/manchy.jpg"
import avatar3 from "@assets/snappy girl.jpg"
import avatar4 from "@assets/sweety note.jpg"
import avatar5 from "@assets/cristy love.jpg"
import avatar6 from "@assets/cravy nuts.jpg"
function Avatars() {
    return (
        <div className='flex flex-col py-10 space-y-10'>
            <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2 h-[60rem] '>
                    <img src={avatar1} alt="Crusty Boy" className='w-full h-full object-fill' />
                </div>
                <div className='flex flex-col items-center p-5 md:p-10 w-full md:w-1/2'>
                    <h1 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent'>
                        Crusty Boy
                    </h1>
                    <p className='text-xl md:text-2xl my-3 md:my-5'>
                        Age: 20 years
                    </p>
                    <p className='text-lg md:text-xl text-center'>
                        liked food: macaroni and fired chicken
                    </p>
                    <p className='text-lg md:text-xl text-center my-3 md:my-5 bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent'>
                        Favorite color: almost all heated colors
                    </p>
                    <div className='border-[2px] w-full border-t-yellow-400 block'></div>
                    <p className='mt-5 md:mt-10 mb-3 md:mb-5 text-lg md:text-xl font-bold'>Personal characteristics</p>
                    <p className='text-center text-base md:text-xl leading-7 md:leading-9'>
                        Munch Boy is an athletic young man full of energy
                        and a zest for life. Always on the move, whether it’s hitting the gym, playing
                        sports, or just staying active, he thrives on the thrill of movement and the
                        sense of accomplishment it brings. To fuel his high-energy lifestyle, Munch has
                        a deep love for hearty meals, especially pasta and fried chicken—comfort foods
                        that keep him going strong.
                        Munch’s approach to life is as fast-paced as his physical activities. He makes
                        decisions quickly and with precision, rarely second-guessing himself. His
                        confidence and efficiency are key to how he navigates his daily routines, always
                        finding the perfect balance between his love for fitness and his indulgence in
                        good food. With his upbeat attitude and quick thinking, Munch is the kind of guy
                        who’s always ready to take on whatever challenges come his way.
                    </p>
                </div>
            </div>
            {/* avatar2 */}
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='flex flex-col items-center p-5 md:p-10 w-full md:w-1/2'>
                    <h1 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-red-500 to-red-500 bg-clip-text text-transparent'>
                        Munch boy
                    </h1>
                    <p className='text-xl md:text-2xl my-3 md:my-5'>
                        Age: 20 years
                    </p>
                    <p className='text-lg md:text-xl'>
                        liked food: sandwiches
                    </p>
                    <p className='text-lg md:text-xl text-center my-3 md:my-5 bg-gradient-to-r from-blue-500  to-red-700 bg-clip-text text-transparent'>
                        Favorite color: blue and red colors
                    </p>
                    <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 via-red-500 to-yellow-400" />
                    <p className='mt-5 md:mt-10 mb-3 md:mb-5 text-lg md:text-xl font-bold'>Personal characteristics</p>
                    <p className='text-center text-base md:text-xl leading-7 md:leading-9'>
                        Munch is a brilliant and studious individual with a
                        deep passion for science and knowledge. His intelligence and dedication to his
                        studies have shaped him into a thoughtful and introspective person, often
                        preferring the quiet of his own company to the hustle and bustle of social life.
                        Alex's introverted nature makes him a bit shy, but those who take the time to
                        know him find a mind full of fascinating ideas and a heart of gold.
                        He finds joy in the intricacies of building with Meccano and diving into
                        electronic games, both of which allow him to explore his love for problem-
                        solving and creativity. When it comes to meals, Munch prefers sandwiches—
                        they're quick, easy, and don't distract him from his studies or hobbies.
                        However, he cherishes the time spent with his friends during meals, seeing it as
                        a valuable opportunity to connect with others and step out of his shell.
                        Balancing his intellectual pursuits with these small moments of social
                        interaction, Munch is a character who embodies both brilliance and quiet charm.
                    </p>
                </div>
                <div className='w-full md:w-1/2 h-[60rem]'>
                    <img src={avatar2} alt="Munch boy" className='w-full h-full object-fill' />
                </div>
            </div>
            {/* avatar3 */}
            <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2 h-[60rem] '>
                    <img src={avatar3} alt="Snappy Girl" className='w-full h-full object-fill' />
                </div>
                <div className='flex flex-col items-center p-5 md:p-10 w-full md:w-1/2'>
                    <h1 className='text-3xl md:text-4xl font-bold text-purple-500'>
                        Snappy Girl
                    </h1>
                    <p className='text-xl md:text-2xl my-3 md:my-5'>
                        Age: 20 years
                    </p>
                    <p className='text-lg md:text-xl text-center'>
                        liked food: burger and fired chicken
                    </p>
                    <p className='text-lg md:text-xl my-3 md:my-5 text-purple-500'>
                        Favorite color: purple
                    </p>
                    <div className='border-[2px] w-full border-t-purple-400 block'></div>
                    <p className='mt-5 md:mt-10 mb-3 md:mb-5 text-lg md:text-xl font-bold'>Personal characteristics</p>
                    <p className='text-center text-base md:text-xl leading-7 md:leading-9'>
                        Snappy girl is a teenage girl who lives for the
                        spotlight, always ready to capture the perfect shot for her social media feed.
                        With a deep love for photography, she’s constantly curating her online
                        presence, sharing her life and style with the world. Snappy is obsessed with
                        looking her best and is always up-to-date on the latest fashion trends,
                        effortlessly blending style and substance in her daily outfits.
                        However, despite her polished exterior and love for the limelight, Snappy has a
                        weakness for burgers and fried chicken—guilty pleasures that she just can’t
                        resist. This indulgence sometimes clashes with her desire to maintain a flawless
                        image, but it’s all part of her charm. Confident and outgoing, Snappy embraces
                        both her love for fashion and her foodie cravings, making her a relatable and
                        endearing character who knows how to balance the best of both worlds.
                    </p>
                </div>
            </div>
            {/* avatar4 */}
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='flex flex-col items-center p-5 md:p-10 w-full md:w-1/2'>
                    <h1 className='text-3xl md:text-4xl font-bold text-pink-500'>
                        Sweety Note
                    </h1>
                    <p className='text-xl md:text-2xl my-3 md:my-5'>
                        Age: 16 years
                    </p>
                    <p className='text-lg md:text-xl'>
                        liked food: love snacks and sweets
                    </p>
                    <p className='text-lg md:text-xl my-3 md:my-5 text-pink-500'>
                        Favorite color: pink
                    </p>
                    <div className='border-[2px] w-full border-t-pink-400 block'></div>
                    <p className='mt-5 md:mt-10 mb-3 md:mb-5 text-lg md:text-xl font-bold'>Personal characteristics</p>
                    <p className='text-center text-base md:text-xl leading-7 md:leading-9'>
                        Sweety Note is a romantic and dreamy girl, with a
                        heart full of wonder and a love for all things sweet and whimsical. She has a
                        deep fondness for candy, roses, and ice cream—little indulgences that bring her
                        immense joy and feed her imaginative spirit. Sweety carries a sense of
                        childhood within her, which manifests in her playful outlook on life and her
                        ability to find magic in the mundane.
                        However, her mood can be as changeable as the weather, shifting from bursts
                        of joy to quiet introspection. Despite her emotional swings, Sweety is a deeply
                        caring person who cherishes her friendships. She loves being surrounded by her
                        friends, finding comfort and happiness in their company. Her dreamy nature,
                        coupled with her love for the simple pleasures in life, makes her a gentle,
                        endearing presence in any group.
                    </p>
                </div>
                <div className='w-full md:w-1/2 h-[60rem]'>
                    <img src={avatar4} alt="Munch boy" className='w-full h-full object-fill' />
                </div>
            </div>
            {/* avatar5 */}
            <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2 h-[60rem] '>
                    <img src={avatar5} alt="Cristy Love" className='w-full h-full object-fill' />
                </div>
                <div className='flex flex-col items-center p-5 md:p-10 w-full md:w-1/2'>
                    <h1 className='text-3xl md:text-4xl font-bold text-yellow-500'>
                        cristy love
                    </h1>
                    <p className='text-xl md:text-2xl my-3 md:my-5'>
                        Age: 18 years
                    </p>
                    <p className='text-lg md:text-xl text-center'>
                        liked food: everything with cheese especially pizza
                    </p>
                    <p className='text-lg md:text-xl my-3 md:my-5 text-yellow-500'>
                        Favorite color: yellow
                    </p>
                    <div className='border-[2px] w-full border-t-yellow-400 block'></div>
                    <p className='mt-5 md:mt-10 mb-3 md:mb-5 text-lg md:text-xl font-bold'>Personal characteristics</p>
                    <p className='text-center text-base md:text-xl leading-7 md:leading-9'>
                        Crusty is a spirited and cheerful young woman who
                        radiates positivity wherever she goes. Her unwavering belief in luck drives her
                        decisions, often leading her down unpredictable and exciting paths. Crusty has a
                        deep passion for travel and adventure, always eager to explore new places and
                        experience life to the fullest. She especially loves early morning bike rides when
                        the streets are empty, finding a unique sense of freedom in the quiet, open
                        spaces.
                        Impulsive by nature, Crusty tends to make quick decisions, often trusting her
                        gut and the whims of fortune. This spontaneity, combined with her love of
                        experimentation, makes her life a series of delightful surprises and occasional
                        mishaps, all of which she embraces with a smile. Her zest for life and her
                        unshakable belief that everything happens for a reason make her a truly
                        captivating character.
                    </p>
                </div>
            </div>
            {/* avatar6 */}
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='flex flex-col items-center p-5 md:p-10 w-full md:w-1/2'>
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-yellow-900 text-transparent bg-clip-text">
                        Cravy Nuts
                    </h1>
                    <p className='text-xl md:text-2xl my-3 md:my-5'>
                        Age: 19 years
                    </p>
                    <p className='text-lg md:text-xl'>
                        liked food: chocolate and nuts
                    </p>
                    <p className='text-lg md:text-xl my-3 md:my-5 bg-gradient-to-r from-red-600 to-yellow-900 text-transparent bg-clip-text'>
                        Favorite color: red and brown
                    </p>
                    <div className="h-0.5 w-full bg-gradient-to-r from-red-600 via-red-700 to-yellow-900" />
                    <p className='mt-5 md:mt-10 mb-3 md:mb-5 text-lg md:text-xl font-bold'>Personal characteristics</p>
                    <p className='text-center text-base md:text-xl leading-7 md:leading-9'>
                        Crave Nuts is a vibrant teenage girl with a
                        personality that’s as bold as her love for chocolate and nuts. On the outside,
                        she may seem wild and full of energy, always making her presence known with
                        her loud and lively demeanor. Yet, beneath this spirited exterior lies a shy and
                        gentle soul, easily pleased by the simplest gestures—a piece of chocolate can
                        turn her entire day around.
                        Crave has a passion for shopping and fashion, always on the lookout for the
                        latest trends and must-have items. Perfumes are another of her great loves,
                        and she enjoys discovering new scents that reflect her varied moods. Although
                        she’s typically noisy and full of life, there are moments when she craves calm
                        and quiet, allowing her softer side to shine through. Her blend of boldness and
                        simplicity makes her a uniquely charming character.
                    </p>
                </div>
                <div className='w-full md:w-1/2 h-[60rem]'>
                    <img src={avatar6} alt="Cravy Nuts" className='w-full h-full object-fill' />
                </div>
            </div>
        </div>
    )
}

export default Avatars