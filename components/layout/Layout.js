import { useContext } from "react";
import Head from "next/head";
// components
import AuthContext from "@/context/AuthContext";
import LanguageContext from "@/context/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Login from "@/components/layout/Login";
// style
import styles from "@/styles/layout/Layout.module.css";
function Layout({ title, description, keywords, children }) {
  const { user, login } = useContext(AuthContext);
  const { switchLanguage } = useContext(LanguageContext);
  if (!user) {
    return (
      <div className={styles["layout-container"]}>
        {/* Document Head */}

        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          {/* Samantic UI CSS */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
          />
        </Head>
        <Header switchLanguage={switchLanguage} />
        <div className={styles["app-container"]}>
          <Login login={login} />
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div className={styles["layout-container"]}>
      {/* Document Head */}

      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {/* Samantic UI CSS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
        />
      </Head>
      <Header switchLanguage={switchLanguage} />
      <div className={styles["app-container"]}>{children}</div>
      <Footer />
    </div>
  );
}
Layout.defaultProps = {
  title: "List App",
  description: "create lists",
  keywords: "list, veggies",
};
export default Layout;
