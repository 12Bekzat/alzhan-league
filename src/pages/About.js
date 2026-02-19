import TeamSlider from "../components/TeamSlider";
import AboutBanner from "../components/AboutBanner";
import GeoMapImage from "../components/GeoMap";
import kzMap from "../assets/kz.svg";
import AlzhanFacts from "../components/StatsCount";
import AlzhanTimelineAuto from "../components/AlzhanTimelIneAuto";

const defaultPoints = [
  {
    id: "aktobe",
    name: "Актобе",
    x: 30, // % слева
    y: 42, // % сверху
    sponsor: "ERG Group",
    seasons: "2024, 2024/25",
    count: 50,
    link: "https://sun9-53.userapi.com/s/v1/if2/D5UkJXnyd_s98dOliBtAwnAnAAeizoUE0P659KGykQDIKtkQF4acenVfzT1fmZv744eW8GedO37GR862RvpqchXE.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=2560x0",
  },
  {
    id: "khromtau",
    name: "Хромтау",
    x: 37,
    y: 42,
    sponsor: "ERG Group",
    seasons: "2024, 2024/25",
    count: 21,
    link: "https://sun9-78.userapi.com/s/v1/if2/DQj0snbRZgLkxudQVjGX1QuWf6wUVENwDCr3mpyofp90VaMbquS4PXzJbFbvyp-X2TZDxZo2PMLDw8havoh2bVXH.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=2560x0",
  },
  {
    id: "lisakovsk",
    name: "Лисаковск",
    x: 42,
    y: 23,
    sponsor: "ERG Group",
    seasons: "2024, 2024/25",
    count: 36,
    link: "https://sun9-40.userapi.com/s/v1/if2/VE_EEC4JbzXfLh8SKpGVJNiqcLL-W8LHMfmdEt1g-f_AlnZXAcOuUs4ytv00WQFZgP7x0AUUFIYU53d8qLLz0q2j.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=2560x0",
  },
  {
    id: "rudny",
    name: "Рудный",
    x: 45,
    y: 27,
    sponsor: "ERG Group",
    seasons: "2024, 2024/25",
    count: 25,
    link: "https://sun9-50.userapi.com/s/v1/if2/BlyTiGL28XVrk32yTTYrJb93Uy4JeJ10JqTvCxizYvv4FyeUEFL9_c7A2Uy6MbNmd_kovWs7NPwdjLirlvp7x4dW.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=2560x0",
  },
  {
    id: "aksu",
    name: "Аксу",
    x: 72,
    y: 28,
    sponsor: "ERG Group",
    seasons: "2024, 2024/25",
    count: 31,
    link: "https://sun9-59.userapi.com/s/v1/if2/26PS6_miSodBPBqdGO_q5uDBG-pv6S30M0ZJ6JbdKktT3g2CLSSllVQ84Y1YV6vqLtre-4cQ4FOTsz4IEm2dSLAw.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=2560x0",
  },
  {
    id: "zhitikara",
    name: "Житикара",
    x: 38,
    y: 30,
    sponsor: "Kusto Group",
    seasons: "2025",
    count: 20,
  },
  {
    id: "semey",
    name: "Семей",
    x: 76,
    y: 35,
    sponsor: "Zhebe Logistic",
    seasons: "2024/25",
    link: "https://sun9-69.userapi.com/s/v1/if2/U6wA0SPDDr5N_oZb-piQJ-tU3KrcJPQphnjWL-GDmBiLTD5aJgWOB-zGOYk3bQ6JozeiOV4kFmP96jyKmHc0Obfr.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=2560x0",
  },
];

export default function About() {
  return (
    <>
      {/* <div className='history'>
            <div className='history__main'>
                <div className='history__title'>О нашем фонде</div>
                <div className='history__text'></div>
            </div>
        </div> */}
      <div className="docs-wrap" style={{ paddingBottom: 0 }}>
        <div className="docs-header">
          <div className="docs-breadcrumbs">
            Главная — <span>О лиге</span>
          </div>
        </div>
      </div>
      <AboutBanner />
      <section class="about-alzhan" id="about">
        <div class="about-alzhan__wrap">
          <h1 class="about-alzhan__title">О проекте</h1>

          <div class="about-alzhan__text">
            <p>
              Лига Alzhan зародилась в 2024 году: первый сезон прошёл с участием
              учеников 5–6 классов, в нём приняли участие ~700 детей и около 60
              команд. Формат включал отборочные турниры по городам, региональные
              финалы и первый Суперфинал (в Актобе) — это стало отправной точкой
              для дальнейшего развития.
            </p>
            <p>
              Во втором сезоне проект масштабировался: добавилась возрастная
              категория 7–8 классы, к географии подключились новые города, и
              общее число участников превысило 3000 человек (около 150 команд).
            </p>
          </div>
        </div>
      </section>

      <AlzhanFacts />

      <AlzhanTimelineAuto />

      <GeoMapImage mapSrc={kzMap} points={defaultPoints} />

      <TeamSlider />
    </>
  );
}
