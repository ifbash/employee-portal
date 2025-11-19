import React from 'react';

// 1. Export CardProps.
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

// 2. Card component.
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`rounded-lg bg-white shadow-md dark:bg-slate-800 ${className}`}
      {...props}
    />
  )
);

// 3. Assign display name for debugging.
Card.displayName = 'Card';

// 4. Export both Card (default) and CardProps (named).
export default Card;
