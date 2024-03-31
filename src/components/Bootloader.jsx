import React, { useState, useEffect } from 'react';
import Spinner from '../../public/loading.gif';
const Bootloader = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative h-screen w-screen">
            {loading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                    <img src={Spinner} alt="loading screen..." className="w-full h-full" />
                </div>
            ) : (
                <div className="content">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Bootloader;
