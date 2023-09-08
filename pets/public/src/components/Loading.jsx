import styles from "./styles/Loading.module.scss"

const Loading = () => {
    return (
        <div className={styles.cointainer}>
            <div className={styles.loader}></div>
        </div>
    )
}

export default Loading;