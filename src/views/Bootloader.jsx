import React, { useState, useEffect } from 'react';
import Spinner from '../../public/spinner.gif';

const Bootloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`bootloader ${loading ? 'loading' : ''}`}>
            {loading ? (
                <img src={Spinner} alt="loading screen..." />
            ) : (
                <div className="content">
                    {/* yaha content aa jayega after */}
                </div>
            )}
        </div>
    );
};

export default Bootloader;
