// app/faq/page.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from "./faq_layout";

const FaqPage = () => {
    return(
<Layout>
      {/*} CSS grid to center content like home tsx page*/}
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-mint-green to-[#FFFFFF]"> {/*Chatbot Background here*/}
        <h1 className="text-4xl font-bold mt-4">Frequently Asked Questions</h1>
        <p className="text-lg mt-4 mb-4 text-gray-800">This is a placeholder page for the FAQ.</p>
        <div className="flex flex-col w-3/4 mb-6 mt-2 bg-white shadow-lg rounded-lg p-6" style={{outline: "2px solid #22c55e"}}>
          <div>
            <div className="flex items-center space-x-2 mb-4">
                <i className="mr-1 fa-solid fa-lg fa-question-circle"></i> {/*} Question Mark Icon*/}
                <h2 className="text-lg font-semibold">What is sustainable housing?</h2>
            </div>
            <div className="flex items-baseline space-x-2">
                <i className="mr-1 fa-solid fa-lg fa-reply"></i> {/*} Reply Icon*/}
                <h2 className="text-lg">Sustainable housing focuses on creating living spaces that are environmentally friendly, energy-efficient, and resource-efficient. It aims to reduce the carbon footprint and impact on natural resources while providing comfortable and healthy living environments. </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/4 bg-white shadow-lg rounded-lg p-6" style={{outline: "2px solid #22c55e"}}>
            <div className="flex items-center space-x-2 mb-4">
                <i className="mr-1 fa-solid fa-lg fa-question-circle"></i> {/*} Question Mark Icon*/}
                <h2 className="text-lg font-semibold">How does sustainable housing benefit the environment?</h2>
            </div>
            <div className="flex items-baseline space-x-2">
                <i className="mr-1 fa-solid fa-lg fa-reply"></i> {/*} Reply Icon*/}
                <h2 className="text-lg">Sustainable housing reduces the carbon footprint by lowering energy consumption and greenhouse gas emissions. It also conserves water, reduces waste, and promotes the use of recycled or renewable materials, all of which contribute to a healthier planet.</h2>
            </div>
        </div>

        {/*} TODO: Want to add buttons which direct to the Chatbot page with a prompt for more details*/}
      </div>
    </Layout>
  
    )
}
// Exports the faq for availability in other parts of the app
export default FaqPage;