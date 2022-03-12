import styles from '../styles/Subdivisao.module.scss'
export default function Subdivisao(props){
    return(
        <div 
            style = {{
                backgroundColor: props.escura ? "#12356a" : "#fff"
            }}
            className={styles.subdivisao}
        >

        </div>
    )
}