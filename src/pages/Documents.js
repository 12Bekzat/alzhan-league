import React from "react";
import DocumentsPanel from "../components/DocumentsPanel";

export default function Documents() {
  const CATEGORIES = [
    {
      id: "regulations",
      title: "Учредительные и регистрационные документы",
      items: [
        {
          id: "r1",
          title: "Устав Alzhan League",
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
          href: "#",
        },
        {
          id: "r2",
          title: "Регламент Школьной Лиги по баскетболу «Alzhan» Актобе",
          season: "2024",
          href: "#",
        },
        {
          id: "r3",
          title: "Регламент Школьной Лиги по баскетболу «Alzhan» Лисаковск",
          season: "2024",
          href: "#",
        },
        {
          id: "r4",
          title: "Регламент Школьной Лиги по баскетболу «Alzhan» Рудный",
          season: "2024",
          href: "#",
        },
        {
          id: "r5",
          title: "Регламент Школьной Лиги по баскетболу «Alzhan» Хромтау",
          season: "2024",
          href: "#",
        },
        {
          id: "r6",
          title: "Регламент Школьной Лиги по баскетболу «Alzhan» Лисаковск",
          season: "2024-2025",
          href: "#",
        },
        {
          id: "r7",
          title: "Регламент Школьной Лиги по баскетболу «Alzhan» Аксу",
          season: "2024",
          href: "#",
        },
        {
          id: "r8",
          title: "Регламент Школьной Лиги по баскетболу «Alzhan» Актобе",
          season: "2024-2025",
          href: "#",
        },
        {
          id: "r9",
          title: "Регламент Школьной Лиги по баскетболу «Alzhan» Лисаковск",
          season: "2024-2025",
          href: "#",
        },
        {
          id: "r10",
          title: "Регламент Школьной Лиги по баскетболу «Alzhan» Рудный",
          season: "2024-2025",
          href: "#",
        },
        {
          id: "r11",
          title: "Регламент Школьной Лиги по баскетболу «Alzhan» Семей",
          season: "2024-2025",
          href: "#",
        },
        {
          id: "r12",
          title: "Регламент Школьной Лиги по баскетболу «Alzhan» Хромтау",
          season: "2024-2025",
          href: "#",
        },
      ],
    },
    { id: "judges", title: "Полиграфия и фирменный стиль ", items: [] },
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
