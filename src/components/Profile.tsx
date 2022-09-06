import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  
  return (
    <div className={styles.profileContainer} >
      <img src="http://github.com/walfredocarneiro.png" alt="Walfredo Carneiro"/>
      <div>
        <strong>Walfredo Carneiro</strong>
        <p>
          <img src="/icons/level.svg" alt="Level" />
          { level } </p>
      </div>
    </div>
  );
}