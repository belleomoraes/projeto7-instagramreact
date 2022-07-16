function Usuario(props) {
  return (
    <div class="usuario">
      <img src={props.img} />
      meowed
    </div>
  );
}
export default function Topo() {
  return (
    <div class="topo">
      <Usuario img="img/meowed.svg" />
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}
