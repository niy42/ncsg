import AosInitializer from '@/app/aos'
import React, { FC } from 'react'

const Footer: FC = () => {
    return (
        <>
            <AosInitializer />
            <section className='mt-10 bg-gray-600 w-full dark:bg-gray-700'>
                <footer>
                    <div className='flex md:flex-row flex-col justify-between items-center'>
                        <div>Test1</div>
                        <div>Test2</div>
                    </div>
                </footer>
            </section>
        </>
    )
}

export default Footer;
