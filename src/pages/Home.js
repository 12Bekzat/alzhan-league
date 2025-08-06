import React, { Component } from 'react'
import Broadcast from '../components/Broadcast'
import HeroBanner from '../components/Banner'
import AboutSection from '../components/AboutSection'
import BasketballNewsSection from '../components/BasketballNewsSection'
import PartnersMini from '../components/PartnersMini'

export default class Home extends Component {
    render() {
        return (
            <>
                <HeroBanner />
                <AboutSection />
                <BasketballNewsSection />
                <Broadcast/>
                <PartnersMini />
            </>
        )
    }
}
