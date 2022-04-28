import { Outlet } from "remix";

import PageShell from "~/components/pages/secondPage/PageShell";
const screen = () => {
  return (
    <PageShell>
      <Outlet />
    </PageShell>
  );
};

export default screen;
