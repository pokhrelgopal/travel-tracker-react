import AppNav from "./AppNav";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";
import styles from "./Sidebar.module.css";
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>&copy;Copyright pokhrelgopal</footer>
    </div>
  );
}
