'use client';

import { useChat } from '@ai-sdk/react';
import { FiSend } from 'react-icons/fi';
import { RiRobot2Line } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import { BsChatLeftText } from 'react-icons/bs';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        id: 'chat',
    });
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        handleSubmit(e);
        setTimeout(scrollToBottom, 100);
    };

    return (
        <div className="flex flex-col w-full max-w-2xl h-[80vh] mx-auto px-4 py-6 bg-gray-900 rounded-2xl shadow-2xl mt-5 border border-gray-700">
            <div className="flex-1 overflow-y-auto pr-2 space-y-6 mb-6 custom-scrollbar">
                {messages.length > 0
                    ? messages.map((m, index) => (
                        <motion.div
                            key={m.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className={`flex gap-3 items-start ${m.role === 'user' ? 'justify-end' : ''}`}
                        >
                            {m.role !== 'user' && (
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center text-purple-300 shadow-lg"
                                >
                                    <RiRobot2Line size={20} />
                                </motion.div>
                            )}

                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className={`max-w-[80%] p-4 rounded-2xl text-base whitespace-pre-wrap ${m.role === 'user'
                                    ? 'bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-br-none shadow-lg'
                                    : 'bg-gray-800 text-gray-100 shadow-md rounded-bl-none border border-gray-700'}`}
                            >
                                {m.content}
                            </motion.div>

                            {m.role === 'user' && (
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center text-indigo-300 shadow-lg"
                                >
                                    <FaUser size={16} />
                                </motion.div>
                            )}
                        </motion.div>
                    ))
                    : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col justify-center items-center h-full text-gray-500"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.05, 1],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{ repeat: Infinity, duration: 4 }}
                                className="mb-6"
                            >
                                <BsChatLeftText size={56} className="opacity-70 text-purple-500" />
                            </motion.div>
                            <p className="text-xl font-medium text-gray-400">Hi, I was developed by Mahdi Bagheri. How can I help you?</p>
                            <p className="mt-2 text-sm text-gray-600">Ask me anything...</p>
                        </motion.div>
                    )}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleFormSubmit} className="mt-auto">
                <motion.div
                    whileHover={{ scale: 1.005 }}
                    className="relative"
                >
                    <input
                        className="w-full p-5 pr-16 text-base text-gray-100 bg-gray-800 border border-gray-700 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition duration-200 placeholder-gray-500"
                        value={input}
                        placeholder="Type your message..."
                        onChange={handleInputChange}
                        dir="auto"
                    />
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className={`absolute inset-y-0 right-0 flex items-center justify-center w-14 h-full rounded-r-full transition-all ${input ? 'bg-gradient-to-br from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 shadow-lg' : 'bg-gray-700 cursor-not-allowed'}`}
                        disabled={!input}
                    >
                        <FiSend size={22} className="text-white" />
                    </motion.button>
                </motion.div>
            </form>
        </div>
    );
}