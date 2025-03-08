import React from 'react'
import RootLayouts from '../layouts/RootLayouts'
import Hero from '../components/molecules/Hero'
import Collection from '../components/organisems/Collection'


export default function Home() {
    return (
        <>
            <RootLayouts>
                <Hero />
                <Collection />
            </RootLayouts>
        </>
    )
}