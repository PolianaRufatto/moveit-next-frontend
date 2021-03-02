import { ImGithub, ImArrowRight2 } from 'react-icons/im';

import styles from '../styles/pages/Login.module.css';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useState } from 'react';

export default function Login() {
  const { push } = useRouter();

  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if(username) {
      push(`/${username}`);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | move.it</title>
      </Head>

      <div className={styles.content}>
        <img src="/icons/logo-moveit.svg" alt=""/>
        <strong>Bem-vindo</strong>

        <div className={styles.github}>
          <ImGithub size={36} />
          <span>Faça login com seu Github para começar</span>
        </div>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required placeholder="Digite seu username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">
            <ImArrowRight2 size={24} />
          </button>
        </form>
      </div>
    </div>
  )
}