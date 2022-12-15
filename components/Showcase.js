import React from 'react'
import styles from "./Showcase.module.scss"
import Paragraph from "./Paragraph"
import Heading from './Heading'
import Container from './Container'
import Buttons from './Buttons'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles);


const Showcase = ({title, cta, halfHeight, description, backgroundImage = "/images/dishes.jpeg"
}) => {
let showcaseClasses = cx({
    showcase: true,
    "half-height": halfHeight
});
  return (
    <section className={showcaseClasses} style={{backgroundImage: `url(${backgroundImage})`}}>
        <Container>
            {title && 
                <Heading level="2" marginBottom="1" >{title}</Heading>
            }
            {
                description &&
                <Paragraph marginBottom="1">{description}</Paragraph>
            }
            {
                cta &&
                <Buttons label={cta}/>
            }
        </Container>
    </section>
  )
}

export default Showcase