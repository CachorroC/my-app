import layout from "#@/styles/css/layout.module.css";
import typeface from "#@/styles/css/typeface.module.css";

export default function Card({
  title,
  content,
  id,
}: {
    title: string;
    content: string;
    id: number;
}) {
  return (
    <div className={layout.card} key={id}>
      <h1 className={typeface.title}>{title}</h1>
      <p className={typeface.block}>{content}</p>
    </div>
  );
}
