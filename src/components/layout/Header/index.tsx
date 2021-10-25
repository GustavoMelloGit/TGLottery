import React from "react";
import ArrowedButton from "../../ui/ArrowedButton";
import { Container, HeaderContent, List } from "./styles";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { logOut } from "../../../store/auth";
import { Divider } from "../../ui/Divider";

export default function Header() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams<{ personId?: string }>();

  const { personId } = params;

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
          {location.pathname === `/account/${personId}` ? (
            <Link to="/home" className="link home">
              Home
            </Link>
          ) : (
            <Link to={`/account/${user.id}`} className="link li">
              Account
            </Link>
          )}
          <ArrowedButton text="Sair " className="li" onClick={handleExit} />
        </List>
      </HeaderContent>
      <Divider />
    </Container>
  );
}
