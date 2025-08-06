// src/pages/ProjectsPage.jsx
import React, { useState } from "react";
import { Gallery } from "../components/Gallery";

const mockProjects = [
  {
    title: "Чемпионат Алматы U18",
    year: 2024,
    region: "Алматы",
    category: "U18",
    description:
      "Цель — развитие молодёжного баскетбола. Участники: 12 команд. Победители: Almaty Falcons.",
    media: {
      photo: "https://source.unsplash.com/400x200/?basketball,court",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  },
  {
    title: "Республиканский форум спорта и образования",
    year: 2023,
    region: "Нур-Султан",
    category: "18+",
    description:
      "Обсуждение интеграции спорта в образовательные инициативы. Более 300 участников.",
    media: {
      photo: "https://source.unsplash.com/400x200/?conference,sport",
    },
  },
  {
    title: "Турнир в Шымкенте",
    year: 2025,
    region: "Шымкент",
    category: "U16",
    description:
      "Соревнования среди 8 школьных команд. Победители: Shymkent Lions.",
    media: {
      photo: "https://source.unsplash.com/400x200/?basketball,team",
    },
  },
];

export default function Projects() {
  const [filters, setFilters] = useState({ year: "", title: "" });

  const years = [...new Set(mockProjects.map((p) => p.year.toString()))];
  const titles = [...new Set(mockProjects.map((p) => p.title))];

  const filtered = mockProjects.filter((p) => {
    return (
      (!filters.year || p.year.toString() === filters.year) &&
      (!filters.title || p.title === filters.title)
    );
  });

  const archivePhotos = [
    "https://media.riamo.ru/get_resized/n2DD7NNnl8ztcFCpc3bn2iGH09w=/1920x1080/filters:rs(fill-down):format(webp)/YXJ0aWNsZXMvaW1hZ2UvMjAyNS80L2FydGljbGVzaW1hZ2UyMDI1NGN3bWdnaml5eG53LXZpend4ZzMuanBn.webp",
    "https://sportnews.az/storage/photos/2025/05/24/8749df12-83c9-4747-be1e-47190cf45716.webp",
    "https://kamyanske.com.ua/wp-content/uploads/2025/07/img_52884-3.jpg",
    "https://sportilinet.kz/userdata/news/news_4142/image_m.webp?1740422702",
    "https://media.riamo.ru/get_resized/n2DD7NNnl8ztcFCpc3bn2iGH09w=/1920x1080/filters:rs(fill-down):format(webp)/YXJ0aWNsZXMvaW1hZ2UvMjAyNS80L2FydGljbGVzaW1hZ2UyMDI1NGN3bWdnaml5eG53LXZpend4ZzMuanBn.webp",
  ];

  return (
    <div className="game-stats-page">
      <div className="container">
        <h1 className="main-title">Проекты и мероприятия</h1>

        <div className="filters">
          <select
            value={filters.year}
            onChange={(e) => setFilters({ ...filters, year: e.target.value })}
          >
            <option value="">Все годы</option>
            {years.map((y, i) => (
              <option key={i} value={y}>
                {y}
              </option>
            ))}
          </select>

          <select
            value={filters.title}
            onChange={(e) => setFilters({ ...filters, title: e.target.value })}
          >
            <option value="">Все мероприятия</option>
            {titles.map((t, i) => (
              <option key={i} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => (
            <div key={i} className="project-card">
              <img
                src='https://kamyanske.com.ua/wp-content/uploads/2025/07/img_52884-3.jpg'
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-meta">
                  {project.year} • {project.region} • {project.category}
                </p>
                <p className="project-description">{project.description}</p>
                {project.media.video && (
                  <div className="project-video">
                    <iframe
                      src={project.media.video}
                      title="Видеоотчёт"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <Gallery  images={archivePhotos}/>
      </div>
    </div>
  );
}
