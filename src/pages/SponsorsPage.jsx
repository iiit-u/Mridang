import React from "react";
import Sponsors from "../components/Sponsors";
import Divider from "../components/Divider";
import Footer from "../components/Footer";

function SponsorsPage() {
  return (
    <>
      <div className="pt-24"> {/* Adds padding so content isn't hidden by NavBar */}
        <Sponsors />
      </div>
      <Divider />
      <Footer />
    </>
  );
}

export default SponsorsPage;