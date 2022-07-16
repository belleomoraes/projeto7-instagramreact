import UsuarioSidebar from "./subcompartimentos/UsuarioSidebar";
import Sugestoes from "./subcompartimentos/Sugestoes";
export default function Sidebar(){
    return (
        <div class="sidebar">
          <UsuarioSidebar/>

        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          <Sugestoes />

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    );
}