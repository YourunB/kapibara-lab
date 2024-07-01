import React from "react";
import { PageMain } from "./pages/PageMain";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <PageMain />
      <Footer />
    </>
  );
};
