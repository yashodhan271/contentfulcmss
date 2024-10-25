'use client' // Error components must be Client Components

import Hero from '@/components/organisms/Hero/Hero'
import styles from '@/styles/404.module.scss';
import Button from '@/components/atoms/Button/Button';

export default function Error() {
  return (
    <div className={styles.notFound}>
      <Hero typeOfHero="Blankhero" title="" />
      <h2>We can’t find the page you’re looking for
      </h2>
      <Button text="Go to homepage" url="/" />
    </div>
  )
}