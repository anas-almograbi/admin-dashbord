import type { Metadata } from "next";
import NavBar from "../ui/dashbord/navbar/NavBar";
import SideBar from "../ui/dashbord/sidebar/SideBar";
import styles from "../ui/dashbord/dashbord.module.css";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
      <div className={styles.menue}>
        <SideBar />
      </div>
      <div className={styles.content}>
        <NavBar />
        {children}
      </div>
    </div>
  );
}
{
}
