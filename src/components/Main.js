import React, {useEffect} from 'react';
import styled from 'styled-components';
import '../App.css';

// Icons
import HttpIcon from '@material-ui/icons/Http';
import FacebookIcon  from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

// Components
import RanchPCHeader from './navbar/RanchPCHeader';
import RanchPCFooter from './footer/RanchPCFooter';
import RanchPCServices from './services/RanchPCServices';
import RanchPCAbout from './about/RanchPCAbout';

// Framer Motion
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion/dist/es/';

const Main = () => {
    const {ref, inView} = useInView({
        threshold: 0.25
    });
    const scaling = useAnimation();

    const fade_1 = useAnimation();
    const fade_2 = useAnimation();
    const fade_3 = useAnimation();

    useEffect(() => {
        if(inView) {
            scaling.start({
                fontSize: '2em' ,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }
            });
            fade_1.start({
                opacity: 1,
                transition: {
                    type: 'spring', duration: 1
                }
            });
            fade_2.start({
                opacity: 1,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3, delay: 0.25
                }
            });
            fade_3.start({
                opacity: 1,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3, delay: 0.50
                }
            });
        }
        if(!inView) {
            scaling.start({
                fontSize: '1em'
            });
            fade_1.start({
                opacity: 0,
            });
            fade_2.start({
                opacity: 0,
            });
            fade_3.start({
                opacity: 0,
            });
        }
    })

    return (
        <>
            <RanchPCHeader />
                <div className="topSec" id="home">
                    <section align="center" className="home"> 
                        {/* Home Section */}
                        <motion.img className="homeIMG" src=".././images/computer.png" alt="" 
                            initial={{x: '-10vw', opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{type: 'spring', duration: 2, bounce: 0.3, delay: 2}}
                        />
                        <motion.h1
                            initial={{x: '10vw', opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{type: 'spring', duration: 2, bounce: 0.3, delay: 2}}
                        >
                            Build Your Personal Computer<br/>that Satisfies You with Us
                        </motion.h1>
                        <motion.div className="scl"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1.5}}
                        >
                            <ul>
                                <Scl>
                                    <li><HttpIcon/></li>
                                </Scl>
                                <Scl>
                                    <li><FacebookIcon/></li>
                                </Scl>
                                <Scl>
                                    <li><EmailIcon/></li>
                                </Scl>
                                <Scl>
                                    <li><PhoneIphoneIcon/></li>
                                </Scl>
                            </ul>
                        </motion.div>
                        <div class="custom-shape-divider-bottom-1636901908">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                            </svg>
                        </div>
                    </section>
                </div>
            
                <div ref={ref} className="gifs">

                    <center>
                        <motion.h3
                            animate={scaling}
                        >
                            Our Service to Your Home
                        </motion.h3>
                        <br/><br/>
                        <motion.img className="gif1" alt="Timelapse 1 of PC Building" src=".././images/agif1.gif"
                            animate={fade_1}
                        />
                        <motion.img className="gif2" alt="Timelapse 2 of PC Building" src=".././images/agif2.gif"
                            animate={fade_2}
                        />
                        <motion.img className="gif3" alt="Timelapse 3 of PC Building" src=".././images/agif3.gif"
                            animate={fade_3}
                        />
                    </center>
                </div>

                <RanchPCServices />
                <RanchPCAbout />
            <RanchPCFooter />
        </>
    );
}

export default Main;

const Scl = styled.div`
    li  > .MuiSvgIcon-root {
        color: #6f757d;
    }
`;
