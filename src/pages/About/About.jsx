import videoImg from '../../assets/aula.png'
import fluxoImg from '../../assets/fluxo.png'
import styles from './about.module.css'

function About() {
  return (
    <>
      <div className={styles.header}>
        <h1>
          Aulas gravadas que irão te preparar para sua primeira experiência como dev
        </h1>
        <img src={videoImg} />
      </div>
      <div className={styles.subtitulo}>
        <img src={fluxoImg} />
        <p>Aprenda comigo as soft e hard skills ideais para te ajudar migrar de carreira e se tornar uma dev front-end jr. As aulas mostram um passo a passo coerente, sem enrolação e com muita mão no código.</p>
      </div>
      <div className={styles.containerSobre}>
        <div className={styles.tituloSobre}>
          Vem conhecer um pouquinho sobre quem é a criadora da Mentoria Quero Ser Dev.
          Saiba como me tornei desenvolvedora de software após os 30 anos e vindo de uma área completamente diferente.
        </div>
        <iframe src="https://www.youtube.com/embed/DJEuZPJ0QXA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
      </div>
    </>
  )
}

export default About