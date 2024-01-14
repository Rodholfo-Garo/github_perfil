import { useState } from 'react';

import Perfil from './components/Perfil';
// import Formulario from './components/Formulario';
import ReposList from './components/ReposList';

function App() {
  //Condição para exibir ou não o Formulario 
  // const [formularioVisivel, setFormularioEstaVisivel] = useState(true);
  // Torna a renderização dinamica
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
      {/* Recebe o nome do Usuario */}
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)
      } />


{/* O React vai renderizar apenas quando o nome de suario for preenchido, sem isso, ele ja começa a leitura e quebra */}
      {nomeUsuario.length > 4 && (
        <>
        {/* Criamos a tag (Perfil), e dentro das tags(componentes) podemos receber propriedades, que nada mais é que atributo.*/}
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formularioVisivel &&(
      <Formulario/>
    )}

    <button onClick={() => setFormularioEstaVisivel(!formularioVisivel)} type='button'>toggle form</button> */}
    </>
  )
}

export default App
