import React, { useEffect, useState } from 'react';
import StarWarsLoading from './StarWarsLoading';

interface DelayedLoadingProps {
  isLoading: boolean;
  onSkip: () => void;
}

const DelayedLoading: React.FC<DelayedLoadingProps> = ({ isLoading, onSkip }) => {
  const [componentLoaded, setComponentLoaded] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setComponentLoaded(true);
    }
  }, [isLoading]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (componentLoaded) {
      timeoutId = setTimeout(() => {
        onSkip();
      }, 60000); // 60 seconds
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [componentLoaded]);

  return (
    <>
      <StarWarsLoading onSkip={onSkip} showButton={!isLoading} />
    </>
  );
};

export default DelayedLoading; 