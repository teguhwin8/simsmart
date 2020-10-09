import Link from 'next/link'
import Styles from '../styles/Sidebar.module.css'
import { AiOutlineDashboard, AiOutlineSolution, AiOutlineAudit } from 'react-icons/ai'
import Logo from './logo'

export default function Sidebar() {
  return (
    <div>
      
      <ul className={Styles.sidebar}>
        <Logo />
        <li className={Styles.sidebarList}>
          <Link href="/">
            <a className={Styles.sidebarLink}><AiOutlineDashboard /> Dashboard</a>
          </Link>
        </li>
        <li className={Styles.sidebarList}>
          <a href="#subMenuAdministrasi" className={Styles.sidebarLink}><AiOutlineSolution /> ADMINISTRASI</a>
          <ul className={Styles.sidebarChild}>
            <li className={Styles.sidebarChildList}>
              <Link href="/ppdb">
                <a className={Styles.sidebarLink}><AiOutlineAudit /> PPDB</a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}