import React from 'react'

function CustomCard() {
    return (
        <section className='h-[550px]'>
            <div className='container mx-auto h-full w-full bg-carvana-blue flex items-center justify-around'>
                <div className='flex flex-col items-start justify-center gap-[20px]'>
                    <h1 className='text-white text-4xl font-bold'>Custom financing =<br /> Confident shopping</h1>
                    <p className='text-white'>Get pre-approved in minutes so you can shop for your<br /> next car with peace of mind.</p>
                    <button className='text-blue-500 hover:text-blue-700 bg-white rounded uppercase px-10 py-4 font-bold text-sm'>Get your terms</button>
                    <p className='text-white text-sm'>Don't worry! This won't affect your credit score.</p>
                </div>
                <img className='w-[550px]' src='https://assets.fastly.carvana.io/customer-acquisition/finance-landing-page/asset-card-camry-desktop.jpg' alt='Car monthly and down payment' />
            </div>
        </section>
    )
}

export default CustomCard