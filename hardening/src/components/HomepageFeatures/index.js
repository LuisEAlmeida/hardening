import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil de usar',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus fue diseñado desde cero para ser fácilmente instalado y utilizado para que su sitio web esté listo y funcionando rápidamente.
      </>
    ),
  },
  {
    title: 'Concéntrese en lo que importa',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus te permite concentrarte en tus documentos y nosotros nos encargaremos del resto. Sigue adelante y mueve tus documentos al directorio de <code>docs</code>.
      </>
    ),
  },
  {
    title: 'Desarrollado con React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Amplíe o personalice el diseño de su sitio web reutilizando React. Docusaurus se puede ampliar reutilizando el mismo encabezado y pie de página.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
