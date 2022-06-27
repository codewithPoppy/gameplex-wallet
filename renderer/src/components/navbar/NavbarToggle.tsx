import { ComponentProps, FC } from 'react';
import classNames from 'classnames';
import { GoThreeBars } from 'react-icons/go';
import { useNavbarContext } from './NavbarContext';
import { getMaxListeners } from 'process';

export type NavbarToggleProps = ComponentProps<'button'> & {
  barIcon?: FC<ComponentProps<'svg'>>;
};

export const NavbarToggle: FC<NavbarToggleProps> = ({ barIcon: BarIcon = GoThreeBars }) => {
  const { isOpen, setIsOpen } = useNavbarContext();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className={classNames(
        'ml-3 flex justify-center text-right rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden',
      )}
      onClick={handleClick}
    >
      <span className="sr-only">Open main menu</span>
      <BarIcon className="h-6 w-6 shrink-0" />
    </button>
  );
};