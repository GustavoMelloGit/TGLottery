import React from "react";
import ArrowedButton from "../../ui/ArrowedButton";
import { Container, HeaderContent, List } from "./styles";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { logOut } from "../../../store/auth";
import { Divider } from "../../ui/Divider";

export default function Header() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const location = useLocation();

  function handleExit() {
    dispatch(logOut());
  }
  return (
    <Container>
      <HeaderContent>
        <Link to="/home" className="link h1">
          TGL
        </Link>
        <List>
          {location.pathname === `/account/${user.id}` ? (
            <Link to="/home" className="link home">
              Home
            </Link>
          ) : (
            <Link to={`/account/${user.id}`} className="link li">
              Account
            </Link>
          )}
          <ArrowedButton text="Log out " className="li" onClick={handleExit} />
        </List>
      </HeaderContent>
      <Divider />
    </Container>
  );
}
