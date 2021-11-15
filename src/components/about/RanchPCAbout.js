import React, {useEffect} from 'react';
import './about.css';

// Components
import RanchPCTeam from './team/RanchPCTeam';

// Framer Motion
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion/dist/es/';

const RanchPCAbout = () =>  {
    const {ref, inView} = useInView({
        threshold: 0.25
    });
    const animateUp = useAnimation();

    useEffect(() => {
        if(inView) {
            animateUp.start({
                y: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }
            });
        }
        if(!inView) {
            animateUp.start({
                y: '15vh',
            });
        }
    })
    return (
        <>
            <section className="about" id="about">
                <h1 className="heading">About Us</h1>
                <div ref={ref} className="row">

                    <motion.div className="image"
                        animate={animateUp}
                    >
                        <img src=".././images/aboutbg.png" alt="Ranch PC Logo" />
                    </motion.div>

                    <div className="content">
                        <h3>Ranch PC</h3>

                        <p>Ranch PC is founded on the year 2020 by Isaac Sarte, Mart Panaligan, Jarren Barbacena, Desi Panen.
                        <br/><br/> These 4 members are best friends since grade school.
                        </p>

                        <p>👉It all started on the mid year of the start of the COVID19 Pandemic</p>
                        <p>👉To help people cope up on their work and studies in times of the ongoing pandemic</p>
                    </div>
                </div>

                <br/><br/><br/><br/>

                <h3 id="rpcTeam">Ranch PC Service Team</h3>
            </section>
            <RanchPCTeam />
        </>
    )
}

export default RanchPCAbout;