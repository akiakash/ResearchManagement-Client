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
import AddResponse from "components/Managements/RequestEdit/AddResponse";
import ViewStaffs from "components/Managements/Staffs/ViewStaffs";
import EditStaff from "components/Managements/Staffs/EditStaff";
import ViewSchedule from "components/Managements/Schedule/ViewSchedule";
import EditSchedule from "components/Managements/Schedule/EditSchedule";
import ViewMarks from "components/Managements/Marks/ViewMarks";
import EditMarks from "components/Managements/Marks/EditMarks";
import StudentManagement from "components/Managements/StudentManagement";
import ViewStudents from "components/Managements/Student/ViewStudents";
import EditStudent from "components/Managements/Student/EditStudent";

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
            <Route path="/studentmanagement" element={<StudentManagement />} />
            <Route path="/AddResponse" element={<AddResponse />} />
            <Route path="/allstaffs" element={<ViewStaffs />} />
            <Route path="/editStaff" element={<EditStaff />} />
            <Route path="/viewSchedule" element={<ViewSchedule />} />
            <Route path="/editSchedule" element={<EditSchedule />} />
            <Route path="/viewmarks" element={<ViewMarks />} />
            <Route path="/editMarks" element={<EditMarks />} />
            <Route path="/viewstudents" element={<ViewStudents />} />
            <Route path="/editstudent" element={<EditStudent />} />
          </Routes>
        </BrowserRouter>
      </S.Main>
    </S.Container>
  );
}
