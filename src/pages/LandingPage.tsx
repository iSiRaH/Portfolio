import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Seo from "../components/Seo";

const LandingPage = () => {
  return (
    <>
      <Seo />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="app-shell">
        <Header />
        <main id="main-content" className="content-wrap">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
