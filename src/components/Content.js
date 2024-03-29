import React from 'react'
import Steps from './Steps'

const Content = () => {
    return (
        <>
            <div className='space-y-3 text-xl'>
                {/* Intro */}
                <div className=' p-2 '>
                    <p>
                    TailwindCSS is a CSS framework that makes styling webpages damn easy. Just add the 
                    necessary classes and see the change.
                    </p>
                    <p>
                        The best thing I've observed while working with CSS is, we get to see immediate changes. 
                    </p>
                    {/* <div className=' mx-auto'>
                        <img src={tailwindcss} alt='' className='h-fit w-fit'/>
                    </div> */}
                </div>

                <div>
                    {/* Installation */}
                    <h1 className=' text-3xl font-bold tracking-wide bg-gradient-to-r from-blue-300 p-2 rounded-lg'>Setup</h1>
                    <p className='text-lg pt-4'>There won't be any changes in these steps to setup tailwindcss for the most part, but based on the framework you want to use tailwind for, there will be very slight changes. <a href='https://tailwindcss.com/docs/installation/framework-guides' rel="noreferrer" target="_blank" className=' hover:underline text-blue-500 transition'>Click here to know the ways of adding tailwind to different frameworks</a></p>
                    <p className='text-lg'>I am telling the setup of tailwind, for websites made using create-react-app here </p>
                    <Steps className="pt-2" />
                </div>
            </div>
        </>
    )
}

export default Content
