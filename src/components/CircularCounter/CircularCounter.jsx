import React, { useState, useEffect } from 'react';

const CircularCounter = ({ maxValue, animationDuration }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => {
                if (prevCounter < maxValue) {
                    return prevCounter + 1;
                } else {
                    clearInterval(interval);
                    return prevCounter;
                }
            });
        }, animationDuration / maxValue);

        return () => {
            clearInterval(interval);
        };
    }, [maxValue, animationDuration]);

    const percentage = (counter / maxValue) * 100;

    return (
        <div className="circular-grid">
            <div className="circular-counter">
                <div className="circle-mask">
                    <div className="circle" style={{ strokeDasharray: `${percentage}, 90` }} />
                </div>
                <div className="counter-text">{counter} <span className="counter-symbol">%</span></div>
                <h5 className="circular-skills">manascity</h5>
            </div>
            <div className="circular-counter">
                <div className="circle-mask">
                    <div className="circle" style={{ strokeDasharray: `${percentage}, 100` }} />
                </div>
                <div className="counter-text">{counter} <span className="counter-symbol">%</span></div>
                <h5 className="circular-skills">barabanki</h5>
            </div>
            <div className="circular-counter">
                <div className="circle-mask">
                    <div className="circle" style={{ strokeDasharray: `${percentage}, 100` }} />
                </div>
                <div className="counter-text">{counter} <span className="counter-symbol">%</span></div>
                <h5 className="circular-skills">gorakhpur</h5>
            </div>
            <div className="circular-counter">
                <div className="circle-mask">
                    <div className="circle" style={{ strokeDasharray: `${percentage}, 100` }} />
                </div>
                <div className="counter-text">{counter} <span className="counter-symbol">%</span></div>
                <h5 className="circular-skills">jaipur</h5>
            </div>
            <div className="circular-counter">
                <div className="circle-mask">
                    <div className="circle" style={{ strokeDasharray: `${percentage}, 100` }} />
                </div>
                <div className="counter-text">{counter} <span className="counter-symbol">%</span></div>
                <h5 className="circular-skills">balaganj</h5>
            </div>
            <div className="circular-counter">
                <div className="circle-mask">
                    <div className="circle" style={{ strokeDasharray: `${percentage}, 100` }} />
                </div>
                <div className="counter-text">{counter} <span className="counter-symbol">%</span></div>
                <h5 className="circular-skills">manascity</h5>
            </div>
        </div>
    );
};

export default CircularCounter;
