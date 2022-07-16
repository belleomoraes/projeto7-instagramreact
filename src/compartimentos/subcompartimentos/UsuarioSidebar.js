function DescricaoUsuario(props) {
    return(
        <div class="usuario">
          <img src={props.img} />
          <div class="texto">
            <strong>{props.user}</strong>
            {props.name}
          </div>
        </div>
    )
}
export default function UsuarioSidebar() {
    return (
        <DescricaoUsuario img="img/catanacomics.svg" user="catanacomics" name="Catana"/>
    )
}