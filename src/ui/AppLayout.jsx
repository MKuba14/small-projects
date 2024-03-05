import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 16.6rem;
  height: 100vh;
`;

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Main>
        <Outlet />
      </Main>

      <Sidebar />
    </StyledAppLayout>
  );
}

export default AppLayout;
