
import React from "react";
const cadaPost = [
  {
      topoImg: "img/meowed.svg",
      topoName: "meowed",
      conteudoImg: "img/gato-telefone.svg",
      curtidasImg:"img/respondeai.svg",
      curtidasUser:"respondeai",
      curtidasNum:"101.523"
  },
  {
      topoImg: "img/barked.svg",
      topoName: "barked",
      conteudoImg: "img/dog.svg",
      curtidasImg:"img/adorable_animals.svg",
      curtidasUser:"adorable_animals",
      curtidasNum:"99.159"
  }
]

export default function Post() {
  const [colorHeart, setColorHeart] = React.useState("dislike")
  const [filledHeart, setFilledHeart] = React.useState("heart-outline")
  const [contador, setContador] = React.useState(0)

 
  function curtir (){
    console.log("1: vc vai curtir")
    setContador(1)

    if (contador === 0) {
    console.log("2: entrou no contador 0")
    console.log(contador)
    setFilledHeart("heart")
    setColorHeart("like md hydrated")
    } else {
    console.log("3: entrou no contador 1")
    console.log(contador)
    setFilledHeart("heart-outline")
    setColorHeart("dislike md hydrated")
    setContador(0)
    }

    
  }
return cadaPost.map(post =>
    <div class="post">
  <div class="topo">
          <div class="usuario">
            <img src={post.topoImg}/>
            {post.topoName} 
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
        <img src={post.conteudoImg} onClick = {curtir}/>
      </div>
      <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon name={filledHeart} class={colorHeart}
          onClick = {curtir}></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src={post.curtidasImg} />
        <div class="texto">
          Curtido por <strong>{post.curtidasUser}</strong> e <strong>outras {post.curtidasNum} pessoas</strong>
        </div>
      </div>
    </div>
    </div>


);
}