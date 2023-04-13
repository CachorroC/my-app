import layout from "#@/styles/css/layout.module.css";
import typeface from "#@/styles/css/typeface.module.css";
import { Route } from "next";
import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import box from '#@/styles/css/box.module.css';
import { poiret } from './typeface';

type Card = {
  id: Key ; 
  title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; 

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
