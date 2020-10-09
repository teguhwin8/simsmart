import Styles from '../styles/Logo.module.css'

export default function Logo() {
  return (
    <div className={Styles.logo}>
      <img src="/logo.png" alt=""/>
    </div>
  )
}