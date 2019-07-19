import React from 'react';
import style from './Overlap.scss';
import { Svg } from '../Svg/Svg';
import { Parallax } from 'react-scroll-parallax';
import circle from './circle.svg';
import circleRings from './circle-rings.svg';

const Overlap = () => (
    <div className={style.root}>
        <div className={style.container}>
            <Parallax
                offsetYMax={150}
                offsetYMin={-50}
                offsetXMax={-40}
                offsetXMin={20}
                className={style.circle}
            >
                <Svg
                    svg={circle}
                />
            </Parallax>
            <Parallax
                offsetYMax={150}
                offsetYMin={-50}
                offsetXMax={40}
                offsetXMin={-20}
                className={style.circleRings}
            >
                <Svg
                    svg={circleRings}
                />
            </Parallax>
        </div>
    </div>
);

export default Overlap;
