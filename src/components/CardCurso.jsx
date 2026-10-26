function CardCurso({ nome, descricao }) {
return (
<article className="card-curso">
<h2>{nome}</h2>
<p>{descricao}</p>
</article>
);
}
export default CardCurso;