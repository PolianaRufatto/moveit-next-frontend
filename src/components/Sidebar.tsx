import styles from '../styles/components/Sidebar.module.css';
import { BiHomeAlt, BiAward } from 'react-icons/bi';

export function Sidebar() {
  return (
    <div className={styles.container}>
      <img src="icons/Logo.svg" alt="Logo move.it" />
      <div className={styles.menu}>
        <button type="button">
          <div></div>
          <BiHomeAlt size={32} />
        </button>
        <button type="button" disabled>
          <div></div>
          <BiAward size={32} />
        </button>
      </div>
    </div>
  )
}