import { useEffect, useState } from "react";
import styles from './ReposList.module.css'

const ReposList = ({nomeUsuario}) => {
    //Estado para armazenar a lista de repositorio
    const [repos, setRepos] = useState([]);
    //Fazer feedBack de carregamento
    const [estaCarregando, setEstaCarregando]= useState(true);

    useEffect(() => {
        setEstaCarregando(true)
        //Chamar fatchAPI, qu faz a requisição no JS
        // Passamos o nome do Usario para o App tb
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`).then(res => res.json())
            .then(resJson => {
                //Simula o reflex na demora da requisição na renderização do do conteudo
                setTimeout(() => {

                    setEstaCarregando(false);
                    //Vai deixar de estar carregando quando tivermos o setRepos
                    setRepos(resJson);
                }, 3000)
            })

// Diz ao React que le vai executar o conteudo do useEffect quando houver algma mudança no nome do usuario.
    }, [nomeUsuario]);

    return (

        <div className="container">
        {/*Mesagem para demora no carregamento.  O H1 será renderizado apenas quando o estaCarregando for true */}
        {estaCarregando ? (
            <h1>Carregando...</h1>
        ) : (
        <ul className={styles.list}>
            {/* {repos.map(repositorio => ( */}
            {repos.map(({id, name, language, html_url}) =>(
                <li className={styles.listItem} key={id}>
                    <div className={styles.itemName}>
                        <b>Nome</b>
                        {name}
                    </div>

                    <div className={styles.itemLanguage}>
                    <b>Liguagem</b>
                    {language}
                    </div>
                    {/* Quando o Atributo HTML for preenchiido com conteudo dinamico, temos que usar as chaves */}
                    <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                </li>
            ))}
        </ul>
        )}
        </div>
    )
}

export default ReposList;