import { useEffect, useState } from "react";
import { useMtgame } from "../../hooks/useMtgame";
import DataViewPanel from "./DataViewPanel";
import TeamTable from "./TeamTable";

export default function TeamBoard({ tournament }) {
  const { useTournamentTableTeams } = useMtgame();
  const { data } = useTournamentTableTeams(tournament?.id);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 800 : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(max-width: 799px)");
    const apply = (event) => setIsMobile(event.matches);

    setIsMobile(media.matches);
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", apply);
      return () => media.removeEventListener("change", apply);
    }

    media.addListener(apply);
    return () => media.removeListener(apply);
  }, []);

  const rows = data?.length ? data : [];

  if (isMobile) {
    return <DataViewPanel data={rows} limit={30} title="Таблица команд" />;
  }

  return <TeamTable data={rows} limit={30} />;
}
