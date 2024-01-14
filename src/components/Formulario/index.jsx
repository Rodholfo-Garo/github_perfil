import { useState, useEffect } from "react"

const Formulario = () => {
    // Criando um Estado => Para criar um estado no react, usamos a função useState
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');
    
    // useEffect - Quando um componente é renderizado, dizemos que ele foi montado. podemos condicionar esta execução, para isso, após a arrowFunction, colocamos uma virgula e executamos um Array.
    // Podemos ter varios useEffect no código com varias dependencias.
    // Podemos ter um useEffect apenas quando componente for inicializado(montado) e apenas quando ele for finalizado (desmontado)

    useEffect(() =>{
        //Este conteudo vai ser executado sempre que houver uma mudança no estado
        console.log('O estado nome Mudou');

        //Condiciona- Ele executa o blco apenas quando o nome for alterado.
    },[nome]);

    useEffect(() =>{
        console.log('O estado materiaA Mudou para: ' + materiaA);

        //Adicionamos varias dependencias para não ter que fazer um monte de cóigo
    },[materiaA, materiaB, materiaC])

    //Componente Montado
    //Podemos ter um useEffetec apenas quando o componente for inicializado (montado)
    useEffect(() =>{
        console.log('O componente iniciou');

        //Componente Desmontado
        return () =>{
            console.log('O componente Finalizou')
        }
        //O array fica vazio. Esta estrutura permite executar um determinado codigo quando este componente for encerrado(desmontado)
    },[]);

    //Conseguimos Alterar valores a partir de Funções
    const alteraNome = (evento) =>{
        // console.log(evento.target.value)
        // setNome(evento.target.value);
        //Acessar valor antigo - Util quando for trabalhar com lista(array), isso representa o conceito de imutabilidade no REACT.
        setNome(estadoAnterior =>{

            // console.log(estadoAnterior);
            //estadoAnterior = valorNovo
            return evento.target.value;
        })
    }


    const renderizarResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma /3 ;

        // console.log(soma);
        // console.log(media);

        if(media >= 7){
            return(
                <p>Olá {nome}, você foi Aprovado</p>
            )
        }else{
            return (
                <p>Olá {nome}, você não foi Aprovado</p>
            )
        }
    }

    return (
        <form>
            {/* Renderize listas */}

            <ul>
            {[1, 2, 3, 4, 5].map(item => (
                <li key={item}>{item}</li>
                // Conteudo retornado
            ))}
            </ul>



            {/* Armazenar os valore digitados no Campo
                O event.target.value => Passado como strign e por isso ele vai concatenar, para que ele soma, temos qe passar o parseInt
            */}

            {/* O React injeta impliciitamente o argumento na função, sem isso, seria: onChange={evento => alteraNome(e)} */}
            <input type="text"placeholder="Seu nome" onChange={alteraNome} />

            {/* Desestruturação Do Evento */}
            <input type="number" placeholder="Nota Materia A" onChange={({target}) =>setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota Materia B" onChange={evento =>setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota Materia C" onChange={evento =>setMateriaC(parseInt(evento.target.value))} />

            {renderizarResultado()}

            {/* <p>O aluno foi aprovado</p>
            {/* //Receber Valor - Fez a renderização dos valores e o GET de um forma automatica
            {materiaA}<br/>
            {materiaB}<br/>
            {materiaC} */}
        </form>
    )
}

export default Formulario