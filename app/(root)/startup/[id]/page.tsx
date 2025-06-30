import React from 'react'

const Page = async ({ params }: { params: Promise<{ id?: string }> }) => {

    const id = (await params).id;

    return (
        <div className='text-3xl'>This is a startup number : {id}</div>
    )
}

export default Page