import styles from './message.module.css'
export function Message({ props1 }) {
    return (
        <div className={styles.wrapper}>
            <h1>
                {props1}
            </h1>
        </div>
    );
}