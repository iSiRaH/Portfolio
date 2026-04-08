import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="app-shell">
      <Header />
      <main className="content-wrap">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
