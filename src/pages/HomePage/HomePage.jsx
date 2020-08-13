import React from "react";

import Directory from "../../Components/directory/Directory";
import { HomePageContainer } from "./HomePageStyles";

const HomePage = () => {
  return (
    <HomePageContainer className="homepage">
      <Directory />
    </HomePageContainer>
  );
};
export default HomePage;
