import Link from 'next/link'
import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.navMain}>
      <div className={styles.navMenu}>
        <Link href='/'>
          <p>Home</p>
        </Link>
        <Link href='/market'>
          <p>중고 마켓</p>
        </Link>
        <Link href='/login'>
          <p>로그인</p>
        </Link>
      </div>
    </div>
  )
}

export default Header