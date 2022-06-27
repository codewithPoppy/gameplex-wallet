import { FC } from 'react';
import classNames from 'classnames';
import { useNavbarContext } from './NavbarContext';

export const NavbarCollapse: FC = ({ children }) => {
  const { isOpen } = useNavbarContext();
  return (
    <div className={classNames('w-full md:block md:w-auto col-span-3 md:col-span-1 md:order-1 text-center', { hidden: !isOpen })}>
      <ul className="mt-4 flex flex-col md:mt-2 md:flex-row md:space-x-16 md:text-sm md:font-medium w-100 md:mx-0 lg:mx-9 xl:mx-16 whitespace-nowrap">{children}</ul>
    </div>
  );
};
