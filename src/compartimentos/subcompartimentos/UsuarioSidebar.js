
function DescricaoUsuario(props) {
  let imagem = props.img
  let nomeUsuario = props.user
  let descricaoUsuario = props.name

  const usuario = [
    {imagem: "img/catanacomics.svg", 
    nomeUsuario: "catanacomics", 
    descricaoUsuario: "Catana"
  }
  ]
    
    return(
      usuario.map(user => 
        <div class="usuario">
          <img src={user.imagem} />
          <div class="texto">
            <strong>{user.nomeUsuario}</strong>
            {user.descricaoUsuario}
          </div>
        </div>)
    )
}
export default function UsuarioSidebar() {
    return (
        <DescricaoUsuario />
    )
}