import { Router } from './router';
import { withStore } from './store/withStore';

export const App = () => withStore(() => <Router />)();
