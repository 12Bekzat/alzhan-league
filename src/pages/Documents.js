import React from "react";
import DocumentsPanel from "../components/DocumentsPanel";
import FinReport from '../assets/Фин отчет ALZHAN.pdf'
import Ustav from '../assets/Устав_Фонда_Алжан.pdf'
import Koncep from '../assets/КОНЦЕПЦИЯ ДЕЯТЕЛЬНОСТИ ОБЩЕСТВЕННОГО ФОНДА (1).docx'
import RudnyiLeague2025 from '../assets/ШЛ Алжан Рудный 24-25.pdf'
import AktobeLeague2024 from '../assets/ШЛ_Alzhan_2024_г._г._Актобе.pdf'
import LisakovskLeague2024 from '../assets/ШЛ_Alzhan_2024_г._г._Лисаковск,_Октябрьский.pdf'
import RudnyiLeague2024 from '../assets/ШЛ_Alzhan_2024_г._г._Рудный.pdf'
import HromtauLeague2024 from '../assets/ШЛ_Alzhan_2024_г._г._Хромтау.pdf'
import LisakovskLeague2025 from '../assets/ЩЛ Алжан Лисаковск 24-25.pdf'
import AksuRegulation2024 from '../assets/Положение Аксу 24г.pdf'
import AktobeRegulation2025 from '../assets/Положение Актобе 24-25г.pdf'
import LisakovskRegulation2025 from '../assets/Положение Лисаковск 24-25г.pdf'
import RudnyiRegulation2025 from '../assets/Положение Рудный 24-25г.pdf'
import SemeyRegulation2025 from '../assets/Положение Семей 24-25г.pdf'
import HromtauRegulation2025 from '../assets/Положение Хромтау 24-25г.pdf'
import Logotype from '../assets/Logotype.rar'

export default function Documents() {
  const CATEGORIES = [
    {
      id: "regulations",
      title: "Учредительные и регистрационные документы",
      items: [
        {
          id: "r1",
          title: "Устав Alzhan League",
          href: Ustav,
        },
        {
          id: "r1",
          title: "Концепция Деятельности Общественного Фонда",
          href: Koncep,
        },
        {
          id: "r1",
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
          id: "r1",
          title: "Регламент Школьной Лиги по баскетболу «Alzhan» Рудный",
          season: "2024-2025",
          href: RudnyiLeague2025,
        },
        {
          id: "r2",
          title: "Регламент Школьной Лиги по баскетболу «Alzhan» Актобе",
          season: "2024",
          href: AktobeLeague2024,
        },
        {
          id: "r3",
          title: "Регламент Школьной Лиги по баскетболу «Alzhan» Лисаковск",
          season: "2024",
          href: LisakovskLeague2024,
        },
        {
          id: "r4",
          title: "Регламент Школьной Лиги по баскетболу «Alzhan» Рудный",
          season: "2024",
          href: RudnyiLeague2024,
        },
        {
          id: "r5",
          title: "Регламент Школьной Лиги по баскетболу «Alzhan» Хромтау",
          season: "2024",
          href: HromtauLeague2024,
        },
        {
          id: "r6",
          title: "Регламент Школьной Лиги по баскетболу «Alzhan» Лисаковск",
          season: "2024-2025",
          href: LisakovskLeague2025,
        },
        {
          id: "r7",
          title: "Регламент Школьной Лиги по баскетболу «Alzhan» Аксу",
          season: "2024",
          href: AksuRegulation2024,
        },
        {
          id: "r8",
          title: "Регламент Школьной Лиги по баскетболу «Alzhan» Актобе",
          season: "2024-2025",
          href: AktobeRegulation2025,
        },
        {
          id: "r9",
          title: "Регламент Школьной Лиги по баскетболу «Alzhan» Лисаковск",
          season: "2024-2025",
          href: LisakovskRegulation2025,
        },
        {
          id: "r10",
          title: "Регламент Школьной Лиги по баскетболу «Alzhan» Рудный",
          season: "2024-2025",
          href: RudnyiRegulation2025,
        },
        {
          id: "r11",
          title: "Регламент Школьной Лиги по баскетболу «Alzhan» Семей",
          season: "2024-2025",
          href: SemeyRegulation2025,
        },
        {
          id: "r12",
          title: "Регламент Школьной Лиги по баскетболу «Alzhan» Хромтау",
          season: "2024-2025",
          href: HromtauRegulation2025,
        },
      ],
    },
    { id: "judges", title: "Полиграфия и фирменный стиль ", items: [
      {
          id: "r1",
          title: "Полиграфия и фирменный стиль",
          href: Logotype,
        },
    ] },
    { id: "reports", title: "Отчеты", items: [
      {
          id: "r1",
          title: "Фин отчет ALZHAN",
          href: FinReport,
        },
    ] },
  ];

  return (
    <div className="container">
      <DocumentsPanel
        seasons={['Все', "2024", "2024-2025"]}
        defaultSeason="2024-2025"
        categories={CATEGORIES}
        defaultCategoryId="regulations"
      />
    </div>
  );
}

