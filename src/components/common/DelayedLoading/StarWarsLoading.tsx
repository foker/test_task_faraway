import React from 'react';
import styles from './StarWarsLoading.module.scss';

interface StarWarsLoadingProps {
  onSkip?: () => void;
  showButton: boolean;
}

const StarWarsLoading: React.FC<StarWarsLoadingProps> = ({ onSkip, showButton = false }) => {
  return (
    <div className={styles.loadingContainer} data-testid="star-wars-loading">
      <div className={styles.fade}></div>
      <section className={styles.starWars}>
        <div className={styles.crawl}>
          <div className={styles.title}>
            <p>Episode X</p>
            <h1>THE TEST OF <s>FAR</s>FARAWAY</h1>
          </div>
          
          <p>Turmoil has gripped the Frontend Order.</p>
          <p>Across the galaxy, developers of the</p>
          <p>Empire received a sacred challenge —</p>
          <p>the Faraway test assignment.</p>
          
          <p>In hidden repos, Jedi Engineers gathered.</p>
          <p>United by TypeScript and caffeine,</p>
          <p>they faced ancient bugs and treacherous</p>
          <p>legacy code, determined to prove their worth.</p>

          <p>Led by wise mentors of the Dev Council,</p>
          <p>they fought the devious Jabba Script,</p>
          <p>defeated the sinister army of cloneNode,</p>
          <p>and revived broken APIs thought long lost.</p>

          <p>With git push --The-Force, they</p>
          <p>deployed hope into production...</p>

          <p>But even as lints passed and tests turned green,</p>
          <p>a final trial awaited — one darker than</p>
          <p>any merge conflict before...</p>

          <p>The Code Review.</p>
        </div>
      </section>
      {showButton && (
        <button className={styles.skipButton} onClick={onSkip}>
          Skip Preview
        </button>
      )}
    </div>
  );
};

export default StarWarsLoading; 