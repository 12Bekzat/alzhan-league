import React from "react";

function telHref(phone) {
  if (!phone) return "#";
  const digits = phone.replace(/[^\d+]/g, "");
  return `tel:${digits}`;
}

export default function RegionalRepresentatives({
  title = "Региональные представители",
  items = [], // [{ region, manager, phone, email }]
  className = "",
}) {
  return (
    <section className={`rr-panel ${className}`}>
      <h3 className="rr-title">{title}</h3>

      <div className="rr-table-wrap">
        <table className="rr-table" role="table">
          <thead>
            <tr>
              <th scope="col">Регион</th>
              <th scope="col">Менеджер</th>
              <th scope="col">Телефон</th>
            </tr>
          </thead>

          <tbody>
            {items.map((r, i) => (
              <tr key={i}>
                <td data-label="Регион">{r.region}</td>
                <td data-label="Менеджер">{r.manager}</td>
                <td data-label="Телефон">
                  {r.phone ? (
                    <a className="rr-link" href={telHref(r.phone)}>{r.phone}</a>
                  ) : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
