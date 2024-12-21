import { type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export default function Container({ 
  children, 
  className = '',
  ...props 
}: ContainerProps) {
  return (
    <div 
      className={cn('container mx-auto px-4', className)}
      {...props}
    >
      {children}
    </div>
  );
}