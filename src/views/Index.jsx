import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useAnimation } from 'framer-motion';

function Index() {

    const [loading, setLoading] = useState(true);
    const controls = useAnimation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        controls.start({ height: loading ? '100vh' : 0, opacity: loading ? 1 : 0 });
    }, [controls, loading]);

    return loading ? (
        <motion.div
            className={`fixed inset-0 flex justify-center items-end bg-gray-900 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            initial={{ height: 0, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            <motion.div
                className="w-full h-16 bg-white"
                initial={{ opacity: 1 }}
                animate={{ opacity: loading ? 1 : 0 }}
                transition={{ delay: 0.3, duration: 0.2 }}
            />
        </motion.div>
    ) : (

        <div className='w-screen h-screen flex items-center justify-center'>
            <Spline scene="https://prod.spline.design/WYNe8QHf-WB56UIe/scene.splinecode" />
        </div>
    )
}

export default Index
