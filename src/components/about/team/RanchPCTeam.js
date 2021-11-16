import React, {useEffect} from 'react';
import './team.css';

// Icons
import FacebookIcon  from '@material-ui/icons/Facebook';

// Framer Motion
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion/dist/es/';

const RanchPCTeam = () => {
    const {ref, inView} = useInView({
        threshold: 0.55
    });
    const animationLeft = useAnimation();
    const animationRight = useAnimation();
    const animationUp = useAnimation();
    const animationDown = useAnimation();

    useEffect(() => {
        if(inView) {
            animationLeft.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3, delay: 0.25
                }
            });
            animationRight.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3, delay: 0.25
                }
            });
            animationUp.start({
                y: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3, delay: 0.25
                }
            });
            animationDown.start({
                y: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3, delay: 0.25
                }
            });
        }
        if(!inView) {
            animationLeft.start({
                x: '-5vw',
            });
            animationRight.start({
                x: '5vw'
            });
            animationUp.start({
                y: '5vh',
            });
            animationDown.start({
                y: '-5vh'
            });
        }
    })
    return (
        <>
            <section className="teamDets">
                <div ref={ref} className="rpcTeam">
                    <motion.div className="cardTeam"
                        animate={animationLeft}
                    >
                        <div className="conTeam">
                            <div className="imgTeam"><img src=".././images/Isaac.jpg" alt=""/></div>
                            <div className="conTeamBx">
                                <h3>Isaac Sarte<br/><span>BS Computer Science</span></h3>
                            </div>
                        </div>
                        <ul className="sclTeam">
                            <li>
                                <a href="#"><FacebookIcon /></a>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div className="cardTeam"
                        animate={animationUp}
                    >
                        <div className="conTeam">
                            <div className="imgTeam"><img src=".././images/Jarren.jpg" alt=""/></div>
                            <div className="conTeamBx">
                                <h3>Jarren Barbacena<br/><span>Business Operations Management</span></h3>
                            </div>
                        </div>
                        <ul className="sclTeam">
                            <li>
                                <a href="#"><FacebookIcon /></a>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div className="cardTeam"
                        animate={animationDown}
                    >
                        <div className="conTeam">
                            <div className="imgTeam"><img src=".././images/Mart.jpg" alt=""/></div>
                            <div className="conTeamBx">
                                <h3>Mart Panaligan<br/><span>BA Multimedia Arts</span></h3>
                            </div>
                        </div>
                        <ul className="sclTeam">
                            <li>
                                <a href="#"><FacebookIcon /></a>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div className="cardTeam"
                        animate={animationRight}
                    >
                        <div className="conTeam">
                            <div className="imgTeam"><img src=".././images/Desi.jpg" alt=""/></div>
                            <div className="conTeamBx">
                                <h3>Desi Panen<br/><span>Physical Therapy</span></h3>
                            </div>
                        </div>
                        <ul className="sclTeam">
                            <li>
                                <a href="#"><FacebookIcon /></a>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default RanchPCTeam;