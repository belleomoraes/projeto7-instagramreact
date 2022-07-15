
function Stories(props) {
  return (
    <div class="story">
          <div class="imagem">
            <img src={props.img} />
          </div>
          <div class="usuario">
          {props.usuario}
          </div>
        </div>
  )
}

export default function BarraStories(){
    return (
      
        <div class="stories">
          <Stories img="img/9gag.svg" usuario="9gag"/>
          <Stories img="img/meowed.svg" usuario="meowed"/>
          <Stories img="img/barked.svg" usuario="barked"/>
          <Stories img="img/nathanwpylestrangeplanet.svg" usuario="nathanwpylestrangeplanet"/>
          <Stories img="img/wawawicomics.svg" usuario="wawawicomics"/>
          <Stories img="img/respondeai.svg" usuario="respondeai"/>
          <Stories img="img/filomoderna.svg" usuario="filomoderna"/>
          <Stories img="img/memeriagourmet.svg" usuario="fmemeriagourmet"/>

        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    )
}