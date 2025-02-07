import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import docusaurusMountain from '@site/static/img/undraw_docusaurus_mountain.svg';
import time from '@site/static/img/undraw_time-management_fedt.svg';
import dev from '@site/static/img/undraw_developer-activity_dn7p.svg';
import about from '@site/static/img/undraw_about-me_5990.svg';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const featuresData = [
  {
    Svg: { dev }, // Un icono SVG representando la feature
    title: 'Hardeniza los servidores',
    description: 'Asegura y fortalece tus servidores aplicando las mejores prácticas de hardening. Conoce nuestro instructivo paso a paso para minimizar vulnerabilidades y proteger tus sistemas contra amenazas cibernéticas.',
    url: '/hardening/docs/documentacion/ejemplos/ejemplo1',
  },
  {
    Svg: { time }, // Un icono SVG representando la feature
    title: 'Descubre cómo optimizamos',
    description: 'Entiende cómo desarrollamos este proyecto e incorporamos soluciones innovadoras para agilizar la configuración de servidores.',
    url: '/hardening/docs/documentacion/ficha-ejecutiva/resumen-ejecutivo',
  },

  {
    Svg: { about }, // Un icono SVG representando la feature
    title: 'Conoce al equipo: Las mentes detrás del proyecto',
    description: 'Descubre a las personas que hacen posible este proyecto. Conoce sus perfiles, experiencia.',
    url: '/hardening/blog/cis_b_enchmarks',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures features={featuresData} />
      </main>
    </Layout>
  );
}
