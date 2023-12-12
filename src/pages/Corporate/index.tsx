import { lazy } from 'react';

const LazyFirstLevel = lazy(() => import('./Corporate'));

const AuthorizationLazyPage = () => <LazyFirstLevel />;

export default AuthorizationLazyPage;