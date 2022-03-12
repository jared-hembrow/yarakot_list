/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from "next/app";
import "../styles/globals.css";

/**
 *
 * @param {JSX.Element} Component
 * @return {JSX.Element}
 */
function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
