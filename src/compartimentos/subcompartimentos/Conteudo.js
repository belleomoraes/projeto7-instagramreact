
function DetalheConteudo(props) {
    return (
        <div class="conteudo">
        <img src={props.img} />
      </div>
    )
}

export default function Conteudo() {
    return (
        <DetalheConteudo img="img/gato-telefone.svg"/>
    )
}