
export default function Topo() {
  return (
    <div class="topo">
      <div class="usuario">
        <img src={post.topoImg} />
        {post.topoName}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}
