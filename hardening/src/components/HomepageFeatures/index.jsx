import React, { useState } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { useHistory } from '@docusaurus/router';

// Componente individual para cada feature (clickeable)
function Feature({ Svg, title, description, url }) {
  const history = useHistory();
  const SvgComponent = typeof Svg === 'object' ? Object.values(Svg)[0] : Svg;

  const handleClick = () => {
    if (url) {
      history.push(url);
    }
  };

  return (
    <div className={clsx(styles.featureCard)} onClick={handleClick} role="button" tabIndex={0}>
      <div className={styles.featureIcon}>
        {SvgComponent && <SvgComponent className={styles.featureSvg} role="img" />}
      </div>
      <div className={styles.featureContent}>
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures({ features = [] }) {
  const totalFeatures = features.length;

  if (totalFeatures === 0) {
    return <p className={styles.noFeaturesMessage}>No hay features disponibles</p>;
  }

  if (totalFeatures <= 4) {
    const colSize = 12 / totalFeatures;
    return (
      <section className={styles.features}>
        <div className="container">
          <div className="row" style={{ justifyContent: 'center' }}>
            {features.map((feature, idx) => (
              <div key={idx} className={`col col--${colSize} text--center`}>
                <Feature {...feature} />
              </div>
            ))}
          </div> 
        </div>
      </section>
    );
  } else {
    // Si hay más de 4 elementos, se usa un carrusel
    const [currentIndex, setCurrentIndex] = useState(0);

    const visibleFeatures = [];
    for (let i = 0; i < 4; i++) {
      visibleFeatures.push(features[(currentIndex + i) % totalFeatures]);
    }

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalFeatures) % totalFeatures);
    };

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalFeatures);
    };

    return (
      <section className={styles.features}>
        <div className="container">
          <div className="carousel">
            <button className={styles.carouselButton} onClick={handlePrev}>
              ‹
            </button>
            <div className="row">
              {visibleFeatures.map((feature, idx) => (
                <div key={idx} className="col col--3 text--center">
                  <Feature {...feature} />
                </div>
              ))}
            </div>
            <button className={styles.carouselButton} onClick={handleNext}>
              ›
            </button>
          </div>
        </div>
      </section>
    );
  }
}
