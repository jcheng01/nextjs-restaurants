import React from 'react'
import Container from './Container'
import Paragraph from './Paragraph'
import styles from "./Footer.module.scss"


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Paragraph>Built By Justin Cheng</Paragraph>
      </Container>
    </footer>
  )
}

export default Footer