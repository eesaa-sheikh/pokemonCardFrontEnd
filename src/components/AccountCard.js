import { Link } from "react-router-dom";
import AccountList from "./AccountList";
import React, { useEffect, useRef } from 'react'
import { useMotionValue, useTransform, motion } from "framer-motion";
import brock from '../TrainerPng/Brock.png'
import ash from '../TrainerPng/Ash.png'



const AccountCard = ({acc, setOpp, props}) => {
// const img = require(`../TrainerAsset/${acc.username}.jpg`)
    

        const x = useMotionValue(0);
        const y = useMotionValue(0);
        const rotateX = useTransform(y, [-100, 100], [30, -30]);
        const rotateY = useTransform(x, [-100, 100], [-30, 30]);

        return (
            // card wrapper
            <>
            <div style={{ perspective: 2000}}>
                {/* card */}
                <motion.div
                style={{ x, y, rotateX, rotateY, z: 5,  }}
                drag
                dragElastic={0.50}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: 'grabbing' }}
                className='w-[426px] min-h-[600px] rounded-[30px] border-[4px] border-white  cursor-grab relative'
                >
                <img className='w-[426px] min-h-[600px] rounded-[30px] max-h-[600px] cursor-grab relative ' src={require(`../TrainerAsset/${acc.username}.jpg`)} alt='trainer fanart' draggable='false' />
                {/* card image */}
                <motion.div style={{ x, y, rotateX, rotateY, z: 10 }} className='absolute top-20 -right-64 w-[620px]'>
                    <img className='h-[400px] drop-shadow-lg' src={require(`../TrainerPng/${acc.username}.png`)} alt='trainer image' draggable='false' />
                </motion.div>
                </motion.div>

                

            </div>
            </>
            );
        };
    

    export default AccountCard





















