import Subdivisao from "./Subdivisao";
import styles from '../styles/Linha.module.scss'
export default function Linha (props){
    return (
        <div className={styles.linha}>
            <Subdivisao escura = {props.escura} />
            <Subdivisao escura = {!props.escura} />
            <Subdivisao escura = {props.escura} />
            <Subdivisao escura = {!props.escura} />
            <Subdivisao escura = {props.escura} />
            <Subdivisao escura = {!props.escura} />
            <Subdivisao escura = {props.escura} />
            <Subdivisao escura = {!props.escura} />
        </div>
    )
}