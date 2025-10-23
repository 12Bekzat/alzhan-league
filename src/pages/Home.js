import React, { Component } from "react";
import Broadcast from "../components/Broadcast";
import HeroBanner from "../components/Banner";
import BasketballNewsSection from "../components/BasketballNewsSection";
import PartnersMini from "../components/PartnersMini";
import SponsorSlider from "../components/SponsorSlider";
import { QuoteHero } from "../components/QuoteHero";
import Man from "../assets/man.jpg";
import StatsCounters from "../components/StatsCount";
import AlzhanFacts from "../components/StatsCount";
import EventHighlight from "../components/EventHighlight";

import Event1 from "../assets/event1.jpg";
import Event2 from "../assets/event2.jpg";
import Event3 from "../assets/event3.jpg";
import Event4 from "../assets/event4.jpg";
import Event5 from "../assets/event5.jpg";
import ContactRibbonForm from "../components/ContactRibbon";
import PlayerHero from "../components/PlayerHero";
import OnePlayer from "../assets/one-person.png";
import { useToast } from "../components/ToastProvider";

const banners = [
  "https://nbf.kz/_images/main_banner/202_1635787648_0.jpg",
  "https://nbf.kz/_images/main_banner/202_1636492858_0.jpg",
  "https://nbf.kz/_images/main_banner/202_1636492858_0.jpg",
];

const items = [
  { label: "Tips", value: 10, icon: "▦" },
  { label: "Followers", value: 51, icon: "☺" },
  { label: "Clones", value: 115, icon: "▣" },
];

const previews = [Event1, Event2, Event3, Event4, Event5];

export default function Home() {
  const toast = useToast();

  const handleSubmit = () => {
    toast.success({ title: "Готово", message: "Изменения сохранены", duration: 3 });
  };

  return (
    <>
      <HeroBanner />
      <span
        className=""
        style={{ width: "90%", marginTop: 50, marginBottom: 50 }}
      >
        <SponsorSlider
          images={banners}
          aspectRatio="21 / 5" // чтобы баннеры не «слетали»
          objectFit="cover" // или "contain", если нужно видеть всё без обрезки
          intervalMs={3500}
        />
      </span>
      <BasketballNewsSection />
      <Broadcast />
      {/* <PartnersMini /> */}
      <QuoteHero photo={Man} />
      <PlayerHero
        bg="/assets/bgs/court.jpg"
        photo={OnePlayer}
        number={15}
        firstName="СУПЕРФИНАЛ"
        lastName="ХРОМТАУ"
        team="ALZHAN LEAGUE"
        stats={[
          { label: "детей", value: 2000 },
          { label: "школ", value: 100, highlight: true },
          { label: "регионов Казахстана", value: 7 },
        ]}
        lastGame={{
          left: { logo: "/logos/bucks.svg", pts: 119 },
          right: { logo: "/logos/bulls.svg", pts: 112 },
        }}
        video={{
          thumb: "/assets/video-thumb.jpg",
          url: "https://www.youtube.com/embed/ysz5S6PUM-U",
        }}
      />
      <EventHighlight
        title="Суперфинал Alzhan"
        subtitle=""
        videoId="rrCVtRid1rE"
        previews={previews}
        albumUrl="https://vk.com/album-224328985_307135460"
      />
      <ContactRibbonForm onSubmit={handleSubmit} />
    </>
  );
}
