import { useCallback, type FC } from 'react';

import { CityTabItem } from './CityTabItem';

import { useCityActions } from 'entities/City';
import { CITIES } from 'shared/const';
import { useTypedSelector } from 'shared/hooks';

export const CityTabs: FC = () => {
  const currentCity = useTypedSelector((state) => state.city);
  const { setCity } = useCityActions();

  const handleTabItemClick = useCallback(
    (city: string) => {
      const target = CITIES.find((c) => c.title === city)!;
      setCity(target);
    },
    [setCity]
  );

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city, index) => (
            <CityTabItem
              key={`${city}-${index}`}
              title={city.title}
              isActive={city.title === currentCity.title}
              onClick={handleTabItemClick}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

CityTabs.displayName = 'CityTabs';
