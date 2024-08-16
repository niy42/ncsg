import Image from 'next/image';
import { FC } from 'react';

const Brand: FC = function () {
    return (
        <div className="centered-container mb-5">
            <section className='brand'>
                <div>
                    <Image src='/assets/google.png' alt='google' width={120} height={120} className='cursor-pointer' />
                </div>
                <div>
                    <Image src='/assets/atlassian.png' alt='atlassian' width={120} height={120} className=' cursor-pointer' />
                </div>
                <div>
                    <Image src='/assets/slack.png' alt='slack' width={120} height={120} className=' cursor-pointer' />
                </div>
                <div>
                    <Image src='/assets/dropbox.png' alt='dropbox' width={120} height={120} className=' cursor-pointer' />
                </div>
                <div>
                    <Image src='/assets/shopify.png' alt='shopify' width={120} height={120} className=' cursor-pointer' />
                </div>

                {/* Duplicate set of images for seamless looping */}
                <div>
                    <Image src='/assets/google.png' alt='google' width={120} height={120} className='cursor-pointer' />
                </div>
                <div>
                    <Image src='/assets/atlassian.png' alt='atlassian' width={120} height={120} className=' cursor-pointer' />
                </div>
                <div>
                    <Image src='/assets/slack.png' alt='slack' width={120} height={120} className=' cursor-pointer' />
                </div>
                <div>
                    <Image src='/assets/dropbox.png' alt='dropbox' width={120} height={120} className=' cursor-pointer' />
                </div>
                <div>
                    <Image src='/assets/shopify.png' alt='shopify' width={120} height={120} className=' cursor-pointer' />
                </div>
            </section>
        </div>
    );
};

export default Brand;