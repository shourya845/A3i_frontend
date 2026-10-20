'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import styles from './login.module.css';

export default function LoginForm() {
  const [visible, setVisible] = useState(false);
  const [notice, setNotice] = useState('');
  const unavailable = () => setNotice('Account access is not connected yet. Please contact A3i for help.');

  return <main className={styles.page}>
    <Link className={styles.back} href="/"><ArrowLeft size={17} aria-hidden="true" /> Back to A3i</Link>
    <section className={styles.panel} aria-labelledby="login-title">
      <Link href="/" className={styles.brand} aria-label="A3i-Accel home">
        <Image src="/logo.png" alt="" width={36} height={36} /> A3i-Accel
      </Link>
      <h1 id="login-title">Login</h1>
      <p className={styles.intro}>Welcome back to A3i.</p>
      <form onSubmit={event => { event.preventDefault(); unavailable(); }} aria-describedby="login-availability">
        <label htmlFor="login-email">Email</label>
        <input id="login-email" type="email" autoComplete="username" placeholder="you@company.com" required />
        <label htmlFor="login-password">Password</label>
        <div className={styles.password}>
          <input id="login-password" type={visible ? 'text' : 'password'} autoComplete="current-password" placeholder="Enter your password" required />
          <button type="button" aria-label={visible ? 'Hide password' : 'Show password'} aria-pressed={visible} onClick={() => setVisible(!visible)}>{visible ? <EyeOff size={18} /> : <Eye size={18} />}</button>
        </div>
        <button type="button" className={styles.forgot} onClick={unavailable}>Forgot password?</button>
        <button type="submit" className={styles.submit}>Sign in</button>
      </form>
      <p className={styles.divider}>or continue with</p>
      <div className={styles.providers} aria-label="Social sign-in is not connected">
        {['Google', 'GitHub', 'Facebook'].map(provider => <button key={provider} type="button" disabled>{provider}</button>)}
      </div>
      <p className={styles.register}>New to A3i? <Link href="/contact">Request access</Link></p>
      <p id="login-availability" className={styles.availability}>Preview only. Sign-in is not connected; passwords are not sent or saved.</p>
      <p className={styles.notice} role="status">{notice}</p>
    </section>
  </main>;
}
