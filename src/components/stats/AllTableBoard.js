import { useEffect, useState } from "react";
import { useMtgame } from "../../hooks/useMtgame";
import DataViewPanelStats from "./DataViewPanelStats";
import TeamsStatsTable from "./TeamsStatsTable";

export default function AllTableBoard({ tournament }) {
  const { useBasketballStatistic } = useMtgame();
  const { data } = useBasketballStatistic({
    group_by: "team",
    tournament_id: tournament?.id,
  });
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
    return <DataViewPanelStats data={rows} limit={30} title="Статистика команд" />;
  }

  return <TeamsStatsTable data={rows} limit={30} />;
}
