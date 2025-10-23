export function QuoteHero({
  photo,
  alt = "Шакиров Марат",
  objectFit = "cover",
}) {
  const text = (
    <>
      <p>Здесь в лиге Alzhan мы растим чемпионов! </p>
      <p>Для кого-то из ребят баскетбол станет дорогой в большой спорт.</p>
      <p>
        Но даже если они не выйдут на профессиональную арену, каждый из них
        уйдёт отсюда с тем, что важнее побед — с характером.{" "}
      </p>
      <p>
        Лига учит не сдаваться, быть частью команды, бороться честно и идти до
        конца. И именно такое поколение — сильное, целеустремлённое, со стержнем
        внутри — мы вместе с нашими партнёрами создаём сегодня
      </p>
    </>
  );

  const author = (
    <div className="qh__author">
      Шакиров Марат, директор Школьной баскетбольной лиги «Alzhan»
    </div>
  );

  return (
    <section className="qh" aria-label="Цитата директора лиги">
      <div className="qh__container">
        <div className="qh__inner">
          <div className="qh__media">
            <img src={photo} alt={alt} style={{ objectFit }} />
          </div>
          <div className="qh__content">
            <div className="qh__quoteMark" aria-hidden>
              “
            </div>
            <div className="qh__text">{text}</div>
            {author}
          </div>
        </div>
      </div>
    </section>
  );
}
