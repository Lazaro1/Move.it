import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="http://github.com/Lazaro1.png" alt="Lázaro Lima" />
            <div>
                <strong>Lázaro Lima </strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
      
    );
}