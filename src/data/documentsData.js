import FinReport from "../assets/documents/reports/Фин отчет ALZHAN.pdf";
import Ustav from "../assets/documents/regulations/Устав_Фонда_Алжан.pdf";
import Koncep from "../assets/documents/regulations/КОНЦЕПЦИЯ ДЕЯТЕЛЬНОСТИ ОБЩЕСТВЕННОГО ФОНДА (1).docx";
import RudnyiLeague2025 from "../assets/documents/rules/ШЛ Алжан Рудный 24-25.pdf";
import AktobeLeague2024 from "../assets/documents/rules/ШЛ_Alzhan_2024_г._г._Актобе.pdf";
import HromtauLeague2024 from "../assets/documents/rules/ШЛ_Alzhan_2024_г._г._Хромтау.pdf";
import LisakovskLeague2025 from "../assets/documents/rules/ЩЛ Алжан Лисаковск 24-25.pdf";
import AksuRegulation2024 from "../assets/documents/rules/Положение Аксу 24г.pdf";
import AktobeRegulation2025 from "../assets/documents/rules/Положение Актобе 24-25г.pdf";
import LisakovskRegulation2025 from "../assets/documents/rules/Положение Лисаковск 24-25г.pdf";
import RudnyiRegulation2025 from "../assets/documents/rules/Положение Рудный 24-25г.pdf";
import SemeyRegulation2025 from "../assets/documents/rules/Положение Семей 24-25г.pdf";
import HromtauRegulation2025 from "../assets/documents/rules/Положение Хромтау 24-25г.pdf";
import RulesReglament2026 from "../assets/documents/rules/Регламент Школьной Лиги по баскетболу Alzhan  2025-2026.pdf";
import RulesAktobe2026 from "../assets/documents/rules/Положение Школьной Лиги по баскетболу Alzhan г. Актобе.pdf";
import RulesHromtau2026 from "../assets/documents/rules/Положение Школьной Лиги по баскетболу Alzhan г. Хромтау.pdf";
import RulesZhitikara2026 from "../assets/documents/rules/Положение_0001.pdf";
import RulesRudnyi2026 from "../assets/documents/rules/Положение Школьная Баскетбольная Лига «Alzhan» г. Рудный.pdf";
import RulesLisakovsk2026 from "../assets/documents/rules/Положение Лисаковск 25-26г. 2.pdf";
import Logotype from "../assets/documents/judges/Logotype.rar";

export const DOCUMENT_SEASONS = ["Все", "2024", "2025", "2026"];
export const DEFAULT_DOCUMENT_SEASON = "Все";
export const DEFAULT_DOCUMENT_CATEGORY_ID = "regulations";

export const DOCUMENT_CATEGORIES = [
  {
    id: "regulations",
    title: "Учредительные и регистрационные документы",
    items: [
      {
        id: "reg-1",
        title: "Устав Alzhan League",
        href: Ustav,
      },
      {
        id: "reg-2",
        title: "Концепция Деятельности Общественного Фонда",
        href: Koncep,
      },
      {
        id: "reg-3",
        title: "Принципы деятельности фонда",
        href: "#",
      },
    ],
  },
  {
    id: "rules",
    title: "Регламенты и положения игр",
    items: [
      {
        id: "rules-1",
        title: "Положение Школьной Лиги по баскетболу «Alzhan» Рудный",
        season: "2024-2025",
        href: RudnyiLeague2025,
      },
      {
        id: "rules-2",
        title: "Положение Школьной Лиги по баскетболу «Alzhan» Актобе",
        season: "2024",
        href: AktobeLeague2024,
      },
      {
        id: "rules-5",
        title: "Положение Школьной Лиги по баскетболу «Alzhan» Хромтау",
        season: "2024",
        href: HromtauLeague2024,
      },
      {
        id: "rules-6",
        title: "Положение Школьной Лиги по баскетболу «Alzhan» Лисаковск",
        season: "2024-2025",
        href: LisakovskLeague2025,
      },
      {
        id: "rules-7",
        title: "Положение Школьной Лиги по баскетболу «Alzhan» Аксу",
        season: "2024",
        href: AksuRegulation2024,
      },
      {
        id: "rules-8",
        title: "Положение Школьной Лиги по баскетболу «Alzhan» Актобе",
        season: "2024-2025",
        href: AktobeRegulation2025,
      },
      {
        id: "rules-9",
        title: "Положение Школьной Лиги по баскетболу «Alzhan» Лисаковск",
        season: "2024-2025",
        href: LisakovskRegulation2025,
      },
      {
        id: "rules-10",
        title: "Положение Школьной Лиги по баскетболу «Alzhan» Рудный",
        season: "2024-2025",
        href: RudnyiRegulation2025,
      },
      {
        id: "rules-11",
        title: "Положение Школьной Лиги по баскетболу «Alzhan» Семей",
        season: "2024-2025",
        href: SemeyRegulation2025,
      },
      {
        id: "rules-12",
        title: "Положение Школьной Лиги по баскетболу «Alzhan» Хромтау",
        season: "2024-2025",
        href: HromtauRegulation2025,
      },
      {
        id: "rules-13",
        title: "Положение Школьной Лиги по баскетболу Alzhan 2025-2026",
        season: "2025-2026",
        href: RulesReglament2026,
      },
      {
        id: "rules-14",
        title: "Положение Школьной Лиги по баскетболу Alzhan г. Актобе",
        season: "2025-2026",
        href: RulesAktobe2026,
      },
      {
        id: "rules-15",
        title: "Положение Школьной Лиги по баскетболу Alzhan г. Хромтау",
        season: "2025-2026",
        href: RulesHromtau2026,
      },
      {
        id: "rules-16",
        title: "Положение Школьная Баскетбольная Лига «Alzhan» г. Житикара",
        season: "2025-2026",
        href: RulesZhitikara2026,
      },
      {
        id: "rules-17",
        title: "Положение Школьная Баскетбольная Лига «Alzhan» г. Рудный",
        season: "2025-2026",
        href: RulesRudnyi2026,
      },
      {
        id: "rules-18",
        title: "Положение Школьная Баскетбольная Лига «Alzhan» г. Лисаковск",
        season: "2025-2026",
        href: RulesLisakovsk2026,
      },
    ],
  },
  {
    id: "judges",
    title: "Полиграфия и фирменный стиль",
    items: [
      {
        id: "judges-1",
        title: "Полиграфия и фирменный стиль",
        href: Logotype,
      },
    ],
  },
  {
    id: "reports",
    title: "Отчеты",
    items: [
      {
        id: "reports-1",
        title: "Финансовый отчет 2025 г.",
        href: FinReport,
      },
    ],
  },
];
