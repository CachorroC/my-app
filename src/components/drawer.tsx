import layout from '#@/styles/css/layout.module.css';
import typeface from '#@/styles/css/typeface.module.css';
import { Item } from '../lib/links';
export default function Drawer({
  items,
  title,
  children,
}: {
  items: Item[];
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button
          onClick={() => setIsActive(true)}
          type="button">
          <span className="material-symbols-outlined">
            show
          </span>
        </button>
      )}
    </div>
  );
}
