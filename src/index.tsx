import 'app/styles/styles.css';
import 'leaflet/dist/leaflet.css';

import ReactDOM from 'react-dom/client';
import { Root } from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Root />);
