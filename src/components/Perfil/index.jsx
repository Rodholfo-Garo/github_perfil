import styles from './Perfil.module.css'

const Perfil = ({ nomeUsuario}) => {
    
    return (
        <header className={styles.header}>
            {/* Recuperaa imagem com tamplete String */}
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`}></img>
            <h1  className={styles.name}>
                {nomeUsuario}
                </h1>
        </header>
    )
}
export default Perfil

