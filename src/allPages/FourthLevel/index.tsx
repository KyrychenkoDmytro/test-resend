import { lazy } from 'react';

const LazyFirstLevel = lazy(() => import('./FourthLevel'));

const AuthorizationLazyPage = () => <LazyFirstLevel />;

export default AuthorizationLazyPage;