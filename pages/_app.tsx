import "../styles/globals.css";
import "../components/navbar/navbar.scss";
import "../styles/index.scss";
import "../components/container/container.scss";
import "../components/footer/footer.scss";
import "../components/bio/bio.scss";
import "../components/section/section.scss";
import "../components/contact/contact.scss";
import "../styles/projects.scss";
import "../components/project/project.scss";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
