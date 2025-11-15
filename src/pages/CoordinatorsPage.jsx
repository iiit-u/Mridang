import React from "react";
import Coordinators from "../components/Coordinators";
import Divider from "../components/Divider";
import Footer from "../components/Footer";

function CoordinatorsPage() {
  return (
    <>
      <div className="pt-24"> {/* Adds padding so content isn't hidden by NavBar */}
        <Coordinators />
      </div>
      <Divider />
      <Footer />
    </>
  );
}

export default CoordinatorsPage;