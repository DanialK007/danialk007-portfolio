"use client"
// components/Marquee.tsx
import React from 'react';
import MarqueeSlider from 'react-marquee-slider';
import styles from './Marquee.module.css';

const Marquee: React.FC = () => {
  const companyNames = ["Company 1", "Company 2", "Company 3", "Company 4", "Company 5"];

  return (
    <div className={styles.marqueeContainer}>
      <MarqueeSlider velocity={20} minScale={0.7} resetAfterTries={200} scatterRandomly>
        {/* {companyNames.map((name, index) => (
          <div key={index} className="inline-block p-5 bg-blue-600">
            {name}
          </div>
        ))} */}
        <div className="p-5 inline-block">Hi</div>
        <div className="p-5 inline-block">Hi</div>
        <div className="p-5 inline-block">Hi</div>
        <div className="p-5 inline-block">Hi</div>
      </MarqueeSlider>
    </div>
  );
};

export default Marquee;
