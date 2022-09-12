import React from 'react';

import preloader from '../../../assets/preloader.gif'

const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt="Preloader"/>
        </div>
    );
};

export default Preloader;