import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function Link({ href, children, ...props }: LinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // In a real app, implement proper routing
    console.log('Navigating to:', href);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}