import React from 'react';
import { Particles } from '../node_modules/react-particles-js';


const ParticleBG = () => {
    return (
        <div>
            <Particles id="particles"
            params={{
            particles: {
                number: {
                value: 77,
                density: {
                    enable: true,
                    value_area: 946.9771699587272,
                },
                },
                color: {
                value: '#00FF00',
                },
                shape: {
                type: 'circle',
                stroke: {
                    width: 1.5,
                    color: '#FFEEEE',
                },
                polygon: {
                    nb_sides: 3,
                },
                },
                opacity: {
                value: .5,
                random: false,
                anim: {
                    enable: true,
                    speed: 10,
                    opacity_min: 0.19489853095232282,
                    sync: false,
                },
                },
                size: {
                value: 4,
                random: true,
                anim: {
                    enable: false,
                    speed: 10,
                    size_min: 0.1,
                    sync: false,
                },
                },
                line_linked: {
                enable: true,
                distance: 160,
                color: '#FFFFFF',
                opacity: 0.5,
                width: 1.5,
                },
                move: {
                enable: true,
                speed: 3,
                direction: 'top',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 721.5354273894853,
                    rotateY: 1200,
                },
                },
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                onhover: {
                    enable: true,
                    mode: 'repulse',
                },
                onclick: {
                    enable: true,
                    mode: 'push',
                },
                resize: true,
                },
                modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                    opacity: 1,
                    },
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                },
                repulse: {
                    distance: 37,
                    duration: 0.4,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
                },
            },
            retina_detect: true,
            }}
            style={{
            position: 'sticky'
            }}
         />
        
        </div>
    )
}


export default ParticleBG;
