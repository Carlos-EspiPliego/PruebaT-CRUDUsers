import { MainLayout } from "@layouts/MainLayout";

import { UserListTable } from "@components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "@store/slices/thunks";
import { AppDispatch } from "../../redux";

export const UserList = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <MainLayout titleText={"Lista de Usuarios"}>
      <UserListTable />
    </MainLayout>
  )
}
