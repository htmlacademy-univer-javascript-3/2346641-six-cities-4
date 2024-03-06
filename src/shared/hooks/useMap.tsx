import { useEffect, useState, MutableRefObject, useRef } from 'react';
import {
  Map,
  Marker,
  TileLayer,
  layerGroup,
  Icon,
  type PointTuple,
} from 'leaflet';

const MARKET_BASE_URL =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map';

const MARKER_URL_DEFAULT = MARKET_BASE_URL + '/pin.svg';
const MARKER_URL_CURRENT = MARKET_BASE_URL + '/main-pin.svg';
const MARKER_ICON_SIZE: PointTuple = [40, 40];
const MARKER_ICON_ANCHOR: PointTuple = [20, 20];

const mapCustomIcons = {
  default: new Icon({
    iconUrl: MARKER_URL_DEFAULT,
    iconSize: MARKER_ICON_SIZE,
    iconAnchor: MARKER_ICON_ANCHOR,
  }),
  current: new Icon({
    iconUrl: MARKER_URL_CURRENT,
    iconSize: MARKER_ICON_SIZE,
    iconAnchor: MARKER_ICON_ANCHOR,
  }),
};

export const useMap = (
  mapRef: MutableRefObject<HTMLElement | null>,
  city: { latitude: number; longitude: number },
  points: { id: string; latitude: number; longitude: number }[],
  selectedPoint?: { id: string; latitude: number; longitude: number }
): Map | null => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude,
        },
        zoom: 12,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.id === selectedPoint.id
              ? mapCustomIcons.current
              : mapCustomIcons.default
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return map;
};
