import { lazy, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from './components/common';
import DelayedLoading from './components/common/DelayedLoading/DelayedLoading';
import { Layout } from './components/layout';
import CharacterDetailsSkeleton from './pages/CharacterDetailsSkeleton/CharacterDetailsSkeleton';

// Imitating 3sec delay for main component to demonstrate how preview works
const CharactersList = lazy(() => 
  Promise.all([
    import('./pages/CharactersList/CharactersList'),
    new Promise(resolve => setTimeout(resolve, 3000))
  ]).then(([module]) => module)
);
const CharacterDetails = lazy(() => 
  Promise.all([
    import('./pages/CharacterDetails/CharacterDetails'),
    new Promise(resolve => setTimeout(resolve, 3000))
  ]).then(([module]) => module)
);
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

export const AppRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingSkipped, setLoadingSkipped] = useState(false);

  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                {/*
                 this preview plays two roles at the same time - loading preview and entry screen
                 it can be skipped, but only when component is loaded
                  */}
                {!loadingSkipped && <DelayedLoading isLoading={isLoading} onSkip={() => setLoadingSkipped(true)} />}
                <Suspense fallback={null}>
                  <CharactersList onLoad={() => setIsLoading(false)} />
                </Suspense>
              </>
            }
          />
          <Route
            path="character/:id"
            element={
              <Suspense fallback={<CharacterDetailsSkeleton />}>
                <CharacterDetails />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<DelayedLoading isLoading={isLoading} onSkip={() => setIsLoading(false)} />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}; 