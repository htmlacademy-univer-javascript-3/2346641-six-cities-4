import { memo } from 'react';

import cn from 'classnames';

type CityTabItemProps = {
  title: string;
  isActive: boolean;
  onClick: (city: string) => void;
};

export const CityTabItem = memo(function CityTabItem(props: CityTabItemProps) {
  const { title, isActive, onClick } = props;

  const onClickCallback = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick(title);
  };

  return (
    <li className="locations__item">
      <a
        className={cn(
          'locations__item-link',
          'tabs__item',
          isActive && 'tabs__item--active'
        )}
        onClick={onClickCallback}
      >
        <span>{title}</span>
      </a>
    </li>
  );
});
