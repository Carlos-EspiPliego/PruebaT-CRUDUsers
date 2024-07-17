import { MainLayout } from "@layouts/MainLayout";

import { UserListTable } from "@components/UserListTable";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "@store/slices/thunks";
import { AppDispatch } from "@store/store";

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
