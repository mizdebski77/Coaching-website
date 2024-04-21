import React from 'react';
import { useInView } from 'react-intersection-observer';
import { AnimatedElementWrapper } from './styledHome';

interface AnimatedElementProps {
    children: React.ReactNode;
    left?: boolean;
    bottom?: boolean;
    right?: boolean;
};


const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, left, bottom, right }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: calculateRootMargin(),
    });

    function calculateRootMargin() {
        const screenWidth = window.innerWidth;

        if (screenWidth < 768) {
            return '0px 0px -20% 0px';
        } else {
            return '0px 0px -20% 0px';
        }
    }

    return (
        <AnimatedElementWrapper
            ref={ref}
            className={inView ? 'visible' : ''}
            left={left}
            bottom={bottom}
            right={right}
        >
            {children}
        </AnimatedElementWrapper>
    );
};

export default AnimatedElement;
