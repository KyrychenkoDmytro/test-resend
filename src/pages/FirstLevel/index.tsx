import { lazy } from 'react';

const LazyFirstLevel = lazy(() => import('./FirstLevel'));

const AuthorizationLazyPage = () => <LazyFirstLevel />;

export default AuthorizationLazyPage;