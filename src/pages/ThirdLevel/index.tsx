import { lazy } from 'react';

const LazyFirstLevel = lazy(() => import('./ThirdLevel'));

const AuthorizationLazyPage = () => <LazyFirstLevel />;

export default AuthorizationLazyPage;