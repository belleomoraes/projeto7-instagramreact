const cadaStory = [
  {
    img: "img/9gag.svg",
    usuario: "9gag",
  },
  {
    img: "img/meowed.svg",
    usuario: "meowed",
  },
  {
    img: "img/barked.svg",
    usuario: "barked",
  },
  {
    img: "img/nathanwpylestrangeplanet.svg",
    usuario: "nathanwpylestrangeplanet",
  },
  {
    img: "img/wawawicomics.svg",
    usuario: "wawawicomics",
  },
  {
    img: "img/respondeai.svg",
    usuario: "respondeai",
  },
  {
    img: "img/filomoderna.svg",
    usuario: "filomoderna",
  },
  {
    img: "img/memeriagourmet.svg",
    usuario: "fmemeriagourmet",
  },
];


export default function Stories() {
  return cadaStory.map(story => 
    <div class="story">
    <div class="imagem">
      <img src={story.img} />
    </div>
    <div class="usuario">{story.usuario}</div>
  </div>
  );
}
