import React from 'react'
import AboutHistory from '../components/AboutHistory'
import MissionValues from '../components/MissionValues'
import TeamSlider from '../components/TeamSlider'
import Documents from '../components/Documents'

export default function About() {
  return (
    <>
        {/* <div className='history'>
            <div className='history__main'>
                <div className='history__title'>О нашем фонде</div>
                <div className='history__text'></div>
            </div>
        </div> */}
        <AboutHistory />
        <MissionValues />
        <TeamSlider />
        <Documents />
    </>
  )
}
