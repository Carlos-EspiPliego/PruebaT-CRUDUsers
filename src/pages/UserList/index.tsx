import { MainLayout } from "@layouts/MainLayout";

import { UserListTable } from "@components";

export const UserList = () => {
  return (
    <MainLayout titleText={"Lista de Usuarios"}>
      <UserListTable />
    </MainLayout>
  )
}
