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
          title: "Алжан Рудный 2024-2025",
          href: "#",
        },
        {
          id: "r2",
          title: "Алжан Актобе 2024",
          href: "#",
        },
        {
          id: "r3",
          title: "Алжан Лисаковск Октябрский 2024",
          href: "#",
        },
        {
          id: "r4",
          title: "Алжан Рудный 2024",
          href: "#",
        },
        {
          id: "r5",
          title: "Алжан Хромтау 2024",
          href: "#",
        },
        {
          id: "r6",
          title: "Алжан Лисаковск 2024-2025",
          href: "#",
        },
        {
          id: "r7",
          title: "Положение Аксу 2024",
          href: "#",
        },
        {
          id: "r8",
          title: "Положение Актобе 2024-2025",
          href: "#",
        },
        {
          id: "r9",
          title: "Положение Лисаковск 2024-2025",
          href: "#",
        },
        {
          id: "r10",
          title: "Положение Рудный 2024-2025",
          href: "#",
        },
        {
          id: "r11",
          title: "Положение Семей 2024-2025",
          href: "#",
        },
        {
          id: "r12",
          title: "Положение Хромтау 2024-2025",
          href: "#",
        },
      ],
    },
    { id: "judges", title: "Полиграфия и фирменный стиль ", items: [] },
  ];

  return (
    <div className="container">
      <DocumentsPanel
        seasons={["2025-2026", "2024-2025"]}
        defaultSeason="2025-2026"
        categories={CATEGORIES}
        defaultCategoryId="regulations"
      />
    </div>
  );
}
