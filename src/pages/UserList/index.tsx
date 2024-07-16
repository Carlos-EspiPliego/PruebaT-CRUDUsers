import { MainLayout } from "@layouts/MainLayout";

import { UserListTable } from "@components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "@store/slices/thunks";

export const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <MainLayout titleText={"Lista de Usuarios"}>
      <UserListTable />
    </MainLayout>
  )
}
