// import "./list.css";
import Item from "./components/Item";
import { data } from "./data";
import style from "./list.module.css";

export default function List() {
  return (
    <>
      <h3 className={style.title}>Items Listed for Sale</h3>
      <div className={style.container}>
        {data.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
