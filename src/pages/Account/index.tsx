import React from "react";
import Header from "../../components/layout/Header";
import { Container } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Footer from "../../components/layout/Footer";

export default function Home() {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <Container>
      <Header />
      <p>{user.name}</p>
      <Footer />
    </Container>
  );
}
