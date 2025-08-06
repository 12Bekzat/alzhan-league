import React from "react";
import AboutHistory from "../components/AboutHistory";
import MissionValues from "../components/MissionValues";
import TeamSlider from "../components/TeamSlider";
import Documents from "../components/Documents";

import FirstDoc from '../assets/Устав_Фонда_Алжан.pdf'
import SecondDoc from '../assets/ШЛ Алжан Рудный 24-25.pdf'
import ThirdDoc from '../assets/ШЛ_Alzhan_2024_г._г._Актобе.pdf'
import FourthDoc from '../assets/ШЛ_Alzhan_2024_г._г._Лисаковск,_Октябрьский.pdf'
import FifthDoc from '../assets/ШЛ_Alzhan_2024_г._г._Рудный.pdf'
import SixthDoc from '../assets/ШЛ_Alzhan_2024_г._г._Хромтау.pdf'
import SeventhDoc from '../assets/ЩЛ Алжан Лисаковск 24-25.pdf'
import TabPanel from "../components/TabPanel";
import AboutBanner from "../components/AboutBanner";

export default function About() {
  return (
    <>
      {/* <div className='history'>
            <div className='history__main'>
                <div className='history__title'>О нашем фонде</div>
                <div className='history__text'></div>
            </div>
        </div> */}
        <AboutBanner />
      <AboutHistory />
      <MissionValues />
      <TeamSlider />
      <TabPanel tabs={[
        {
          label: 'Учредительные и регистрационные документы',
          content: <Documents
            docs={[
              "Устав Alzhan League",
            ]}
            documents={[
              FirstDoc,
            ]}
          />
        },
        {
          label: 'Регламенты и положения игр',
          content: <Documents
            docs={[
              "Алжан Рудный 2024-2025",
              "Алжан Актобе 2024",
              "Алжан Лисаковск Октябрский 2024",
              "Алжан Рудный 2024",
              "Алжан Хромтау 2024",
              "Алжан Лисаковск 2024-2025",
            ]}
            documents={[
              SecondDoc,
              ThirdDoc,
              FourthDoc,
              FifthDoc,
              SixthDoc,
              SeventhDoc,
            ]}
          />
        }]
      } />
    </>
  );
}
