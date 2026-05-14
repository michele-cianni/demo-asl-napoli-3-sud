import { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet';

const BASE = import.meta.env.BASE_URL;

const campaniaStyle = {
  color: '#52b075',
  weight: 1.5,
  dashArray: '4 4',
  fillColor: '#52b075',
  fillOpacity: 0.10,
};

const aslStyle = {
  color: '#50639d',
  weight: 2,
  fillColor: '#50639d',
  fillOpacity: 0.20,
};

const load = (url) =>
  fetch(url)
    .then((r) => (r.ok ? r.json() : null))
    .catch(() => null);

const BoundaryLayer = () => {
  const [campania, setCampania] = useState(null);
  const [asl, setAsl] = useState(null);

  useEffect(() => {
    Promise.all([
      load(`${BASE}data/campania.geojson`),
      load(`${BASE}data/asl-napoli-3-sud.geojson`),
    ]).then(([c, a]) => {
      if (c) setCampania(c);
      if (a) setAsl(a);
    });
  }, []);

  return (
    <>
      {campania ? <GeoJSON key="campania" data={campania} style={campaniaStyle} /> : null}
      {asl ? <GeoJSON key="asl" data={asl} style={aslStyle} /> : null}
    </>
  );
};

export { BoundaryLayer };
