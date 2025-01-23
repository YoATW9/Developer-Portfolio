"use client";
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

function Body() {
    const [text, count] = useTypewriter({
        words: ["Hi, My name is yoyo", "A coding learner", "I am learning skills"],
        loop: true,
        delaySpeed: 2000,
    });
    return <section className="py-8">
        <div className="px-4 mx-auto">
            {/**First Part */}
            <div className="flex flex-col-reverse justify-between md:flex-row md:space-x-8">
                <div className="w-full flex flex-col items-start md:w-2/4 mt-0 md:mt-20">
                    <h1 className="text-3xl lg:text-5xl font-semibold">
                        <span className="mr-3 text-slate-400">{text}</span>
                        <Cursor />
                    </h1>
                    <p className="text-white text-xl md:text-2xl mb-3 mt-2">
                        I am a programmer focus on web frontend and application.
                    </p>
                    <div>
                        <button className="bg-blue-400 text-white px-4 py-1 rounded mr-4 hover:bg-blue-600">
                            Know More
                        </button>

                        <button className="bg-gray-300 text-gray-700 px-4 py-1 hover:bg-gray-400">
                            Contact Me
                        </button>
                    </div>
                    <p className="text-blue-500 text-small font-normal mt-2">Coding | Learnings | Lifestyle</p>
                    <h1 className="text-slate-400 text-xl">2 Years of experience</h1>
                </div>
            </div>
        </div>
    </section>


}
export default Body;