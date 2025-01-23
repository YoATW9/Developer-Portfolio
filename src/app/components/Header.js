import React from 'react'

function Header() {
    return (
        <header className="py-4">
            <div className="mx-10 sm:mx-auto max-w-6xl px-4 flex items-center justify-between border border-zinc-600 p-3 rounded-full">
                {/* Left part */}
                <div>
                    <span className="text-xl text-white cursor-pointer font-bold ml-2">
                        Wong <span className="text-slate-400 font-bold">Yat</span>
                    </span>
                </div>


                {/* Middle part */}
                <div className="hidden sm:flex flex-row space-x-4">
                    <p className="text-white cursor-pointer">About</p>
                    <p className="text-white cursor-pointer">Skills</p>
                    <p className="text-white cursor-pointer">Contact</p>
                </div>



                {/* Right part */}
                <div className="flex space-x-3 items-center">
                    <button className="hidden md:inline-block text-white bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600">Linkedin</button>

                    <button className="border cursor-pointer border-gray-500 px-4 py-2 text-white rounded-full">GitHub</button>
                </div>
            </div>
        </header>
    );
}

export default Header;