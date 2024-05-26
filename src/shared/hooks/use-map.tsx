import { useEffect, useRef, useState, type MutableRefObject } from 'react';

import {
  Icon,
  Map,
  Marker,
  TileLayer,
  layerGroup,
  type PointTuple,
} from 'leaflet';

import { MAP_ATTRIBUTION, MAP_CDN_URL, MARKER_BASE_URL } from 'shared/const';
import type { Location } from 'shared/types';

const MARKER_URL_DEFAULT = MARKER_BASE_URL + '/pin.svg';
const MARKER_URL_CURRENT = MARKER_BASE_URL + '/main-pin.svg';
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
  city: Location,
  points: { id: string; latitude: number; longitude: number }[],
  selectedPoint?: { id: string; latitude: number; longitude: number }
): Map | null => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  // Initializes map
  useEffect(() => {
    if (mapRef.current && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude,
        },
        zoom: city.zoom,
      });

      const layer = new TileLayer(MAP_CDN_URL, {
        attribution: MAP_ATTRIBUTION,
      });

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  // Adds city change animation
  useEffect(() => {
    if (map) {
      map.flyTo([city.latitude, city.longitude], city.zoom, {
        duration: 2,
      });
    }
  }, [map, city]);

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
            selectedPoint && point.id === selectedPoint.id
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
