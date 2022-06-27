import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGists } from "../store/gists";
import styles from "./pages.module.css";

export const GistsPage = () => {

  const dispatch = useDispatch();
  const { gists, error, pending } = useSelector((state) => state.gists);

  useEffect(() => {
    dispatch(getGists());
  }, [dispatch]);

  if (error) {
    return (
      <div className={styles.home}>
        <h1>error !!!!</h1>
        <button className={styles.btn} onClick={() => dispatch(getGists())}>Reload</button>
      </div>
    );
  }

  if (pending) {
    return (
      <div className={styles.home}>
        <h1>isLoading ....</h1>
        
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Gists page</h1>
     <div className={styles.info}>
      {gists.map((gist, index) => (
        <div key={index} className={styles.row}>
            {gist.description || (
              <span style={{ fontWeight: "bold" }}>no description</span>
            )}
        
        </div>
      ))}
      </div>
       <div className={styles.navs}>
      {Array.from({ length: 10 })
        .map((_, index) => index + 1)
        .map((item) => (
          <button className={styles.nav} onClick={() => dispatch(getGists(item))} key={item}>
            {item}
          </button>
        ))}
</div>
    </div>
  );
};
