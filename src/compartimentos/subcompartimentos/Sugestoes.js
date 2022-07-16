const sugestoes = [
  {
    img: "img/bad.vibes.memes.svg",
    name: "bad.vibes.memes",
    descricao: "Segue você"
  },
  {
    img: "img/chibirdart.svg",
    name: "chibirdart",
    descricao: "Segue você"
  },
  {
    img: "img/razoesparaacreditar.svg",
    name: "razoesparaacreditar",
    descricao: "Novo no Instagram"
  },
  {
    img: "img/adorable_animals.svg",
    name: "adorable_animals",
    descricao: "Segue você"
  }
]

export default function Sugestoes() {
    return sugestoes.map(sugestao =>
      <div class="sugestao">
            <div class="usuario">
              <img src={sugestao.img} />
              <div class="texto">
                <div class="nome">{sugestao.name}</div>
                <div class="razao">{sugestao.descricao}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div> 
        
    )
}