import './style.css'
import { useState } from 'react'

export default function Home() {
  const ligthMode = 'modo-claro'
  const darkMode = 'modo-escuro'

  const [changeStyle, setChangeStyle] = useState(false)

  const changeTheme = () => {
    setChangeStyle(!changeStyle)
  }

  return (
    <div className={changeStyle ? darkMode : ligthMode}>
      <header>
        <div className="limite-container">
          <img src="./assets/barbearia-logo.png" alt="logomarca" />

          <button
            onClick={changeTheme}
            className={changeStyle ? darkMode : ligthMode}
          >
            <img
              className="icon-button"
              src={changeStyle ? './assets/sun.png' : './assets/moon.png'}
              alt={changeStyle ? 'Icone Lua' : 'Icone Sol'}
              title={changeStyle ? 'Modo Claro' : 'Modo Escuro'}
            />
            {changeStyle ? 'Ligth' : 'Dark'}
          </button>
        </div>
      </header>
      <main>
        <section className="banner-barber-shop"></section>
        <section className="barber-shop-text">
          <div className="limite-container">
            <h1>Bem-vindo a Barber Shop</h1>
            <p className="primeiro-paragrafo">
              Nossa barbearia sempre oferece profissionais de qualidade e
              estamos prontos para lidar com suas maiores expectativas.
            </p>
            <p className="segundo-paragrafo">
              Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos
              uma equipe premiada que demonstrou o talento de mestres barbeiros
              em vários concursos de estilo. Deixe nosso barbeiro ser seu
              estilista pessoal e você nunca ficará desapontado.
            </p>
            <p className="assinatura">S. Kelly</p>
          </div>
        </section>
      </main>
    </div>
  )
}
