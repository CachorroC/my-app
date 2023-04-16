import layout from '#@/styles/css/layout.module.css';
import typeface from '#@/styles/css/typeface.module.css';
import Link from 'next/link';
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from 'react';
import box from '#@/styles/css/box.module.css';
import { poiret } from './typeface';

type Card = {
  id: Key;
  title:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  content:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
};
export function Cardboard({ cards }: { cards: Card[] }) {
  const rows: any[] = [];
  cards.forEach((card) =>
    rows.push(
      <Card
        id={card.id}
        title={card.title}
        content={card.content}
      />,
    ),
  );
  return <div className={box.grid}>{rows}</div>;
}
export function Card<T extends string>(cardData: {
  id: Key;
  title:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  content:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  return (
    <div
      className={layout.card}
      key={cardData.id}>
      <h1 className={poiret.className}>{cardData.title}</h1>
      <p className={typeface.block}>{cardData.content}</p>
      <Link href={'/'}></Link>
    </div>
  );
}
