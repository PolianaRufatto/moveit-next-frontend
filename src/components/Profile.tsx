import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/polianarufatto.png" alt="Avatar Poliana Rufatto"/>
      <div>
        <strong>Poliana Rufatto</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 1
        </p>
      </div>
    </div>
  )
}