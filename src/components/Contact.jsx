import React from "react";
import Navbar from "./Navbar";

export default function Contact(){

    return(
        <div className="w-full h-full bg-black text-white">
            <Navbar/>
            <div class="sm:w-96 w-80 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                <div class="p-6 border border-gray-800 rounded-md bg-gradient-to-br from-[#31292E] to-[#013156]">
                    <form>
                        <label class="block mb-6 mt-4">
                            <span class="text-gray-300">Name</span>
                            <input
                            name="name"
                            type="text"
                            class="
                                block
                                w-full
                                mt-1
                                pl-2
                                border-gray-600
                                rounded-md
                                shadow-sm
                                focus:border-indigo-300
                                focus:ring
                                focus:ring-indigo-200
                                focus:ring-opacity-50
                                bg-transparent
                                placeholder-gray-600
                                text-gray-300
                            "
                            placeholder="Jaime Garcia"
                            />
                        </label>
                        <label class="block mb-6">
                            <span class="text-gray-300">Email</span>
                            <input
                            name="email"
                            type="email"
                            class="
                                block
                                w-full
                                mt-1
                                pl-2
                                border-gray-600
                                rounded-md
                                shadow-sm
                                focus:border-indigo-300
                                focus:ring
                                focus:ring-indigo-200
                                focus:ring-opacity-50
                                bg-transparent
                                placeholder-gray-600
                                text-gray-300
                            "
                            placeholder="user@example.com"
                            required
                            />
                        </label>
                        <label class="block mb-6">
                            <span class="text-gray-300">Message</span>
                            <textarea
                            name="Message"
                            class="
                                block
                                w-full
                                mt-1
                                border-gray-600
                                rounded-md
                                shadow-sm
                                focus:border-indigo-300
                                focus:ring
                                focus:ring-indigo-200
                                focus:ring-opacity-50
                                bg-transparent
                                placeholder-gray-600
                                text-gray-300 
                                resize-none
                            "
                            rows="3"
                            placeholder="Tell me what you're thinking about..."
                            ></textarea>
                        </label>
                        <div class="mb-6">
                            <button
                            type="submit"
                            class="
                                h-10
                                px-5
                                text-black
                                bg-[#ecbb1b]
                                rounded-lg
                                transition-colors
                                duration-150
                                focus:shadow-outline
                                hover:bg-[#ecbb1bb6]
                            "
                            >
                            Send Message
                            </button>
                        </div>
                        <div>
                            <div class="mt-2 text-gray-300 text-right text-xs">
                            
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

