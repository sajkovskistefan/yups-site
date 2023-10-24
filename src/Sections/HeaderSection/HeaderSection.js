import React from 'react';

import { Button } from '../../UI/Reusable/Button/Button';
import './headerSection.css';

export const HeaderSection = () => {
    return (
        <section className="yups-logo-background">
            <p className='hero-section-text'>
                The perfect partner for accelerating your business with a seamless data-driven marketing strategy and stable tech solutions specifically designed for YOU.
            </p>
            <Button buttonText={"Contact us"} className={"orangeButton header-button-class"} />
        </section>
    )
}
