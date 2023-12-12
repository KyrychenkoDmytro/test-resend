import { lazy } from 'react';

const LazyFirstLevel = lazy(() => import('./SecondLevel'));

const AuthorizationLazyPage = () => <LazyFirstLevel />;

export default AuthorizationLazyPage;