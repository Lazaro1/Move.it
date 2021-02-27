import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){

    const {level} = useContext(ChallengesContext)

    return(
        <div className={styles.profileContainer}>
            <img src="http://github.com/Lazaro1.png" alt="Lázaro Lima" />
            <div>
                <strong>Lázaro Lima </strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
      
    );
}