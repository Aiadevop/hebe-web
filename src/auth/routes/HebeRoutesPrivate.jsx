import { Navigate, Route, Routes } from "react-router-dom"
import { Nav } from "../../ui/index.js"
import { AdminPanel } from "../../admin/pages/AdminPanel.jsx"
import { UserPanel } from "../../admin/pages/UserPanel.jsx"
import {
  GetUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
  CreateActivity,
  GetActivity, UpdateActivity,
  DeleteActivity,
  GetSchedule,
  CreateSchedule,
  UpdateSchedule,
  DeleteSchedule,
  CreateUserinSchedule,
  DeleteUsertoSchedule,
  DeleteUsertoDiary,
  SearchUser,
  SearchActivity,
  SearchSchedule
}
  from "../../admin/pages/AdminPages/index.js"

export const HebeRoutesPrivate = () => {
  return (
    <>

      <Nav />
      <Routes>
        <Route path="/auth" element={<Navigate to="/login" />}></Route>
        <Route path="userpanel" element={<UserPanel />}></Route>
        <Route path="adminpanel" element={<AdminPanel />}></Route>
        {/* Rutas user */}
        <Route path="getUser" element={<GetUser />}></Route>
        <Route path="createUser" element={<CreateUser />}></Route>
        <Route path="updateUser" element={<UpdateUser />}></Route>
        <Route path="deleteUser" element={<DeleteUser />}></Route>
        {/* Rutas Activity */}
        <Route path="getActivity" element={<GetActivity />}></Route>
        <Route path="createActivity" element={<CreateActivity />}></Route>
        <Route path="updateActivity" element={<UpdateActivity />}></Route>
        <Route path="deleteActivity" element={<DeleteActivity />}></Route>
        {/* Rutas Schedule*/}
        <Route path="getSchedule" element={<GetSchedule />}></Route>
        <Route path="createSchedule" element={<CreateSchedule />}></Route>
        <Route path="updateSchedule" element={<UpdateSchedule />}></Route>
        <Route path="deleteSchedule" element={<DeleteSchedule />}></Route>
        {/* Rutas Diary */}
        <Route path="createUserinSchedule" element={<CreateUserinSchedule />}></Route>
        <Route path="deleteUsertoSchedule" element={<DeleteUsertoSchedule />}></Route>
        <Route path="deleteUsertoDiary" element={<DeleteUsertoDiary />}></Route>
        {/* Rutas Searches */}
        <Route path="searchUser" element={<SearchUser />}></Route>
        <Route path="searchActivity" element={<SearchActivity />}></Route>
        <Route path="searchSchedule" element={<SearchSchedule />}></Route>

      </Routes>
    </>
  )
}
