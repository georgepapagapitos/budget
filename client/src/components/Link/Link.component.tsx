import React, { FC, HTMLAttributes } from 'react';

export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const Link: FC<LinkProps> = ({ children, href }) => {
  return (
    <a href={href}>{children}</a>
  );
};
