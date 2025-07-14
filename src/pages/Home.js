import React, { Component } from 'react'
import Broadcast from '../components/Broadcast'
import HeroBanner from '../components/Banner'
import AboutSection from '../components/AboutSection'

export default class Home extends Component {
    render() {
        return (
            <>
                <HeroBanner />
                <AboutSection />
                <Broadcast />
            </>
        )
    }
}
