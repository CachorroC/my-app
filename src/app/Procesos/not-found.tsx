import typeface from '#@/styles/css/typeface.module.css';
import modal from '#@/styles/css/modal.module.css';
import SearchBar, {
  Search,
} from '#@/app/context-input-search';
import { getProcesos } from '../api/procesos/getProcesos';
export default async function NotFound() {
  const today = new Date();
  const curHr = today.getHours();
  const time = () => {
    if (curHr < 12) {
      const timesegment = 'este dia';
      return timesegment;
    }
    else if (curHr < 18) {
      const timesegment = 'la tarde';
      return timesegment;
    }
    else {
      const timesegment = 'la noche';
      return timesegment;
    }
  };
  return (
    <>
      <div className={modal.modal}>
        <div className={modal.content}>
          <div className={modal.header}>
            <span className="material-symbols-outlined">
              close
            </span>
            <h2 className={typeface.subtitle}>
              {'No se encuentra'}
            </h2>
          </div>
          <SearchBar />
          <div className={modal.body}>
            <p>{`Sentimos que tu consulta no hay podido ser resuelta en ${time()} de hoy.`}</p>
            <p>Some other text...</p>
          </div>
          <div className={modal.footer}>
            <h3>Modal Footer</h3>
            <Search procesos={await getProcesos()} />
          </div>
        </div>
      </div>
    </>
  );
}
