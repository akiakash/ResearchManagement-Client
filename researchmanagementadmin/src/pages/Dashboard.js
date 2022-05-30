import React from "react";
import Efficiency from "../components/Efficiency";
import NavBar from "../components/NavBar";
import Tab from "../components/Tab";
import TopBar from "../components/TopBar";
import * as S from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StaffManagement from "components/Managements/StaffManagement";
import ScheduleManagement from "components/Managements/ScheduleManagement";
import MarksManagement from "components/Managements/MarksManagement";
import RequestsManagement from "components/Managements/RequestsManagement";
import DocumentManagement from "components/Managements/DocumentManagement";

export default function Dashboard() {
  return (
    <S.Container>
      <NavBar />
      <S.Main>
        <header>
          <TopBar />
          {/* <Tab /> */}
        </header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Efficiency />} />
            <Route path="/staffmanagement" element={<StaffManagement />} />
            <Route
              path="/schedulemanagement"
              element={<ScheduleManagement />}
            />
            <Route path="/marksmanagement" element={<MarksManagement />} />
            <Route
              path="/requestsmanagement"
              element={<RequestsManagement />}
            />
            <Route
              path="/documentmanagement"
              element={<DocumentManagement />}
            />
          </Routes>
        </BrowserRouter>
      </S.Main>
    </S.Container>
  );
}
