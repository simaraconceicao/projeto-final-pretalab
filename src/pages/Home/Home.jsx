import styles from './home.module.css'
import homeImg from '../../assets/simarinha.webp'
import curriculoImg from '../../assets/curriculo.svg'
import portfolioImg from '../../assets/portfolio.svg'
import salarioImg from '../../assets/salario.svg'
import vagasImg from '../../assets/vagas.svg'

function Home() {
  return (
    <>
      <div className={styles.header}>
        <h1>
          Mentoria Quero Ser Dev
        </h1>
        <img src={homeImg} />
      </div>
      <div className={styles.subtitulo}>
        <p>Quer fazer migração de carreira e conquistar sua vaga como pessoa desenvolvedora? Aprenda comigo como migrar de carreira e se tornar uma dev front-end jr., com um passo a passo coerente, sem enrolação e com muita mão no código.</p>
      </div>
      <div className={styles.beneficios}>
    <section className={styles.content}>
      <div className={styles.cardsContainer}>
        <h2 className={styles.tituloCards}>Razões para se tornar uma pessoa desenvoledora</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img className={styles.imagemCard} src={vagasImg} />
            <div className={styles.textos}>
              <h3 className={styles.subtituloCard}>Vagas</h3>
              <p className={styles.texto}>Tecnologia é o mercado que mais cresce no mundo. Estima-se que até 2025, no Brasil, 800 mil vagas de pessoas desenvolvedoras não serão preenchidas por falta de pessoas qualificadas.</p>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.imagemCard} src={salarioImg} />
            <div className={styles.textos}>
              <h3 className={styles.subtituloCard}>Salários</h3>
              <p className={styles.texto}>Os salários e benefícios são muito atrativos chegando a valer mais do dobro do salário médio no Brasil, até para pessoas iniciantes ou estagiárias.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.content}>
      <div className={styles.cardsContainer}>
        <h2 className={styles.tituloCards}>Como a Mentoria Quero Ser Dev vai te ajudar</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img className={styles.imagemCard} src={curriculoImg} />
            <div className={styles.textos}>
              <h3 className={styles.subtituloCard}>Currículo</h3>
              <p className={styles.texto}>Vou te ensinar habilidades técnicas e comportamentais de uma dev iniciante. Desenhei um roadmap para que você possa se tornar uma pessoa desenvolvedora front-end iniciante. Te mostrarei como focar no que realmente importa estudar para sair do zero, sem enrolação.</p>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.imagemCard} src={portfolioImg} />
            <div className={styles.textos}>
              <h3 className={styles.subtituloCard}>Portfólio</h3>
              <p className={styles.texto}>Todos os módulos de habilidades técnicas da mentoria irão te ajudar a criar projetos para seu portfólio. Ao fim da mentoria você terá um portfólio robusto para chamar atenção das recrutadoras.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
    </>
  )
}

export default Home