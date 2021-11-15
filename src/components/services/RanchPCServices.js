import React, {useEffect} from 'react';
import './services.css';

// Icons
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import BuildIcon from '@material-ui/icons/Build';
import OpacityIcon from '@material-ui/icons/Opacity';

// Framer Motion
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion/dist/es/';

const RanchPCServices = () => {
    const {ref, inView} = useInView({
        threshold: 0.2
    });
    const fade = useAnimation();
    const animationLeft = useAnimation();
    const animationRight = useAnimation();

    useEffect(() => {
        console.log(`inView: ${inView}`);
        if(inView) {
            fade.start({
                opacity: 1,
                transition: {
                    type: 'spring', duration: 5, bounce: 0.3
                }
            });
            animationLeft.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }
            });
            animationRight.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }
            });
        }
        if(!inView) {
            fade.start({
                opacity: 0
            });
            animationLeft.start({
                x: '-10vw',
            });
            animationRight.start({
                x: '10vw'
            });
        }
    },[inView]);

    return (
        <section className="services" id="services">
            <h1 className="heading">Ranch PC's <br/> Services</h1>
            <div className="row">

                <div className="image">
                    <img src=".././images/servbg.png" alt="nzxt gaming pc build"/>
                </div>

                <div ref={ref} className="box-container">

                    <motion.div className="box"
                        animate={animationLeft}
                    >
                        <h3><DesktopWindowsIcon id="bIcon"/>Labor</h3>
                        <p>
                            Choose your parts and we will build it for you.
                        </p>
                    </motion.div>

                    <motion.div className="box"
                        animate={fade}
                    >
                        <h3><BuildIcon id="bIcon"/>Troubleshooting</h3>
                        <p>
                            Hardware and software troubleshooting. We'll fix it for you.
                        </p>
                    </motion.div>
                    <motion.div className="box"
                            animate={animationRight}
                    >
                        <h3><OpacityIcon id="bIcon"/>Cleaning</h3>
                        <p>
                            Maintenance and cleaning for your PC. Making sure your PC is still fast.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default RanchPCServices;
