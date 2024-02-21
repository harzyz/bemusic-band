import styles from './button.module.css'

const Button = ({label}) => {
  return (
    <button className={styles.wrapper}>
      {label}
    </button>
  )
}

export default Button
