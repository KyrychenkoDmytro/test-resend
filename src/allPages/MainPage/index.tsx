import { lazy } from 'react';

const LazyFirstLevel = lazy(() => import('./MainPage'));

const AuthorizationLazyPage = () => <LazyFirstLevel />;

export default AuthorizationLazyPage;