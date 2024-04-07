import type { FC } from 'react';

import { Icon } from 'shared/ui';

type ButtonProps = {
  checked?: boolean;
  onClick: VoidFunction;
  className?: string;
};

export const Button: FC<ButtonProps> = ({ checked, onClick, className }) => (
  <button
    className={`${className}__bookmark-button ${
      checked ? `${className}__bookmark-button--active` : ''
    } button`}
    type="button"
    onClick={onClick}
  >
    <Icon.Bookmark />
    <span className="visually-hidden">
      {checked ? 'In bookmarks' : 'To bookmarks'}
    </span>
  </button>
);
