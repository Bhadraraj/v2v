import React from 'react';
import IntroSec from './IntroSec';
import AboutUs from './AboutUs';
import InstructionSec from './InstructionSec';
import StartExam from './StartExam';

const Home = () => {
    return (
        <div>
            <IntroSec />
            <AboutUs />
            <InstructionSec />
            <StartExam />
        </div>
    )
}

export default Home