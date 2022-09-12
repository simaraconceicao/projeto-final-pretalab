import { useState } from 'react'
import contatoImg from '../../assets/home-img.svg'
import { ref, push, set } from 'firebase/database'
import { database } from '../../services/firebase'

import styles from './contact.module.css'

function Contact() {
  const [mensagem, setMensagem] = useState('')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  function handleInputValueMensagem(event) {
    setMensagem(event.target.value)
  }

  function handleInputValueNome(event) {
    setNome(event.target.value)
  }

  function handleInputValueEmail(event) {
    setEmail(event.target.value)
  }

  function handleCreateMessage(event) {
    event.preventDefault()
    const postListRef = ref(database, 'mensagens')
    const newPostRef = push(postListRef)
    set(newPostRef, {
      textMessage: mensagem,
      email: email,
      nome: nome
    })
    setMensagem('')
    setNome('')
    setEmail('')
  }

  return(
    <>
      <div className={styles.header}>
        <h1>
          Entre em contato
        </h1>
        <img src={contatoImg} />
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleCreateMessage} className={styles.form}>
          <input className={styles.formInput} placeholder="Digite sua nome" onChange={handleInputValueNome} value={nome} />
          <input className={styles.formInput} placeholder="Digite sua email" onChange={handleInputValueEmail} value={email} />
          <textarea className={styles.formTextArea} placeholder="Digite sua mensagem" onChange={handleInputValueMensagem} value={mensagem} />
          <button className={styles.formButton} type="submit">Enviar mensagem</button>
        </form>
      </div>
    </>
  )
}

export default Contact