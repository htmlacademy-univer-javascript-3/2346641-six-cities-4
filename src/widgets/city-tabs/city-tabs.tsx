import { memo, useCallback } from 'react';

import { CityTabItem } from './city-tab-item';

import type { City } from 'entities';
import { useCityActions } from 'entities/city';
import { CITIES } from 'shared/const';
import { useTypedSelector } from 'shared/hooks';

export const CityTabs = memo(function CityTabs() {
  const currentCity = useTypedSelector((state) => state.city);
  const { setCity } = useCityActions();

  const handleTabItemClick = useCallback(
    (city: string) => {
      const target = CITIES.find((c) => c.name === city)! as City;
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
              title={city.name}
              isActive={city.name === currentCity.name}
              onClick={handleTabItemClick}
            />
          ))}
        </ul>
      </section>
    </div>
  );
});
