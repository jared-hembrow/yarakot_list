import Head from "next/head";
// components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// style
import styles from "@/styles/layout/Layout.module.css";
function Layout({ title, description, keywords, children }) {
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
      <Header />
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
