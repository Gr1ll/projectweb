import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface FadeInSectionProps {
    children: ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        }, {threshold: 0.15});

        if (domRef.current) {
            observer.observe(domRef.current);
        }

        return () => {
            if (domRef.current) {
                observer.unobserve(domRef.current);
            }
        };
    }, []);

    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {children}
        </div>
    );
};

export default FadeInSection;