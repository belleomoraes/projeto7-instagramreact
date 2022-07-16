function DetalheCurtida(props) {
    return (
        <div class="curtidas">
        <img src={props.img}/>
        <div class="texto">
          Curtido por <strong>{props.user}</strong> e <strong>outras {props.num} pessoas</strong>
        </div>
        </div>
    );
  }

export default function Curtidas() {
  return (
    <DetalheCurtida img = "img/respondeai.svg" user="respondeai" num="101.523"/>
  );
}
