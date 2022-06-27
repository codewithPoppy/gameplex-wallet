import { ComponentProps, FC } from 'react';

export const NavbarBrand: FC<ComponentProps<'a'>> = ({ children, href }) => (
  <a href={href} className="flex w-[50%] items-center h-6 sm:h-9">
    {children}
  </a>
);
