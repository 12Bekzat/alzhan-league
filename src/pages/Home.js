import React, { Component } from "react";
import Broadcast from "../components/Broadcast";
import HeroBanner from "../components/Banner";
import BasketballNewsSection from "../components/BasketballNewsSection";
import PartnersMini from "../components/PartnersMini";
import SponsorSlider from "../components/SponsorSlider";
import { getPhotoByName } from "../images";

import BroadCastImg from '../assets/496918923_17909249802106234_256190063690193968_n.jpg'

const sponsorSlides = [
  {
    img: 'https://nbf.kz/_images/main_banner/202_1635787648_0.jpg',
    alt: "Sport Qory",
    href: "https://example.com/1",
  },
  { img: 'https://nbf.kz/_images/main_banner/202_1636492858_0.jpg', alt: "NBF", href: "https://example.com/2" },
];

export default class Home extends Component {
  render() {
    return (
      <>
        <HeroBanner />
        <span className="" style={{ width: '90%', marginTop: 50, marginBottom: 50 }}>
        <SponsorSlider
          slides={sponsorSlides}
          autoplayDelay={500}
          transitionMs={650}
          height={300}
          borderRadius={28}
          showArrows={false}
          showDots={false}
        />
        </span>
        <BasketballNewsSection />
        <Broadcast />
        <PartnersMini />
      </>
    );
  }
}
