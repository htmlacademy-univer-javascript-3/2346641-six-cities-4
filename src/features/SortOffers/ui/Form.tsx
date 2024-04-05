import { useState, type FC } from 'react';

import cn from 'classnames';
import { useTypedSelector } from 'shared/hooks';
import { useOfferSortActions } from '..';
import { offerSortTypes, type OfferSortType } from '../model/types';

type OptionProps = {
  title: string;
  active?: boolean;
  onClick: (title: string) => void;
};

const Option: FC<OptionProps> = ({ title, active, onClick }) => {
  const handleClick = () => {
    onClick(title);
  };

  return (
    <li
      className={cn('places__option', active && 'places__option--active')}
      tabIndex={0}
      onClick={handleClick}
    >
      {title}
    </li>
  );
};

export const Form: FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const current = useTypedSelector((state) => state.offerSort);
  const { setSortType } = useOfferSortActions();

  const handleOptionClick = (option: OfferSortType) => () => {
    setSortType(option);
  };

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={() => setIsOpened((p) => !p)}
    >
      <span className="places__sorting-caption" style={{ paddingRight: 8 }}>
        Sort by
      </span>
      <span className="places__sorting-type" tabIndex={0}>
        {current}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          isOpened && 'places__options--opened'
        }`}
      >
        {offerSortTypes.map((type) => (
          <Option
            key={type}
            title={type}
            active={type === current}
            onClick={handleOptionClick(type)}
          />
        ))}
      </ul>
    </form>
  );
};

Form.displayName = 'Form';
