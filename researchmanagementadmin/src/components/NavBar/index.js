import React from "react";
import * as S from "./styles";
import Calendar from "../../assets/icons/calendar-nav.png";
import Message from "../../assets/icons/message.png";
import Time from "../../assets/icons/time.png";
import User from "../../assets/icons/user.png";
import Shape from "../../assets/icons/shape.png";
import Arrow from "../../assets/icons/arrow-right.png";
import ArrowDown from "../../assets/icons/arrow-down-nav.png";

export default function NavBar() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Profile>
          <S.ProfileImg></S.ProfileImg>
          <S.ProfileInfo></S.ProfileInfo>
        </S.Profile>
        <S.List>
          <S.ListItem>
            <S.Item href="#">
              <S.ItemIcon src={User} alt="user" />
              Admin
            </S.Item>
            <img src={Arrow} alt="arrow" />
          </S.ListItem>
          <S.ListItem>
            <S.Item href="/staffmanagement">
              <S.ItemIcon src={Shape} alt="shape" />
              Staff Management
            </S.Item>
            <img src={Arrow} alt="arrow" />
          </S.ListItem>
          <S.ListItem>
            <S.Item href="/schedulemanagement">
              <S.ItemIcon src={Shape} alt="shape" />
              Schedule Management
            </S.Item>
            <img src={Arrow} alt="arrow" />
          </S.ListItem>
          <S.ListItem>
            <S.Item href="/marksmanagement">
              <S.ItemIcon src={Calendar} alt="calendar" />
              Marks Management
            </S.Item>
            <img src={Arrow} alt="arrow" />
          </S.ListItem>
          <S.ListItem>
            <S.Item href="/requestsmanagement">
              <S.ItemIcon src={Time} alt="time" />
              Requests Management
            </S.Item>
            <img src={Arrow} alt="arrow" />
          </S.ListItem>
          <S.ListItem>
            <S.Item href="/documentmanagement">
              <S.ItemIcon src={Time} alt="time" />
              Document Management
            </S.Item>
            <img src={Arrow} alt="arrow" />
          </S.ListItem>
        </S.List>
      </S.Container>
    </S.Wrapper>
  );
}
