import React, { ReactNode } from 'react';

interface InfiniteSliderProps {
  children: ReactNode;
  speed?: number;
  speedOnHover?: number;
  gap?: number;
  className?: string;
}

export function InfiniteSlider({ 
  children, 
  speed = 40, 
  speedOnHover = 20, 
  gap = 112,
  className = ""
}: InfiniteSliderProps) {
  const childrenArray = React.Children.toArray(children);
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div 
        className="flex animate-scroll hover:animate-scroll-slow"
        style={{
          gap: `${gap}px`,
          animationDuration: `${speed}s`,
          '--hover-duration': `${speedOnHover}s`
        } as React.CSSProperties}
      >
        {/* First set of children */}
        {childrenArray.map((child, index) => (
          <div key={`first-${index}`} className="flex-shrink-0">
            {child}
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {childrenArray.map((child, index) => (
          <div key={`second-${index}`} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}