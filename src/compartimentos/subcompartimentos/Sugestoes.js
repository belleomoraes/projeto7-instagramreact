function DescricaoSugestoes(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
              <img src={props.img} />
              <div class="texto">
                <div class="nome">{props.name}</div>
                <div class="razao">{props.descricao}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div> 
    )
}
export default function Sugestoes() {
    return (
        <DescricaoSugestoes img="img/bad.vibes.memes.svg" name="bad.vibes.memes" descricao="Segue você"/>
    )
}