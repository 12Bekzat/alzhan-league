// src/pages/ProjectsPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Gallery } from "../components/Gallery";
import MatchCard from "../components/MatchCard";
import Pagination from "../components/Pagination";
import vkGalleryDemo from "../data/vkGalleryDemo.json";
import streamsData from "../data/streams";


export default function Projects() {
  const [activeProject, setActiveProject] = useState("gallery");
  const [galleryFilter, setGalleryFilter] = useState("all");
  const [streamPage, setStreamPage] = useState(1);
  const [streamFilters, setStreamFilters] = useState({
    season: "",
    city: "",
    query: "",
    sort: "newest",
  });
  const streamsPerPage = 8;

  const parsePublishedDate = (project) => {
    const rawIso = String(project?.publishedAt || "").trim();
    if (rawIso) {
      const isoDate = new Date(rawIso);
      if (!Number.isNaN(isoDate.getTime())) {
        return isoDate;
      }
    }

    const rawDate = String(project?.publishedDate || "").trim();
    if (!rawDate) return null;

    const parts = rawDate.split(".").map((value) => Number(value));
    if (parts.length !== 3 || parts.some((value) => Number.isNaN(value))) {
      return null;
    }

    const [day, month, year] = parts;
    const parsedDate = new Date(year, month - 1, day);
    return Number.isNaN(parsedDate.getTime()) ? null : parsedDate;
  };

  const streamSeasonOptions = useMemo(() => {
    const options = [...new Set(
      streamsData
        .map((project) => String(project?.season || "").trim())
        .filter(Boolean)
    )];

    return options.sort((left, right) => {
      const leftYear = Number(String(left).match(/\d{4}/)?.[0] || 0);
      const rightYear = Number(String(right).match(/\d{4}/)?.[0] || 0);
      if (leftYear === rightYear) {
        return String(right).localeCompare(String(left), "ru");
      }
      return rightYear - leftYear;
    });
  }, []);

  const streamCityOptions = useMemo(() => {
    const options = [...new Set(
      streamsData
        .map((project) => String(project?.city || "").trim())
        .filter(Boolean)
    )];

    return options.sort((left, right) => left.localeCompare(right, "ru"));
  }, []);

  const archivePhotos = [
    {
      "title": "Фотографии со страницы сообщества",
      "imageUrl": "https://sun9-81.userapi.com/impg/2K9hf7TSnGKH839yAgbxuHr19EMynjAUEsew9g/rYn3KqiuRnM.jpg?size=604x604&quality=95&sign=c6f6d522f6448c5d20495b23f8a00475&type=album",
      "additionalStyle": { width: '50%' },
    },
    {
      "title": "08.06.25 | Летний Кубок, Любительская лига | г. Алматы",
      "imageUrl": "https://sun9-56.userapi.com/s/v1/if2/jCPviPqrx88pxdxaqOyOnl7B6AHIrbS_rd2tIcDzJea817w6sI0N-aT-QY99E2aOU-Il7Pj8NJsnV3Y8EmEBTO81.jpg?quality=95&as=32x20,48x31,72x46,108x69,160x102,240x153,360x229,480x306,540x344,640x408,720x459,1080x688,1280x816,1440x918,2560x1632&from=bu&cs=540x0"
    },
    {
      "title": "07.06.25 | Летний Кубок, Любительская лига | г. Алматы",
      "imageUrl": "https://sun9-42.userapi.com/s/v1/if2/qxwFlIml7BU6UZMIu7RWO_62YwdFqq22HimlotZk-7UKWGwQzBfRKi6ZxjEQA3FRSsf9x6Te_kESP_2u24mhnxVj.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "06.06.25 | Летний Кубок, Любительская лига | г. Алматы",
      "imageUrl": "https://sun9-11.userapi.com/s/v1/ig2/Uo9-YXBVWyn6NE0Gwp9LhY85swAUyJiTXral0cdM-vtniNsAn34_kHNN2rCjxRV7ETLU5yK-xGgyf-SjH4j8KV7y.jpg?quality=95&as=32x39,48x59,72x89,108x133,160x197,240x295,360x443,480x590,540x664,640x787,720x885,1080x1328,1280x1574,1440x1771,2082x2560&from=bu&cs=540x0"
    },
    {
      "title": "11.05.25 | ШЛ “Alzhan” Суперфинал День 3 | г. Хромтау",
      "imageUrl": "https://sun9-14.userapi.com/s/v1/if2/2SzoQ-MUt1Pl7pRyH8PK2VkuXiBOcN9rfr6tnj8kPtI1YJMzXYbhIdDFdrFiMkfL2Ply8gzIA4i6-VVh1alxJ2gN.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "11.05.25 | ШЛ “Alzhan” Суперфинал День 3 | г. Хромтау",
      "imageUrl": "https://sun9-83.userapi.com/s/v1/ig2/k4riI0fGizGWcvBxlOTz9AbYX_2-nvSqErq9MfQ1MiPXl7FR6WP0xbWukLOlmOE826ukx5TApSc4ZTRsWAWXAxXO.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620&from=bu&cs=540x0"
    },
    {
      "title": "10.05.25 | ШЛ “Alzhan” Суперфинал День 2 | г. Хромтау",
      "imageUrl": "https://sun9-3.userapi.com/s/v1/if2/dffU3C3w4IJ5PzXphHucPJsZggwKAGvuqhNT0tXyOBl7vw14rjXAS2yvQtoKlJSvCK7ggZ1ez61zsOWZXdZ9F9xH.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "10.05.25 | ШЛ “Alzhan” Суперфинал День 2 | г. Хромтау",
      "imageUrl": "https://sun9-78.userapi.com/s/v1/ig2/zvacRw50UrDnYce_i8_J8ixvvcU2zXKFskYBZHh4jpsEr3b4JHst7A94Pd-l8qjTVF0LDWJgE7i84EZ2SH53ca3l.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620&from=bu&cs=540x0"
    },
    {
      "title": "09.05.25 | ШЛ “Alzhan” Суперфинал День 1 | г. Хромтау",
      "imageUrl": "https://sun9-75.userapi.com/s/v1/ig2/pF31-9ECaorgrLOhWVz3-FwvTE6p2VzBKk2Aay2HPOMxZc6exOlae5eDFRxCW00Fn4pATYzpPT_L2Sh8d_MhyO4Z.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1621,1280x1921,1440x2161,1706x2560&from=bu&cs=540x0"
    },
    {
      "title": "20.04.2025 Финал ШЛ \"Alzhan\" г.Семей",
      "imageUrl": "https://sun9-16.userapi.com/s/v1/if2/xHsge9DAvlJD1RIdNz1FnffGdq3qXGmzNumaAb7M9sFVU2yILIEyg3iz6cpZJysOKlLufF18jXtb7Ki6paaHHQZS.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "19.04.25 | ШЛ «Alzhan» финал г. Аксу",
      "imageUrl": "https://sun9-19.userapi.com/s/v1/if2/bO3DVOqQTq9jVYtjBzlDbSFFxIeazi9ftadKMRYX6RmbaDuZiTGn3Dc2k-MbzinTVRFqn3dgH0EUrQ0KB0wRbkiw.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,1920x1280&from=bu&cs=540x0"
    },
    {
      "title": "19.04.2025 ШЛ \"Alzhan\" г.Семей",
      "imageUrl": "https://sun9-44.userapi.com/s/v1/ig2/U4YmaW5Je0rEu7q9A8H7PEXRB2_E0as1pbRHMOcQIJcVAQQcOEsRpF2VsuQTHbDQE7kX4NJAQlDwzpetDwz7rfLJ.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "г.Рудный суперфинал 2025 Рудный Лисаковск",
      "imageUrl": "https://sun9-43.userapi.com/s/v1/ig2/D2NqS7iTLODjUBKiDN8ryu1XDyEuE5eJBnEfESBhsQZ7F5qwNnaJ7-iHu_EBjG1BAOfKfsjyCD9tYkATMMbUX-ht.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "19.04.25 | ШЛ «Alzhan» Региональный финал г. Аксу",
      "imageUrl": "https://sun9-80.userapi.com/s/v1/if2/TgDg5izLkJyEMPO8tDmewGW4rfbRTPKGfMzRNjjiBuJmUBIolrXMr6FoUsrRYYgfk0d75RrRMFAgwY8dcpT_yqQc.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "13.04.25 | ШЛ «Alzhan» Региональный финал г. Рудный",
      "imageUrl": "https://sun9-13.userapi.com/s/v1/if2/_lAR01p0qFctqk3BWxxk4cBGrimRHsK4AbGNN9cZ7HnnHfmsPAKLZuY9n6h5F_eXv0i52IPOVFR2u9jbzQajnHR_.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "12.04.25 | ШЛ «Alzhan» Региональный финал г. Лисаковск",
      "imageUrl": "https://sun9-39.userapi.com/s/v1/ig2/ylSJUGob1mBBHizOWg4fpbTDZDSff5YeKgmXG-_f9lHON4l-GiSmcbDoyJOWd7E07J85JxxFEo_lzbvpJwA2AeEc.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "12.04.25 | ШЛ «Alzhan» Региональный финал г.Лисаковск",
      "imageUrl": "https://sun9-57.userapi.com/s/v1/if2/Cfy33T-b6Uh8AywQa31Q8OUU8hIKjqwjOFmK-BkAJfjTgm7Qugw6OsL9BdxqKDuEOqFYVPEp3vGLs_7R_tVNxrWm.jpg?quality=95&as=32x23,48x34,72x52,108x77,160x114,240x172,360x258,480x343,540x386,640x458,720x515,1080x773,1280x916,1440x1030,2400x1717&from=bu&cs=540x0"
    },
    {
      "title": "ФИНАЛ 2025| ШЛ “Alzhan” г.Рудный",
      "imageUrl": "https://sun9-19.userapi.com/s/v1/ig2/UOzUap_iF793qcWeOOdUtJvHbqxeohbXLfUvk9Gd7dZLP1YpU20WQDJmCBppGzS8HoKI0g69EFDaP0HngtnLHNDU.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "13.04.2025 ШЛ \"Alzhan\" г.Аксу",
      "imageUrl": "https://sun9-87.userapi.com/s/v1/ig2/nUGJkK6eEZ1QUR6fcWEIhcgTKuYgvxF1bdw1ZI2N8inwvOG6vsm1G5SlsUsS7_dvFhGCM4jlOG426CG0wJbizXJp.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920&from=bu&cs=540x0"
    },
    {
      "title": "06.04.2025 ШЛ \"Alzhan\" г.Семей",
      "imageUrl": "https://sun9-16.userapi.com/s/v1/if2/37oxNiWTzG0pt65NdIqsLEXYTxzjUJhSmlkzTwqwyYQpnySEnTPbnvz9W0_fjcXq27A5O_CWHKv8vUTYN9Xa9_cY.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "05.04.2025 ШЛ \"Alzhan\" г. Семей",
      "imageUrl": "https://sun9-40.userapi.com/s/v1/if2/Bc6Szy3Ap-6HnyqIwbLiG50h219huArhKm4w236XCd4irtAg3VHcp5RfQDCCZ5qP4fbUnS8Ymvfvi-I3tjQ21Xcx.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "06.04.2025 | ШЛ «Alzhan» Региональный финал г. Актобе",
      "imageUrl": "https://sun9-8.userapi.com/s/v1/if2/D5UkJXnyd_s98dOliBtAwnAnAAeizoUE0P659KGykQDIKtkQF4acenVfzT1fmZv744eW8GedO37GR862RvpqchXE.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "ШБЛ \"Alzhan-Final\" Г.Актобе 06.04.2025",
      "imageUrl": "https://sun9-37.userapi.com/s/v1/if2/bqDJ1KaFPV8Vq-EwrTBbVxOzR3-s97XtNPUyTgVmNW3OYZMmPdfLJiWGlsi5s3QaxfsdpadyEu_9Lq-R_ENF6qO5.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x321,540x361,640x427,720x481,1080x721,1280x855,1440x962,2560x1710&from=bu&cs=540x0"
    },
    {
      "title": "06.04.25 | ШЛ “Alzhan” г.Рудный",
      "imageUrl": "https://sun9-56.userapi.com/s/v1/ig2/E31dK0FOTnf1UXkNO_DbmIh8bR__HMMFClmMzd0dCLFipMnW2QsiqgBIYPZjqBoIIsYV5mLcWOO-_WCRa9wqK_NI.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "05.04.25 | ШЛ «Alzhan” г.Лисаковск",
      "imageUrl": "https://sun9-39.userapi.com/s/v1/if2/pBJVV6k91bTDmVLYtvHehTEkaOkvGdUOnfpjAA8xnzldTvqpwQ7hlGC94oo9xl42sMFcccGOVAnAs5zp96_TRjve.jpg?quality=95&as=32x22,48x32,72x49,108x73,160x108,240x162,360x243,480x324,540x364,640x432,720x486,1080x729,1280x863,1440x971,2400x1619&from=bu&cs=540x0"
    },
    {
      "title": "06.04.25 | ШЛ \"Alzhan\" г.Аксу",
      "imageUrl": "https://sun9-9.userapi.com/s/v1/ig2/FV3QKi0WH416dqeVTYR-27Z_vLEknQW3za3RwM3bVYZNlI1BuCZQLnuG6iixGf2BfcZ1mHFaULfGVeAKcx8ZVYsC.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920&from=bu&cs=540x0"
    },
    {
      "title": "05.04.2025 | ШЛ «Alzhan» Региональный финал г. Хромтау",
      "imageUrl": "https://sun9-1.userapi.com/s/v1/if2/_uOFJVfdZP9kGL13Y6gC_TmMcsn2imGp2i2ap3NixhqESM94eASY7WA2U0RDl1vHP46L2F9YtawynoJXaQFwoRzl.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x426,720x480,1080x720,1280x853,1440x960,2560x1706&from=bu&cs=540x0"
    },
    {
      "title": "05.04.25 | ШЛ “Alzhan” г.Рудный",
      "imageUrl": "https://sun9-33.userapi.com/s/v1/ig2/zTtSL1340ZSyLSPf-rJjBh2m16xBIYNef-kSy5a9Q6fDvel_ILb8BPeZT7GpgmRQRu46UvMtyEMK2zVv4I8AcoCV.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "30.05.25 | ШЛ “Alzhan” г. Хромтау",
      "imageUrl": "https://sun9-49.userapi.com/s/v1/ig2/fXPPS2FbBU3kOs9K-vmg11lGlY649B7DPD83gpvbHcazL63K00_zfpZCbPZTLT40GPJX_rGh97a1qDzzpM80H9co.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620&from=bu&cs=540x0"
    },
    {
      "title": "30.03.2025 ШЛ \"Alzhan\" г.Семей",
      "imageUrl": "https://sun9-9.userapi.com/s/v1/if2/xgk6fSCmQlJ-ET2OZaXBEYBFy0rlMI9Cz3GPAM0yQgnImcL8342qGJ-6lFLgvSiH1TZ45sI0dap_C9cogzTkIxpq.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "29.03.2025 ШЛ \"Alzhan\" г. Семей",
      "imageUrl": "https://sun9-52.userapi.com/s/v1/if2/auu_3WKq1oiprjCr-I5EqxKz0Fwi1LuFZsB_dW2-_iidzKbW8rB4dq9uvahm2mjgTiPzo79Z0aEdnZcMsHa9K0IY.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "30.03.2025 ШБЛ”Alzhan” Г.Актобе",
      "imageUrl": "https://sun9-45.userapi.com/s/v1/if2/ekq1qCdB5Qy_TSi9-aqq9r0ZRURVqHHmFgRXr10DpuNtkd4ILQpVNpEywHCccBI_zzGnjCGi9COAWfEUGX0B2ZJ2.jpg?quality=95&as=32x31,48x46,72x69,108x104,160x154,240x232,360x347,480x463,540x521,640x618,720x695,1080x1042,1200x1158&from=bu&cs=540x0"
    },
    {
      "title": "29.03.25 | ШЛ «Alzhan” г.Лисаковск",
      "imageUrl": "https://sun9-1.userapi.com/s/v1/ig2/4ThS7XGkLCCNgx5nLytvDTp-VfNp3BXheBzdNwpuvRZ0Bcfxwytzv2RNIm_4LrxUQxup13gEAGS5y_DLLFhsZIzG.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1600x2400&from=bu&cs=540x0"
    },
    {
      "title": "30.03.25 | ШЛ \"Alzhan\" г.Аксу",
      "imageUrl": "https://sun9-66.userapi.com/s/v1/ig2/jnqL-6gAxtHf9mQ0-lMV5QmeND1nOoau_Cvc7WnOnvJBHx2rREILohAvJSGmR_6RO-Duol0H1hP4qwBp7mhuV1Cz.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920&from=bu&cs=540x0"
    },
    {
      "title": "29.03.25 | ШЛ “Alzhan” г.Рудный",
      "imageUrl": "https://sun9-82.userapi.com/s/v1/ig2/EcYpDddbjAaQpEwjzNTia3pr6nBnauwPJ0LS5p8ioy8QO6cjwKzo0s-Y4W5RMtagufaLVMD033WY-V38LpxD1t8c.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "16.03.25 | ШЛ “Alzhan” г.Аксу",
      "imageUrl": "https://sun9-56.userapi.com/s/v1/ig2/QeTAqEdIST6OewYhTbtW16DXxTaU-Ai4N4moaEXoKdx4bN3hQIs6D0uigiowzaCGXN2HTciyzAHfxEyTNK4UFtuh.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "15.03.25 | ШЛ “Alzhan” г. Хромтау",
      "imageUrl": "https://sun9-24.userapi.com/s/v1/if2/OC8Exn6_5q5-Taut6lkwnzNb57gF8bnq4iQycPZ3YsJmnhYGlWLRfHFvkohub6NJzrO89nstE9IzvG7UxAoCFxMk.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,1620x1080&from=bu&cs=540x0"
    },
    {
      "title": "16.03.2025 ШЛ \"Alzhan\" г.Семей",
      "imageUrl": "https://sun9-69.userapi.com/s/v1/if2/JFC_e5wcgZIdb3MbvUjQ-j_0HPz3R3yKZ3vejqU3YJx1mIYLh6wzW-OJkg0DhGhpM6LPEih-obMf6qPAiiBCvEpe.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "15.03.2025 ШЛ \"Alzhan\" г.Семей",
      "imageUrl": "https://sun9-69.userapi.com/s/v1/if2/EB1Hkf8BAnDyyCCpxbaDDDtCBJJeEZE4w8zb2H1b6Pg8kvYAwTp_maCSPDSGNPIuK6v6y3MdFhr7RtKZSlXYhHuR.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "15.03.25 | ШЛ «Alzhan” г.Лисаковск",
      "imageUrl": "https://sun9-74.userapi.com/s/v1/ig2/lpwe90GHXD0Egl4yWWpKOOmXPk7aaClYewM-qYa-AO9JhQiKk0mOvZZhyhQALDIawyUgUbPyHLWAwiSSE2cBdQkq.jpg?quality=95&as=32x56,48x84,72x126,108x189,160x280,240x420,360x629,480x839,540x944,640x1119,720x1259,1080x1888,1280x2237,1373x2400&from=bu&cs=540x0"
    },
    {
      "title": "15.03.25 | ШЛ “Alzhan” г.Рудн",
      "imageUrl": "https://sun9-51.userapi.com/s/v1/ig2/6kU2uhiulnx7XeyvPHzBj3Y8MCWHB7gfBUfYexnIoT6XNxyEp8TS3RKegOPtm-M3_k9Rq4NhEwcL76VtRYCUnQRs.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "09.03.2025 ШБЛ “Alzhan” Г.Ақтөбе",
      "imageUrl": "https://sun9-11.userapi.com/s/v1/ig2/QzgqRjVSc8djhMy58TTeNZElbtGZb11uGTzyJbfu1TFxoWV1WSE4bhFM8uLDkWbLrUQWDrWGMBV5VVuFrtByAf6T.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x241,240x361,360x541,480x722,540x812,640x963,720x1083,1080x1624,1280x1925,1440x2166,1702x2560&from=bu&cs=540x0"
    },
    {
      "title": "09.03.25 | ШЛ “Alzhan” г.Рудный",
      "imageUrl": "https://sun9-29.userapi.com/s/v1/ig2/l-kVMKW48ULa0pl28EnOqnkAuFfYXLKBeaW5l647T4bBEEduIBSek2c2aIbv-oZBN0qUu6PHfoD2K5vCuJH5Qqi-.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "01.03.25 | ШЛ «Alzhan” г.Лисаковск",
      "imageUrl": "https://sun9-84.userapi.com/s/v1/if2/WXbK47DydrjRmtKneiiCvy7ZH2KbiYaGywsDGIv6OYCJeI5RvY4QEOpHoPxLLgD6VjpIWyL_kUFi4VkihYcWvQ3A.jpg?quality=95&as=32x23,48x35,72x52,108x78,160x115,240x173,360x260,480x346,540x390,640x462,720x520,1080x779,1280x924,1440x1039,2400x1732&from=bu&cs=540x0"
    },
    {
      "title": "01.03.2025 ШЛ \"Alzhan\" г. Семей",
      "imageUrl": "https://sun9-79.userapi.com/s/v1/if2/ASHJ4POZ5iYbDWWfN99oSM0qTAjtCaZbpD3CWIjTM5Mud2J0hGalDAodIWLRV1G8mRKt0KStvTGh7Kf9BNstccOt.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "02.03.2025 ШБЛ„Alzhan” Г.Актөбе",
      "imageUrl": "https://sun9-6.userapi.com/s/v1/ig2/cAhQIWBVOEuUgtxqEMS2x2nH0AXh6YoYBUnPPMFUnoC5TgL3lMkcQvhtCXORtiyAXHTHWeYGCy94tgCwrBVnLXEf.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x854,720x960,1080x1441,1280x1708,1440x1921,1919x2560&from=bu&cs=540x0"
    },
    {
      "title": "2 тур - 02.03.25 | ШЛ “Alzhan” г.Аксу",
      "imageUrl": "https://sun9-23.userapi.com/s/v1/ig2/uOzakbk52rOJw7SEWnmnnHgIqUO9edYcAvSF3-dnsU_Q4fuRgdAmDJ4pkF5a6II54ggFg6mAhFzEfzWloWu96vvb.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "02.03.25 | ШЛ “Alzhan” г.Рудный",
      "imageUrl": "https://sun9-31.userapi.com/s/v1/ig2/CPcu-byVYgjn_h2rQadgL72borghZjNUFwvOHd0zX7xDJMgsmBWherrk-k5gtwV8IGCxelwAL702pit6gVciIGPR.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "01.03.25 | ШЛ “Alzhan” г. Хромтау",
      "imageUrl": "https://sun9-2.userapi.com/s/v1/ig2/RYhwmVpVKWTR6dhUdRYWvMULQnqH1d1WUL3WFCBwsT2LGwkDWgCR-UioXDr7fMUT5ZK65MaqP7bBokD86gF8xJLD.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620&from=bu&cs=540x0"
    },
    {
      "title": "23.02.2025 ШЛ \"Alzhan\" г.Семей",
      "imageUrl": "https://sun9-69.userapi.com/s/v1/if2/rDXypJfZmtqgomGopAzK0MgovcuUKYWuHed0KG-4ZtLyh_eTlm32l4EQR5tRrgAztWy0gy9MfZkcE8MNdg_nU4ob.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "22.02.2025 ШЛ \"Alzhan\" г. Семей",
      "imageUrl": "https://sun9-34.userapi.com/s/v1/if2/p8hMmaqgw-MxVQO39hOuSASqLPLA2vqcLfItQ6Q0Z66BET4gUFu-Kd-Bk3jXToDKocpJXXfzBsFfG3VZLb-0ETay.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "22.02.25 | ШЛ “Alzhan” г. Хромтау",
      "imageUrl": "https://sun9-54.userapi.com/s/v1/if2/ezlEX2oHAFdEtinUyvdeTLqSKcXVD1ZW7g-NQhAYIOme-huinOwTFtddH7rfOPz3Q24iMYFIZ9H0Y3_FensVTVkL.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,1620x1080&from=bu&cs=540x0"
    },
    {
      "title": "23.02.25| ШЛ “Alzhan” г Аксу",
      "imageUrl": "https://sun9-17.userapi.com/s/v1/ig2/D-J07o4MDvZv0yr7iWlMd1FZVpT_pgrkwwIfE1o7sUnbqU3UyH9njXVlQBnMKiw_yhGvAdakwmt45NWMSMSjAQzQ.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "23.02.25| ШЛ “Alzhan” г.Рудный",
      "imageUrl": "https://sun9-28.userapi.com/s/v1/ig2/uYHl7-pYlwvItT05EFoz7tv33HjgAdDAtPT0jYuzgz213KhgRGiOv8C4A6zxbipzf4187DLlFRm1_WRa1yrJPgP5.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "23.02.2025 ШБЛ \"Alzhan\" г. Актобе",
      "imageUrl": "https://sun9-20.userapi.com/s/v1/ig2/vsFIu4DQ030sj638xr9w-n28KzutPtDFG1AVxGqutmefrJ_6Svc5sD1tc5S_2V35Ac-HVGfUendTD1G7b8Q25HeY.jpg?quality=95&as=32x57,48x86,72x128,108x192,160x285,240x428,360x641,480x855,540x962,640x1140,720x1283,1080x1924,1280x2280,1437x2560&from=bu&cs=540x0"
    },
    {
      "title": "22.02.25 | ШЛ «Alzhan” г.Лисаковск",
      "imageUrl": "https://sun9-56.userapi.com/s/v1/if2/AYsY8Ko5hXrJBdAGcGD37SJzqaGf0iTNRxreNxm_maxGWEWAyPxhOFmciFyusk4VzoNlZJZm6i_ZWfzl7F60QKoF.jpg?quality=95&as=32x22,48x33,72x49,108x74,160x110,240x165,360x247,480x329,540x370,640x439,720x494,1080x741,1280x878,1440x988,2400x1646&from=bu&cs=540x0"
    },
    {
      "title": "16.02.2025 ШБЛ (Alzhan) Г.Актобе",
      "imageUrl": "https://sun9-84.userapi.com/s/v1/ig2/Q5GbrHH2UBGY03FhDn-nYB2So8eZ6AjiT6N_-F3KxfIbBWl9Usqauy6QaqlsorZ81mV6zhgWt5efdbtbMUTqgoSJ.jpg?quality=95&as=32x57,48x86,72x128,108x192,160x285,240x428,360x641,480x855,540x962,640x1140,720x1283,1080x1924,1280x2280,1437x2560&from=bu&cs=540x0"
    },
    {
      "title": "16.02.25 | ШЛ “Alzhan” г.Аксу",
      "imageUrl": "https://sun9-69.userapi.com/s/v1/ig2/-z6Bm2It3zVGjhxHpDHYia7am-l9NZlXONsiZkjxZFOZz2Uep0oz84kPvY2BcKBgHGwrtfArb66_MlY5s4LVeqqF.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "16.02.25 | ШЛ “Alzhan” г.Рудный",
      "imageUrl": "https://sun9-51.userapi.com/s/v1/ig2/x0dVEfoKMHYhR774vfGhNPMfp550F-sCv6oF2Cl1gNZg486D42UfsztVLX-pCWcG3poeZW4UYT5N1j1iJ1ezen-V.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "16.02.25 | ШЛ “Alzhan” г. Хромтау",
      "imageUrl": "https://sun9-8.userapi.com/s/v1/if2/t9laXewvucJ-o1OpPclK_34F2okHvprj7xE3hTbS57q3H9GTFnpGAmGI-ChD3Y3wo1TFL4daB5hH63qisrCP-7dH.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,1620x1080&from=bu&cs=540x0"
    },
    {
      "title": "15.02.25 | ШЛ «Alzhan” г.Лисаковск",
      "imageUrl": "https://sun9-76.userapi.com/s/v1/ig2/u7C0_4iaEsppWNsPUfM8vCivKtrvDWKYU5YYsiaCoyqWdn8CwpgBbb0nC7K4KFT-SvkhuBxSH-hixjsgdeJL6mY9.jpg?quality=95&as=32x42,48x64,72x96,108x143,160x212,240x319,360x478,480x638,540x717,640x850,720x956,1080x1434,1280x1700,1440x1913,1807x2400&from=bu&cs=540x0"
    },
    {
      "title": "15.02.2025 ШЛ \"Alzhan\" г. Семей",
      "imageUrl": "https://sun9-27.userapi.com/s/v1/if2/KQeKHuHM3PnjWwn6sFFDeweCkBR3yu1FtU6LPw9gJXfGgW57WEABOm3iTtuBrSyZKzoqp6cm7r-wVFSxOmNxKb2n.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "02.09.2025 ШБЛ„Alzhan”Г.Актобе",
      "imageUrl": "https://sun9-48.userapi.com/s/v1/ig2/ugQURNkRl1cSuUlBeOcTQgf1UcNtEU7Sx4ApE4e10y-r-bgo8a4rWzpayoaBiJyrFYyT6da-ShQFXYEV308paoU2.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x854,720x960,1080x1441,1280x1708,1440x1921,1919x2560&from=bu&cs=540x0"
    },
    {
      "title": "09.02.2025 ШЛ \"Alzhan\" г. Семей",
      "imageUrl": "https://sun9-35.userapi.com/s/v1/if2/7PFqNSQ5rBhcNu6ie16T-w7tXsSW8U8B-cuK_O_lz21FrVMRQ8S0FzEmJWzPRo_x74Osg7rLW0z4oSiZ_Q5o9wfo.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "09.02.25 | ШЛ “Alzhan” г.Рудный 5-6 КЛАСС",
      "imageUrl": "https://sun9-74.userapi.com/s/v1/ig2/AJx2Wsukq1s-4JUX78ja_6gpBB1fxG4TqnMo6pr7rOcyJMqd50Cq90h-433j_hKTEd3b76mB9WkwrHD1PrhMM0xi.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "08.02.2025 ШЛ \"Alzhan\" г. Семей",
      "imageUrl": "https://sun9-44.userapi.com/s/v1/if2/lwjO1dfHDQoy0k-3QRy6AJkiO67T1brSU2SxxUPgNpJsR4nRxhWHJxkmMdbW_OqTWSLK-X57joSAvAId3Nek1D_n.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "08.02.25 | ШЛ “Alzhan” г. Хромтау",
      "imageUrl": "https://sun9-29.userapi.com/s/v1/if2/2RWI9SLPpcMJO5ljiPiwuFJxnb18Ng4IlSuqeODH2cJoz2I6YqJ7xNxJwBcNtyQkYGZnLu-XEcqFK4BovjpwieS7.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,1620x1080&from=bu&cs=540x0"
    },
    {
      "title": "09.02.25 | ШЛ “Alzhan” г.Аксу",
      "imageUrl": "https://sun9-34.userapi.com/s/v1/ig2/Kwycs6Tplr84QWIrA9Wtqzilbu7e8WHuIqareRkUpwHH5krRatjHv53kxNMirHm9HMhntR5NZamhqbn_0Jl14dtW.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "8.02.25 | ШЛ «Alzhan” г.Лисаковск",
      "imageUrl": "https://sun9-6.userapi.com/s/v1/if2/gx9OYb49qjuktgY1JkfC5sRDoPzJ0nIfCogL1baApAYT5YtkflOgrVuo2EFuz4bcOelep8JroFyPzX3cDsas5qLL.jpg?quality=95&as=32x21,48x32,72x48,108x73,160x108,240x161,360x242,480x323,540x363,640x430,720x484,1080x726,1280x860,1440x968,2400x1613&from=bu&cs=540x0"
    },
    {
      "title": "02.02.24 | ШЛ “Alzhan” 5-6 класс  г.Рудный",
      "imageUrl": "https://sun9-56.userapi.com/s/v1/if2/KmtTVJIMAvG3KEQySSqtqvfYOZ5p0fED59P54mrVw26B0xockLlx0bikTLJ2c3MQXIVYnYim1IfBczjNSRZoZv0y.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "02.02.25 | ШЛ “Alzhan” г.Аксу",
      "imageUrl": "https://sun9-80.userapi.com/s/v1/ig2/gWLAfyIi9xov6eAKLh2WBp1ZGPMJKExgQTlCiB1gWsZG5mAd8hU2-pcB3N4S8UL-jzPreVKHV_eiLTAFAwxcQp4G.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "ШЛ„Alzhan” 02.02.2025 Г.Актобе",
      "imageUrl": "https://sun9-59.userapi.com/s/v1/ig2/Kl6J9qmKB0dCvge8jNeYpT84jnPtlK6q-Wvo4InRGAEBJhyU0jgDAcaHTOZ3F8OxDc1GpRr_JWMaUR8FWIH5RtE5.jpg?quality=95&as=32x70,48x104,72x157,108x235,160x348,240x522,360x783,480x1044,540x1175,640x1392,720x1566,1080x2349,1177x2560&from=bu&cs=540x0"
    },
    {
      "title": "01.02.25 | ШЛ «Alzhan” г.Лисаковск",
      "imageUrl": "https://sun9-49.userapi.com/s/v1/ig2/xOXzfBEwoisJ0s542nuDo9IzEDLLn8h0dJCX15kbH7vwSOUvoI39gcxP5zRFAHC2xxl7tJLkj6jPnPFKxnNTttR5.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1600x2400&from=bu&cs=540x0"
    },
    {
      "title": "01.02.25 | ШЛ “Alzhan” г. Хромтау",
      "imageUrl": "https://sun9-46.userapi.com/s/v1/ig2/SdJQr_2NM2iKUaHms2i4EqQ0cRcCNOBCFQ4o6Ej2M3WNiPRvJSXC5dukj5uXMLvkqQ96-MwDIuVUHcEQIYT_CzkE.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620&from=bu&cs=540x0"
    },
    {
      "title": "26.01.2025 ШЛ \"Alzhan\" г. Семей",
      "imageUrl": "https://sun9-22.userapi.com/s/v1/ig2/WV4LyQxXlf2_G6zpCtJlEJ2Z2XW8x89QLrWIFbJ-rQrhiFCty0kk4Sb3bihD_7MgWAxjofHjQEL-LGmRH7oRksza.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "25.01.2025 ШЛ \"Alzhan\" г.Семей",
      "imageUrl": "https://sun9-81.userapi.com/s/v1/if2/mi3HNRIe9YxRCoYVlbDzKnHpXb8jTSK4ibFM2hegzlCTYXFVjGIw9wHWHSJEwQwOcxMXSQcYmpyludqeQyID4NUI.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "26.01.25 | ШЛ “Alzhan” г.Аксу",
      "imageUrl": "https://sun9-17.userapi.com/s/v1/ig2/ymxXIvwje4k9yRdtEMMcs24T0uWK0uMI-J5IyA7VV1WzN-yzSJ1vDhe_iKqU0KxyNKLTJv2zECanCJHIvvxTPmDg.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "26.01.25 | ШЛ “Alzhan” г.Рудный",
      "imageUrl": "https://sun9-36.userapi.com/s/v1/ig2/POC397s5iZhzJXDwfR1BCHxGtSZvLyt8VIHbukUl2hiik3uxdXoeKQVMEbyJ7yJnQr9gtb03oLcz000sO6XB2dIQ.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "26.01.2025 ШЛ„Alzhan”Г.Актобе 5.6Кл",
      "imageUrl": "https://sun9-1.userapi.com/s/v1/if2/MncrQ_GifLu2gnQO7j4kfZMhEaN94MlZKRmhU2m1GwFY-V-xcHPduNAAdD-qW2z7UtFxF8P3XpjwfMsLp8kbUf5O.jpg?quality=95&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x269,540x303,640x359,720x404,1080x606,1280x718,1440x808,2560x1436&from=bu&cs=540x0"
    },
    {
      "title": "25.01.25 | ШЛ \"Alzhan\" г. Хромтау",
      "imageUrl": "https://sun9-45.userapi.com/s/v1/if2/16VrRtGVYtltXrOANG2fSP92eBmd-uVSvt2Hy4WAI0us5zU_Xr9T_ER22blpXMamhi-gW3yrx9yD2TVhoPh7QV6D.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,1620x1080&from=bu&cs=540x0"
    },
    {
      "title": "19.01.25 | ШЛ “Alzhan” г.Рудный",
      "imageUrl": "https://sun9-47.userapi.com/s/v1/ig2/lbaJ9X4eB14nfPU28zleawk-gJR5f3yPuW2L9WRJjMvxx__JxJ3VPHPLy0bc706hEtwYXqa7qUFLMgBykoOGD45B.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "19.01.25 | ШЛ “Alzhan” г.Аксу",
      "imageUrl": "https://sun9-8.userapi.com/s/v1/ig2/BZUGer-0XSVIMPQ6pzk6aHKW_XhrkZ33hdnJm-BawUjYGfbZuJo2lLh0JL7cb7KM-uV3qOkC0_AQIqOWsLAdU1vm.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "19.01.25 ШЛ \"Alzhan\" г.Семей",
      "imageUrl": "https://sun9-27.userapi.com/s/v1/ig2/ireJY_76FK32PEq71pDwJo7OFLE0rGTR7ZrTE27iEkPKhMdwdPNzvgoG_mSwnQ92Q7vzN17thvWzgh4I5SKvbjPC.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "18.01.25 | ШЛ «Alzhan” г.Лисаковск",
      "imageUrl": "https://sun9-48.userapi.com/s/v1/ig2/i1sVFY0kJyD82qKAChyweC_lU1l98R4dG7n53X4v5zqu7GOcE38Gh2XJ_9CcbNJFjJ5yY0kZv4YG8hnSzEdVkEiV.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1600x2400&from=bu&cs=540x0"
    },
    {
      "title": "19.1.2025 ШБЛ„Alzhan” Г.Актобе",
      "imageUrl": "https://sun9-80.userapi.com/s/v1/ig2/jNsr4iPfVSQrxKkesZf6xpjsNMIp73LFH38lE-JSgdSEq1oOGe9tGQEwV7O6T9q_8mZv5mXIOBwhYyUkxeRD1NGV.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x854,720x960,1080x1441,1280x1708,1440x1921,1919x2560&from=bu&cs=540x0"
    },
    {
      "title": "18.01.25 ШЛ \"Alzhan\" г.Семей",
      "imageUrl": "https://sun9-43.userapi.com/s/v1/if2/MgY4BCh_Ar70QUc5JAFPByzboc5GQTiVRAkjZ_Ku5koIUM5c_Wqb20Dv0MYosLwB9CbYIWV6tA4KdWXeKKnaSl8G.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "12.01.25 | ШЛ “Alzhan” г.Аксу",
      "imageUrl": "https://sun9-82.userapi.com/s/v1/if2/GTObxNFtKdDvO_CWCpR7eb5FeYbK9LZBqzjuqrGo_vKcz6BO-vJWi45LtA7YkIJkrajV4GAJyVDqtUoXEr9e_zsS.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "11.01.25 | ШЛ «Alzhan” г.Лисаковск",
      "imageUrl": "https://sun9-32.userapi.com/s/v1/ig2/sNm53Knz9w4Df_LxMUQj2e6r53Z5KfamjTBlTJQ7eAuR0wrZDSahAxuYJlCkApnFNoX0fJa85U48eLKy3XTJq7K7.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1600x2400&from=bu&cs=540x0"
    },
    {
      "title": "12.01.25 | 5-6 классы | ШЛ “Alzhan” г.Рудный",
      "imageUrl": "https://sun9-57.userapi.com/s/v1/ig2/afebMODSbX1lH6U2ZEFUldJA1AmZM9sMa17HV8Zsd-6HEL9A85pZzzRPoujt7T7y_ZpW22sV1ymiLFBpoQoleflG.jpg?quality=95&as=32x48,48x72,72x109,108x163,160x242,240x362,360x544,480x725,540x816,640x967,720x1087,1080x1631,1280x1933,1440x2175,1695x2560&from=bu&cs=540x0"
    },
    {
      "title": "12.01.2025 ШЛ„Alzhan”Г.Ақтөбе",
      "imageUrl": "https://sun9-43.userapi.com/s/v1/ig2/DsY4gsTg69LChAAAXnuBUBGsCbFgMjuUCf48DKZDR990exV54OOpmloT7VZWgCg_VVNlHeNr5qdB9JFxcoiSPq5A.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1621,1280x1921,1440x2161,1706x2560&from=bu&cs=540x0"
    },
    {
      "title": "11.01.25 | ШЛ “Alzhan” г. Хромтау",
      "imageUrl": "https://sun9-52.userapi.com/s/v1/ig2/CmyeGAI_mkZZKGFvj-ouBlS0jZFGyr6rvVbu1ydt80KgaDRpHx6UOihjfU7cbu21Jg9kmRnxpwHGnOs7i74IcEyx.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620&from=bu&cs=540x0"
    },
    {
      "title": "29.12.24 | ШЛ “Alzhan” г.Рудный",
      "imageUrl": "https://sun9-36.userapi.com/s/v1/ig2/mz5Mywy--9Pc309t69Ox_0Aljl3-W-ds84IZXW_5Fs8c7EjnQsNhCy60_3J0TlyU82G1z0nSQgIYsBCK0SIQ9zqN.jpg?quality=95&as=32x48,48x72,72x109,108x163,160x241,240x362,360x543,480x725,540x815,640x966,720x1087,1080x1630,1280x1932,1440x2174,1696x2560&from=bu&cs=540x0"
    },
    {
      "title": "28.12.24 | ШЛ «Alzhan” г.Лисаковск",
      "imageUrl": "https://sun9-65.userapi.com/s/v1/ig2/_h-KWSUy6S7doZgRoh4OPZHgZs8ujTiTwtXWqW63f35dDmZaTgvlk4yt5ZAqBRUdWwSpydRkEVWOJPFEIiX3W0Nt.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1600x2400&from=bu&cs=540x0"
    },
    {
      "title": "22.12.24 | ШЛ “Alzhan” г.Рудный",
      "imageUrl": "https://sun9-56.userapi.com/s/v1/ig2/0hLPSKu2x3pHaDfIgGAOmKQDjwVK4NrwrlR7C1ztiUhMbB4whgXnVH83NfpH8vMtwFsjs189niR5TmDMqupbFtEu.jpg?quality=95&as=32x48,48x72,72x109,108x163,160x241,240x362,360x543,480x725,540x815,640x966,720x1087,1080x1630,1280x1932,1440x2174,1696x2560&from=bu&cs=540x0"
    },
    {
      "title": "22.12.2024 ШЛ\"Alzhan\"Г,Актобе",
      "imageUrl": "https://sun9-68.userapi.com/s/v1/if2/o2eNk7KurVmAUtoF7Ziyk-O_2wxLUgO_FSn2gMWCe_UTpHwfhqw7GkW04um4EEma69GVepC74nDyvCaScfxedSjb.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "3 тур - 7.12.24 | ШЛ “Alzhan” г.Аксу",
      "imageUrl": "https://sun9-52.userapi.com/s/v1/ig2/aKEnavUeFmwlIJwmIDe9oi03C5FUA6xPuVTu8CVjcRAzLXJtQ5DB0yHpw6jnsOU4jsZ5VT6ogwwbuZJz5UKvct28.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "21.12.24 | ШЛ «Alzhan” г.Лисаковск",
      "imageUrl": "https://sun9-75.userapi.com/s/v1/if2/iPdGMTCVgu22nTfbIM456cugw-Fov5mff85amC6AgbVuz7_CHEhb3f7TDUw0X2MsMIKGBk8m-Gq41xhFRadypCLl.jpg?quality=95&as=32x26,48x39,72x58,108x88,160x130,240x195,360x292,480x389,540x438,640x519,720x584,1080x876,1280x1038,1440x1168,2400x1947&from=bu&cs=540x0"
    },
    {
      "title": "21.12.24 | ШЛ “Alzhan” г.Хромтау",
      "imageUrl": "https://sun9-25.userapi.com/s/v1/ig2/swR-ggkXaxaJBgJjF6MksOLh6sm8JTH-5o_iCIzf5qYFR4fjNTgoOj_uLd19la5Ep7G1nvnkJj4c06I0-SXj6CAT.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "14.12.24 | ШЛ “Alzhan” г.Рудный",
      "imageUrl": "https://sun9-20.userapi.com/s/v1/ig2/WEAe4xURUjWTHHca_QDJit5R4KLN1SseXt327CPYBa1Psx9QL_SijNT62sWxWasJo9ComLaOHpVQ3tMsaniyul90.jpg?quality=95&as=32x48,48x72,72x109,108x163,160x241,240x362,360x543,480x725,540x815,640x966,720x1087,1080x1630,1280x1932,1440x2174,1696x2560&from=bu&cs=540x0"
    },
    {
      "title": "14.12.24 | ШЛ “Alzhan” г.Хромтау",
      "imageUrl": "https://sun9-10.userapi.com/s/v1/if2/UAIDSil7NuB0j4WtazVqmdnHq2d_dsHPeXQb8OS_4AkdLF1FOlF-WewdWNaZymZteNxTL0qXrnaz97ElUd7IZoyf.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,1620x1080&from=bu&cs=540x0"
    },
    {
      "title": "09.12.2024 ШЛ „Alzhan“ Г.Актобе",
      "imageUrl": "https://sun9-25.userapi.com/s/v1/ig2/fVHQe5-btyhvbo2GFQ0NjYhVb7u4ruwB1ofhkGsQDg0_FSbyfs_LuZPNqU8T4cbOu4oKFnI_GWD3rZPZLEBulpJY.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,853x1280&from=bu&cs=540x0"
    },
    {
      "title": "7.12.24 | ШЛ «Alzhan” г.Лисаковск",
      "imageUrl": "https://sun9-79.userapi.com/s/v1/if2/QM_pPceXlMF7LBaDj9cONlU61kOYNZI_WFSTPGPMMFkwO7O14q5M--xhdz5T3I4XOVt6KA46Xg5m3zVw0h1MbWAw.jpg?quality=95&as=32x27,48x41,72x61,108x92,160x136,240x203,360x305,480x407,540x458,640x543,720x610,1080x916,1280x1085,1440x1221,2400x2035&from=bu&cs=540x0"
    },
    {
      "title": "1тур - 5/6 классы - 7.12.24 | ШЛ “Alzhan” г.Аксу",
      "imageUrl": "https://sun9-46.userapi.com/s/v1/if2/rsCCw7JFVOweyet0BzXHdajYGL1-x4OQBg6H8HgRpa81vrHg6FY_djHQEoPWPjRSAI5cf8rjQ_0s5GMYtzNBGEwd.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x106,240x159,360x238,480x318,540x358,640x424,720x477,1080x715,1280x848,1440x954,2560x1696&from=bu&cs=540x0"
    },
    {
      "title": "01.12.2024 ШЛ ”Alzhan“ г. Рудный",
      "imageUrl": "https://sun9-68.userapi.com/s/v1/ig2/ePfOuGhvYO2D5bcxN7M7oq2w06PCUyFW-WTYYEr-OtzwlT_gMme5fmf_vSJwxrF12J6NHIEyhMetSaqFRBiKcmN7.jpg?quality=95&as=32x48,48x72,72x109,108x163,160x241,240x362,360x543,480x725,540x815,640x966,720x1087,1080x1630,1280x1932,1440x2174,1696x2560&from=bu&cs=540x0"
    },
    {
      "title": "01.12.2024 ШЛ ”Alzhan“ Г Актобе",
      "imageUrl": "https://sun9-77.userapi.com/s/v1/if2/rGpWW2nWIicjO3iDN0RWHkGTusUFopxFXWLStwofRKKdhlHGlnAzDooz9x2ISZeLPHKkqdGsM1g0YFEX9_xUhQCe.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x426,720x480,1080x720,1280x853,1440x959,1600x1066&from=bu&cs=540x0"
    },
    {
      "title": "30.11.24 | ШЛ «Alzhan” г.Лисаковск",
      "imageUrl": "https://sun9-37.userapi.com/s/v1/if2/EFV7bCq9D07ZIHE3BQB3IBiErOGonXFaWtnVhRHSB3KGAhSHq0x2Bv8vVa6_RfwPfdhav3shKWG7RsgVqqtYFCPa.jpg?quality=95&as=32x25,48x37,72x56,108x84,160x124,240x187,360x280,480x373,540x420,640x498,720x560,1080x840,1280x996,1440x1120,2400x1867&from=bu&cs=540x0"
    },
    {
      "title": "1 тур - 7/8 классы - 30.11.24 | ШЛ “Alzhan” г.Аксу",
      "imageUrl": "https://sun9-44.userapi.com/s/v1/ig2/EItAWPmTnYMeCIF8GSDtUqi_lK_NtENTONrNEPq_FZjhe01AI6FP8v6th8okRmVj8RyarUpUIeE4Zuxs1yT3BnvT.jpg?quality=95&as=32x48,48x72,72x109,108x163,160x241,240x362,360x543,480x725,540x815,640x966,720x1087,1080x1630,1280x1932,1440x2174,1696x2560&from=bu&cs=540x0"
    },
    {
      "title": "30.11.24 | ШЛ “Alzhan” г.Хромтау",
      "imageUrl": "https://sun9-88.userapi.com/s/v1/if2/WfJLk5fU67n1haB3u2bdAkXkjNOdAXpJdVWXsnMFTMGSj6xBB6PNYT8m7hTzg0lpXF5K9jaZIYxhH2L7WJ2j-qDF.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,1620x1080&from=bu&cs=540x0"
    },
    {
      "title": "23.11.24 | ШЛ «Alzhan” г.Лисаковск",
      "imageUrl": "https://sun9-57.userapi.com/s/v1/if2/x-aNE-Vc-pLr45s6JdxS3Dqm7M5cxH9rYjA6mYsQ2ayNHuytIJ5PDWmMPJAiEL_mQeQKU8jBBGtKXGP04DrgwFr1.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2400x1600&from=bu&cs=540x0"
    },
    {
      "title": "23.11.24 | ШЛ «Alzhan» г.Хромтау",
      "imageUrl": "https://sun9-65.userapi.com/s/v1/if2/3Anz4NiNzV92W4uZ0-v9U6WbC3yEFMd2KuSaFLHMy4oJT3NVJ7MAMRPkOmK2sVrBDzcZaRVspzbxF1Y0-78JqB1i.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,1620x1080&from=bu&cs=540x0"
    },
    {
      "title": "Награждение ШЛ «Alzhan» г. Актобе - СУПЕРФИНАЛ",
      "imageUrl": "https://sun9-75.userapi.com/s/v1/if2/0Kon1I7-E2Ie7YW-H4dW3oDumSWVc5QhJyB86PkkljdRf97R-VkzQtu_W6kj1xGcaAvkezABpy8x-Mf7FvhZRfoS.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "19.05.24 | ШЛ «Alzhan» г. Актобе - СУПЕРФИНАЛ, 2й день",
      "imageUrl": "https://sun9-71.userapi.com/s/v1/if2/-Sfw8wSs2mxVckvJKruiALuUYY0o0K-KNPdHPh4b_6CsOsPeiUA96sMPUVksQgeLPkgDW7wWP6fWX7Eo-FZBEXXO.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "18.05.24 | ШЛ «Alzhan» г. Актобе - СУПЕРФИНАЛ, 1 день",
      "imageUrl": "https://sun9-82.userapi.com/s/v1/if2/9OcpIl62xiWSb8Y8ihILWtd2sX6_q-vyQe4xAoYF6RkI9d0vhRohjDVOd-S1gva63489TH5oA6L11EZRJm_hu2pD.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "05.05.24 | ШЛ «Alzhan» г. Актобе",
      "imageUrl": "https://sun9-80.userapi.com/s/v1/if2/P8Yz7Bj-shN0NGB-9U3gLJD-IKOaURS2J2_IoqAcDML7MjwHvUtzM663RFuFzVQ1dhgdY--mPnMFvRD1Zr4ueL0C.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x721,1280x854,1440x961,2560x1708&from=bu&cs=540x0"
    },
    {
      "title": "04.05.24 | ШЛ «Alzhan» г.Хромтау, Финал",
      "imageUrl": "https://sun9-71.userapi.com/s/v1/if2/2uLW3OEbo-aLXHjwhSRC0BimV6A2Zcs0N02ZDNtbw5ruuR3StEPpdDJ_HzoH8P6MyBrMLG-GUTxdUXf775AiYPgE.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x721,1280x854,1440x961,2560x1708&from=bu&cs=540x0"
    },
    {
      "title": "02.05.24 | ШЛ «Alzhan» г. Лисаковск, Финал Костанайской обл.",
      "imageUrl": "https://sun9-63.userapi.com/s/v1/if2/WxgI7kkU6Nk31ABEHLaYoPRGa9l00SaxcZSa1gAzkau2vLEfA9KSkXYFZlCtr2lOXanxpO2CGt4npS3YGzIkHU-g.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x106,240x159,360x238,480x318,540x358,640x424,720x477,1080x715,1280x848,1440x954,2560x1696&from=bu&cs=540x0"
    },
    {
      "title": "28.04.24 | ШЛ «Alzhan» г. Актобе",
      "imageUrl": "https://sun9-42.userapi.com/s/v1/if2/tipwz3URkE2vh5bk2M_pkCy3uQlg0gNImash0YdM9e0oaHsgpXkPlWV8ISjeiR4sC6w0ZK3dL0j38EMeWuXLQKVE.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&cs=540x0"
    },
    {
      "title": "27.04.24 | ШЛ «Alzhan» г.Хромтау",
      "imageUrl": "https://sun9-73.userapi.com/s/v1/ig2/XXCVljspiDBcAxeY5ZxZ0_nSHiHaa3LeQ4z30ECfRABJJXFR5xLkdtipDPDN8_NaNbbc9Pc2EM4FEfNm0Cfe5mjM.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "28.04.24 | ШЛ «Alzhan» г. Рудный, Финал",
      "imageUrl": "https://sun9-65.userapi.com/s/v1/if2/sGlfszs_tMaidzyT3GOPFrm4X4GBWEqvCcyu3qgWMpz5-qqCK2p8AiIfh1J71U5HicZPQBeGFMoUTl_Fdq0-u7FO.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x721,1280x854,1440x961,2560x1708&from=bu&cs=540x0"
    },
    {
      "title": "27.04.24 | ШЛ «Alzhan» г.Аксу, Финал",
      "imageUrl": "https://sun9-4.userapi.com/s/v1/if2/uOMBKj05-_LhqrsEBW2G0_ASXGxa7DdEnI-RVRVSGXMEIWL7WKEQcLtRpNS2HJkVduGSAYfa2v35Kc3tzmdxVkJ2.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "27.04.24 | ШЛ «Alzhan» г. Лисаковск, Финал",
      "imageUrl": "https://sun9-12.userapi.com/s/v1/if2/H2vIahGO6jvyN9F6qgiAerEujluTCguOuvhSN3MWmRCstBHTU11sb0qOPP7Fu5JlEKpgn2Oh-oaAUsxFYy783ptu.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x721,1280x854,1440x961,2560x1708&from=bu&cs=540x0"
    },
    {
      "title": "21.04.24 | ШЛ «Alzhan» г. Актобе",
      "imageUrl": "https://sun9-21.userapi.com/s/v1/if2/ZH4AkmGz-yJReEWVSJOsbnX4u3OvXks333EQGKrIafTdXKXM34jc1GaFMFCvIcn5OyXse4f4WGEfBgGb6xkvndfZ.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&cs=540x0"
    },
    {
      "title": "20.04.24 | ШЛ «Alzhan» г.Аксу",
      "imageUrl": "https://sun9-56.userapi.com/s/v1/ig2/0lQQMBUtsH_59dONKc7IJ3aedS7KBQydug_NNrdyiTP_K_h3hVYJGAWM5eiXvwl7phw9TdjQ5A2ohEMwI_kLeeXG.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1621,1280x1921,1440x2161,1706x2560&from=bu&cs=540x0"
    },
    {
      "title": "20.04.24 | ШЛ «Alzhan» г. Лисаковск",
      "imageUrl": "https://sun9-25.userapi.com/s/v1/if2/Ydz0izOZqTIwIwNGBdtsj_TZE6HO6wZo-HJCdRLmeLBnwewAao_1HTCxyolmo7DkV5xsUi9He8_EBfSCtPkK7dPx.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x106,240x159,360x238,480x318,540x358,640x424,720x477,1080x715,1280x848,1440x954,2560x1696&from=bu&cs=540x0"
    },
    {
      "title": "13.04.24 | ШЛ «Alzhan» г.Аксу",
      "imageUrl": "https://sun9-80.userapi.com/s/v1/ig2/eLqTKc27we37pXnk-8zf8NPlvY1GMDqy5l3cciwhwSo_Ny9Pwzj4lYjkmH3DznCflTAENmjIxrYQCVy75eBFGPJ6.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1621,1280x1921,1440x2161,1706x2560&from=bu&cs=540x0"
    },
    {
      "title": "07.04.24 | ШЛ «Alzhan» г. Рудный",
      "imageUrl": "https://sun9-79.userapi.com/s/v1/ig2/0-aunukmvkZfK2wUYBvGM_8VxNTt7qNmqGUkg_wg-_HIhA0HXcdpCGLEz4vZ4fkPAVpIn3Ceehrtkq7Vk47RRBrd.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x285,240x427,360x641,480x855,540x961,640x1139,720x1282,1080x1923,1280x2279,1438x2560&from=bu&cs=540x0"
    },
    {
      "title": "07.04.24 | ШЛ «Alzhan» г. Актобе",
      "imageUrl": "https://sun9-52.userapi.com/s/v1/ig2/mYCBfpTOkfIWnQ8CRY6TwFEghvhjC-ntytbjiBcVqH7__9Qqoj8A2xqtYfBPe2xEbtpfX_D-JUAlvoEQh3DYpeJQ.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&cs=540x0"
    },
    {
      "title": "06.04.24 | ШЛ «Alzhan» г.Хромтау",
      "imageUrl": "https://sun9-59.userapi.com/s/v1/if2/6_MHhT0ZLOx84Bym1FrmclemlPvmALgqgP8_h5OOJEuDCiFUVUC_YfUv5U0mEVThHYq72YoCwyKPXdmGE5iq-zME.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "06.04.24 | ШЛ «Alzhan» г.Аксу",
      "imageUrl": "https://sun9-22.userapi.com/s/v1/ig2/rf2XgNa9bOfuaFA2AhgOhrmM-xpujMAolKdI9IqtagVIpzd4JY7wcIOtE8gRnW5_RS68oFaweRRS0DXOPcXyffCm.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1621,1280x1921,1440x2161,1706x2560&from=bu&cs=540x0"
    },
    {
      "title": "06.04.24 | ШЛ «Alzhan» г. Лисаковск",
      "imageUrl": "https://sun9-77.userapi.com/s/v1/if2/4AyYj5AJAe-dAf6pjRCQ2ZtLLYpXEHfHeCRr0YT868s4Q20pzPTyhychwfepxtjmLTA7-OWxJTDCqf08UowKXJuD.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x106,240x159,360x238,480x318,540x358,640x424,720x477,1080x715,1280x848,1440x954,2560x1696&from=bu&cs=540x0"
    },
    {
      "title": "31.03.24 | ШЛ «Alzhan» г. Рудный",
      "imageUrl": "https://sun9-9.userapi.com/s/v1/ig2/GoZ9GxVtMB9IcTMEg8HLNOEEtP3Qubj7Izncg48XIdFHPCxAKPzFMseNxia9dKQpcYEKRk4AMSIAgH0t1tBbJtne.jpg?quality=95&as=32x57,48x86,72x128,108x192,160x285,240x428,360x641,480x855,540x962,640x1140,720x1283,1080x1924,1280x2280,1437x2560&from=bu&cs=540x0"
    },
    {
      "title": "31.03.24 | ШЛ «Alzhan» г. Актобе",
      "imageUrl": "https://sun9-15.userapi.com/s/v1/if2/xXQdhbPtfjl8Lz6QhO4VJoecrddNAw-TS_5p5nmoofX34sbrUkOnDaQIC2XgOYa0NL3hLv1ySXVt08y_kFvPM7kA.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&cs=540x0"
    },
    {
      "title": "30.03.24 | ШЛ «Alzhan» г.Аксу",
      "imageUrl": "https://sun9-64.userapi.com/s/v1/ig2/QwEiq_RtWrmrJ9ccVtmaj9tRvcvIsSjQCNwWEbEAsxMFy5_1H6vbwGwwyPys77deSXI4i8jL1kWzLo5piEQulqZZ.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "30.03.24 | ШЛ «Alzhan» г.Хромтау",
      "imageUrl": "https://sun9-55.userapi.com/s/v1/ig2/Bhul7KG-djnBFADJC_aEpiTEwf_HzLR49QWICZsKbUDjvKFVK0nxGq7XAoFXVXqpQgpifUZBK14NTFFFd6PuHjZc.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "30.03.24 | ШЛ «Alzhan» г. Лисаковск",
      "imageUrl": "https://sun9-9.userapi.com/s/v1/if2/SkVRlz4s9e5a-KbKASg37E9feJ4KIlm3ZmcHqwaKhRpHeQUPXyGhM1RDJuqpFYHpq5ZByLjXiMXQ25kjzh8tbYvL.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x106,240x159,360x238,480x318,540x358,640x424,720x477,1080x715,1280x848,1440x954,2560x1696&from=bu&cs=540x0"
    },
    {
      "title": "17.03.24 | ШЛ «Alzhan» г. Актобе",
      "imageUrl": "https://sun9-48.userapi.com/s/v1/if2/NorCXgclQYG9QRYygbPEF1DdbE6JWnUK3kLyW6cxzgCoPiYjx5QRuxAkmA09eBLdljUwa62JZDaA4RZ_8DK0_9k9.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&cs=540x0"
    },
    {
      "title": "17.03.24 | ШЛ «Alzhan» г. Рудный",
      "imageUrl": "https://sun9-88.userapi.com/s/v1/ig2/V5r3enhpuSyPPVnhAIPtOLvpKsBy5bLRDQw4ftNTxPEPb0W1_hIBG0xQgn-ACDSorFLYkTy5N84uUiK_iW6aZCpb.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x285,240x427,360x641,480x855,540x961,640x1139,720x1282,1080x1923,1280x2279,1438x2560&from=bu&cs=540x0"
    },
    {
      "title": "16.03.24 | ШЛ «Alzhan» г.Хромтау",
      "imageUrl": "https://sun9-17.userapi.com/s/v1/ig2/dP1g-gh73C-EKHcMX9fIusjiYdRvmPjSj-rQmCOPwpjGoORXDEPpNTztdGYq_zJk6sik5R9g9DiFQIBjvvGsGjQz.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "16.03.24 | ШЛ «Alzhan» г. Лисаковск",
      "imageUrl": "https://sun9-79.userapi.com/s/v1/if2/zgRpvVfoLUFF_qeThCEXuOorBFCunBMjMd5I7raqNp7JVquWYwuX-D8HM8QGojCHEh10NDGlQpJvg4HUwYU2rGIj.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x106,240x159,360x238,480x318,540x358,640x424,720x477,1080x715,1280x848,1440x954,2560x1696&from=bu&cs=540x0"
    },
    {
      "title": "16.03.24 | ШЛ «Alzhan» г.Аксу",
      "imageUrl": "https://sun9-77.userapi.com/s/v1/ig2/Mbgeo5vbkticArIil8gAGncBH4XKbNe9obgBw5QMjp8uMW_Z0t4pZ4Irm-2N1Z4LF0U-b1gNbmkTHDN9h8e6pEE_.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,960x1280&from=bu&cs=540x0"
    },
    {
      "title": "10.03.24 | ШЛ «Alzhan» г. Рудный",
      "imageUrl": "https://sun9-78.userapi.com/s/v1/ig2/dOcX_cOZwwtduRjbgtvACwMYkm9oNFE6UnktAjXf7wncQ0Q5F0W8nz_oaqRARULjYsxjGxtE0r1ecszua5inA6wZ.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x285,240x427,360x641,480x855,540x961,640x1139,720x1282,1080x1923,1280x2279,1438x2560&from=bu&cs=540x0"
    },
    {
      "title": "09.03.24 | ШЛ «Alzhan» г. Лисаковск",
      "imageUrl": "https://sun9-41.userapi.com/s/v1/if2/excM7wpuA35KR6SrhqxQvzDpIH70HQaEnkngWOtOpGVP51cAyJVrBz2gdJ9wl7AtHJUU6Y4e7pPKCSlcbQzmE_XF.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "09.03.24 | ШЛ «Alzhan» г.Аксу",
      "imageUrl": "https://sun9-39.userapi.com/s/v1/if2/Q2otqtzGd3IjIZjTDqmaXMFndx1gPyRhddMAenTZ64QkAfTqFAiBvAgHk37_XSy9PAJzbkhXMHFNGjLYwx-JqgYP.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "03.03.24 | ШЛ «Alzhan» г. Рудный",
      "imageUrl": "https://sun9-61.userapi.com/s/v1/ig2/4mo4B8la77nB8d2sz0hJzDyHpwJuR9Esy4DFNHeYYMAyzZWUrG6DGQGtFRHN1OnbGZ-y8wgR2H04oNzooxMtAMGT.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x285,240x427,360x641,480x855,540x961,640x1139,720x1282,1080x1923,1280x2279,1438x2560&from=bu&cs=540x0"
    },
    {
      "title": "03.03.24 | ШЛ «Alzhan» г. Актобе",
      "imageUrl": "https://sun9-36.userapi.com/s/v1/ig2/f4WulE9P6ir5ShQFVqU7puR7Q1RvovmcbnZ12KGFdC0DtOKH1TeO5UIYgFdJXFHaKS-uxD4G9dC4IY1uw3L-s1SP.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&cs=540x0"
    },
    {
      "title": "03.03.24 | ШЛ «Alzhan» г.Хромтау",
      "imageUrl": "https://sun9-83.userapi.com/s/v1/if2/fsUsYftLwf9niRBoVn-jmMwIoFLMNGbWKs0xU8pWLdVm-xFH44vvmO8vbFsXUgU1kZ5CZW3ShRbAB6KymocBTi7i.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "02.03.24 | ШЛ «Alzhan» г. Лисаковск",
      "imageUrl": "https://sun9-23.userapi.com/s/v1/if2/TcQ16OSj8F_HKr11BzH1XinyPPYrE2SQXkWWNM-5I0Cxm8qd1eqUS_ROl7YIx2j39rk_e5BQmZ1FOcoedYxObLZ-.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "02.03.24 | ШЛ «Alzhan» г.Аксу",
      "imageUrl": "https://sun9-86.userapi.com/s/v1/ig2/luJcgkgcac4aOor2kP-A68-cIJbrxcweQldLubnCSG-DTeqoS2d7Le4wPgEY4dXWzSe6XH1VD4N1v53E3My-Wf25.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "25.02.24 | ШЛ «Alzhan» г. Рудный",
      "imageUrl": "https://sun9-16.userapi.com/s/v1/ig2/yrT-69hCWjFNhQwhHUV2QaerO0JArJfqixBIHyNLwSTz3TZVWtDAmslzBWB2nDVPV35VwsOPCp8avl4sjpuxFhUS.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x285,240x427,360x641,480x855,540x961,640x1139,720x1282,1080x1923,1280x2279,1438x2560&from=bu&cs=540x0"
    },
    {
      "title": "24.02.24 | ШЛ «Alzhan» г. Лисаковск",
      "imageUrl": "https://sun9-10.userapi.com/s/v1/if2/pU-4p14xn1VjwxeqGZgcY9DmEHjGShq2PwemtEKlCoaSk1bcpmxOom7tds3oDkyfozzLYjxdE-thaBU7_jauPvtA.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "24.02.24 | ШЛ «Alzhan» г.Аксу",
      "imageUrl": "https://sun9-58.userapi.com/s/v1/if2/MYyXYmUJaVtM2XT6uyfZOK_Oh2f6_MjOJxdyugWQ5xUNCPfrEeKIq_8OnLOUXW3noAiLQHnkEH7d6sl5devd8asx.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "24.02.24 | ШЛ «Alzhan» г.Хромтау",
      "imageUrl": "https://sun9-25.userapi.com/s/v1/if2/bajPS5bPUncsirzBJoWh50-vO6wbAZI2bIJS4zV9gCAVAmJOMyg3J1ThJLDSOfukL30lFIs_W4X32w19_pMxl-bM.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "18.02.24 | ШЛ «Alzhan» г. Рудный",
      "imageUrl": "https://sun9-24.userapi.com/s/v1/ig2/egazUrq2XdKUQdv1-ejKV7a7_KBnQmeWUR7G7sFg1XQc2NVKysJiVb5bKWQtxcBh7wBVqIiJm8JSHIEQ-Bnze8A9.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x285,240x427,360x641,480x855,540x961,640x1139,720x1282,1080x1923,1280x2279,1438x2560&from=bu&cs=540x0"
    },
    {
      "title": "17.02.24 | ШЛ «Alzhan» г. Лисаковск",
      "imageUrl": "https://sun9-33.userapi.com/s/v1/if2/2nKYpHWuE6eSwMowMtYLl7YZj3w-Amt1Jd1EjpvbcpS3fnKcX43UKsi_7Zvv_TaaPIEGxImP1mYbheiLBxeYmhUP.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "17.02.24 | ШЛ «Alzhan» г.Аксу",
      "imageUrl": "https://sun9-60.userapi.com/s/v1/ig2/l_inq0zH5st-FdkUVOqEtI9SiJ2K84U4dWNxMkCBtYkQ8aZM0Xi_ox3zYhg4PPlXNG_idB-8O8qQwcatlCeF01GG.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "17.02.24 | ШЛ «Alzhan» г.Хромтау",
      "imageUrl": "https://sun9-73.userapi.com/s/v1/ig2/D0Vm62o8KPRFGHw7Lj6HUk6EXJRJD0ZcRp8mpnSjHrGpWJ_95IcbArUKCzwYTrfTHFcUjqUcymaj_HV9APNaAkKV.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "11.02.24 | ШЛ «Alzhan» г. Рудный",
      "imageUrl": "https://sun9-79.userapi.com/s/v1/ig2/35dkWYsufbS2z506BbPgwPV4Hm6b8JoliAl1VYQhA7x-B73Dr6nOAD7Aq7ROqkSIXWFWEWqPwoQjsAkUBhctleCB.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x285,240x427,360x641,480x855,540x961,640x1139,720x1282,1080x1923,1280x2279,1438x2560&from=bu&cs=540x0"
    },
    {
      "title": "04.02.24 | ШЛ «Alzhan» г. Актобе",
      "imageUrl": "https://sun9-51.userapi.com/s/v1/ig2/ySsBrc3x548fEJYUHyobsevDFhBiPfC8TnqMDKuDU8_VMpht6eLZcD1Hps_qNQPbplqL_T2-QkW38TWHiBOFS0wk.jpg?quality=95&as=32x44,48x65,72x98,108x147,160x218,240x327,360x490,480x653,540x735,640x871,720x980,1080x1470,1280x1742,1440x1960,1881x2560&from=bu&cs=540x0"
    },
    {
      "title": "04.02.24 | ШЛ «Alzhan» г. Рудный, ч.2",
      "imageUrl": "https://sun9-37.userapi.com/s/v1/ig2/VmH3uXLMuvtXkKgDe60K_mPTnHxXR6b9g3IoxJIHaAeCuxAGmffHQjzkAh3AD779q5zPd2fn53v0bA2Ikt3E3WYw.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x285,240x427,360x641,480x855,540x961,640x1139,720x1282,1080x1923,1280x2279,1438x2560&from=bu&cs=540x0"
    },
    {
      "title": "04.02.24 | ШЛ «Alzhan» г. Рудный",
      "imageUrl": "https://sun9-23.userapi.com/s/v1/if2/mgTX99Ujh9O6-_Bdb7uKwsbSLRe3OmWpecCCRyOwo4400HsR_lneoapR5tKSCGEIBg7hy4fVGnAAccFik3Xeg1zt.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x161,360x241,480x322,540x362,640x429,720x483,1080x724,1280x858,1440x966,2560x1717&from=bu&cs=540x0"
    },
    {
      "title": "03.02.24 | ШЛ «Alzhan» г.Хромтау",
      "imageUrl": "https://sun9-57.userapi.com/s/v1/ig2/F9NhaU0ewzdkQpqp5MPfZdpbxeArq-1u43zGrdujAI0ho22LOHdOWI8hhQ00iv6k7kUmKOxuvQv9HMGPKOnGb8mZ.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=540x0"
    },
    {
      "title": "03.02.24 | ШЛ «Alzhan» г. Лисаковск, ч.2",
      "imageUrl": "https://sun9-65.userapi.com/s/v1/if2/SKBZw5PfSseRTk_CwSz7XVNqNLNPujtLyiLSj_TiZM8i7vpuycig4Ssoa6_7bFbUtO3cZ9oScu-IIOfPDKtg15u3.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,1600x1200&from=bu&cs=540x0"
    },
    {
      "title": "03.02.24 | ШЛ «Alzhan» г. Лисаковск",
      "imageUrl": "https://sun9-55.userapi.com/s/v1/if2/Ibu3l3oZPAuVo6oYsNT3tn45lIVd80wHxaEO7FjTWwOTNNAbdMBpGr8QweBRM0WJohN66QWLxeR5xYh-QOo2li-L.jpg?quality=95&as=32x23,48x34,72x51,108x76,160x113,240x170,360x255,480x340,540x382,640x453,720x510,1080x764,1280x906,1440x1019,2560x1812&from=bu&cs=540x0"
    },
    {
      "title": "03.02.24 | ШЛ «Alzhan» г.Аксу, ч.2",
      "imageUrl": "https://sun9-73.userapi.com/s/v1/if2/7BmVya1lzRbWh6cRXgxYP7emzNufKqm9WMUQQTG04c03t9FMlHn0lNYSORXqwqvf_USt5AX5UkwfS0dVPnw9nYJE.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "03.02.24 | ШЛ «Alzhan» г.Аксу",
      "imageUrl": "https://sun9-50.userapi.com/s/v1/if2/GMAzBCeJg2FOzFtiGNVkalOpOQXrZaQrSVmLPO8hyGrDA5QmOaOT0fq9fE5Qf7jFqtV7nQyUdAPR05Z_6qbPMDrb.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "28.01.24 | ШЛ «Alzhan» г. Актобе",
      "imageUrl": "https://sun9-61.userapi.com/s/v1/if2/xmnoGmqYWl_J8eZYbFBSceuM0cGd6uBCy-FZfzBZIw9A7YJffVZW0daT51k4dNKGAi6RmA9PRqA3ItEU3cYn_ENc.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "27.01.24 | ШЛ «Alzhan» г.Хромтау",
      "imageUrl": "https://sun9-51.userapi.com/s/v1/ig2/psN3WOESpi4X4LZnMP--R-MbfonAb1gr-_SKl_Tt5uqTiDjUO-PXRd1j23avI7W2qNAIOp9TaKGnPGCwDCYABUVi.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x479,480x639,540x719,640x852,720x959,1080x1438,1280x1705,1440x1918,1922x2560&from=bu&cs=540x0"
    },
    {
      "title": "27.01.24 | ШЛ «Alzhan» г.Аксу",
      "imageUrl": "https://sun9-78.userapi.com/s/v1/if2/r6Btj-ax5SwjoqiEwiV5_r_WxGsYgiuA_VHKYC6tQNkAwoefvH2O0nWOH-wmd3AHbSnHU95utgHf4rVgWvkSdqh6.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x426,720x480,800x533&from=bu&cs=540x0"
    },
    {
      "title": "20.01.24 | ШЛ «Alzhan» г.Аксу",
      "imageUrl": "https://sun9-63.userapi.com/s/v1/if2/KLv3ke1Jv3naK4p60DmRqChiClyWGOrwh_VEW-xu6HO2wtWpM4onSO82MrpcHvbbWdj2Ts2RmFXKzeXHZsveIcbQ.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=540x0"
    },
    {
      "title": "Основной альбом",
      "imageUrl": "https://sun9-81.userapi.com/s/v1/ig2/9pFyhsXdL2Mf7Erhr93SH3R1950gW_-XUv3V1692mVi5g2T_IR3SqvjKP5ZpDOj0WYgVznIiyuFKQLQ5t-wHK-Jw.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2000x2000&from=bu&cs=540x0"
    }
  ]

  const galleryMockFilters = [
    { key: "all", label: "Все фото" },
    { key: "games", label: "Игры" },
    { key: "finals", label: "Финалы" },
    { key: "teams", label: "Команды" },
  ];

  const filteredStreams = useMemo(() => {
    const queryValue = streamFilters.query.trim().toLowerCase();
    const cityValue = String(streamFilters.city || "").toLowerCase();
    const seasonValue = String(streamFilters.season || "").trim();

    const list = streamsData.filter((project) => {
      const title = String(project?.title || "").toLowerCase();
      const city = String(project?.city || "").toLowerCase();
      const season = String(project?.season || "").trim();
      const projectDate = parsePublishedDate(project);
      const projectYear = projectDate ? String(projectDate.getFullYear()) : "";
      const playlistTitle = String(project?.playlistTitle || "").toLowerCase();
      const composedText = `${title} ${playlistTitle}`.trim();

      const seasonMatches =
        !seasonValue || season === seasonValue || projectYear === seasonValue;
      const cityMatches = !cityValue || city === cityValue || title.includes(cityValue);
      const queryMatches = !queryValue || composedText.includes(queryValue);

      return seasonMatches && cityMatches && queryMatches;
    });

    list.sort((left, right) => {
      const leftTime = parsePublishedDate(left)?.getTime() || 0;
      const rightTime = parsePublishedDate(right)?.getTime() || 0;
      const leftRank = Number.isFinite(left?.sortRank)
        ? left.sortRank
        : Number.MAX_SAFE_INTEGER;
      const rightRank = Number.isFinite(right?.sortRank)
        ? right.sortRank
        : Number.MAX_SAFE_INTEGER;

      if (!leftTime && !rightTime) {
        return streamFilters.sort === "oldest"
          ? rightRank - leftRank
          : leftRank - rightRank;
      }

      if (!leftTime || !rightTime || leftTime === rightTime) {
        return streamFilters.sort === "oldest"
          ? rightRank - leftRank
          : leftRank - rightRank;
      }

      return streamFilters.sort === "oldest"
        ? leftTime - rightTime
        : rightTime - leftTime;
    });

    return list;
  }, [streamFilters]);

  const streamTotalPages = Math.max(
    1,
    Math.ceil(filteredStreams.length / streamsPerPage)
  );

  const paginatedStreams = useMemo(() => {
    const start = (streamPage - 1) * streamsPerPage;
    return filteredStreams.slice(start, start + streamsPerPage);
  }, [filteredStreams, streamPage]);

  useEffect(() => {
    setStreamPage(1);
  }, [
    streamFilters.season,
    streamFilters.city,
    streamFilters.query,
    streamFilters.sort,
  ]);

  useEffect(() => {
    if (streamPage > streamTotalPages) {
      setStreamPage(streamTotalPages);
    }
  }, [streamPage, streamTotalPages]);

  return (
    <>
      <div className="docs-wrap" style={{ paddingBottom: 0 }}>
        <div className="docs-header">
          <div className="docs-breadcrumbs">
            Главная - <span>Проекты</span>
          </div>
        </div>
      </div>

      <div className="game-stats-page">
        <div className="container projects-page">
          <section className="projects-hero">
            <div className="projects-hero__titleWrap">
              <h1 className="title">Наши проекты</h1>
              <p>Два направления: фотоархив матчей и видеотрансляции.</p>
            </div>

            <div className="project-switch">
              <button
                className={"project-switch__card " + (activeProject === "gallery" ? "is-active" : "")}
                type="button"
                onClick={() => setActiveProject("gallery")}
              >
                <span className="project-switch__label">Галерея</span>
                <span className="project-switch__meta">
                  Фото матчей и событий
                </span>
              </button>

              <button
                className={"project-switch__card " + (activeProject === "broadcast" ? "is-active" : "")}
                type="button"
                onClick={() => setActiveProject("broadcast")}
              >
                <span className="project-switch__label">Трансляции</span>
                <span className="project-switch__meta">
                  Видеоархив с фильтрами
                </span>
              </button>
            </div>
          </section>

          {activeProject === "gallery" && (
            <section className="project-block">
              <div className="project-block__head">
                <h2>Галерея</h2>
                <p>Фильтр пока в режиме муляжа, скоро подключим данные.</p>
              </div>

              <div className="project-filters project-filters--mock">
                {galleryMockFilters.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    className={"mock-filter-chip " + (galleryFilter === item.key ? "is-active" : "")}
                    onClick={() => setGalleryFilter(item.key)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="project-filter-hint">
                Текущий выбор:{" "}
                {galleryMockFilters.find((item) => item.key === galleryFilter)
                  ?.label || "Все фото"}
              </div>

              <Gallery images={vkGalleryDemo?.length ? vkGalleryDemo : archivePhotos} />
            </section>
          )}

          {activeProject === "broadcast" && (
            <section className="project-block">
              <div className="project-block__head">
                <h2>Трансляции</h2>
                <p>Фильтрация и пагинация работают для удобного поиска матчей.</p>
              </div>

              <div className="project-filters project-filters--streams">
                <select
                  value={streamFilters.season}
                  onChange={(event) =>
                    setStreamFilters((prev) => ({
                      ...prev,
                      season: event.target.value,
                    }))
                  }
                >
                  <option value="">Все сезоны</option>
                  {streamSeasonOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>

                <select
                  value={streamFilters.city}
                  onChange={(event) =>
                    setStreamFilters((prev) => ({
                      ...prev,
                      city: event.target.value,
                    }))
                  }
                >
                  <option value="">Все города</option>
                  {streamCityOptions.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  value={streamFilters.query}
                  placeholder="Поиск по названию"
                  onChange={(event) =>
                    setStreamFilters((prev) => ({
                      ...prev,
                      query: event.target.value,
                    }))
                  }
                />

                <select
                  value={streamFilters.sort}
                  onChange={(event) =>
                    setStreamFilters((prev) => ({
                      ...prev,
                      sort: event.target.value,
                    }))
                  }
                >
                  <option value="newest">Сначала новые</option>
                  <option value="oldest">Сначала старые</option>
                </select>
              </div>

              <div className="project-filter-hint">
                Найдено трансляций: {filteredStreams.length}
              </div>

              {paginatedStreams.length > 0 ? (
                <div className="projects-grid">
                  {paginatedStreams.map((project) => (
                    <MatchCard
                      key={project.videoId}
                      imageSrc={project.thumbnail}
                      alt={project.title}
                      date={project.publishedDate || project.publishedTimeText || "-"}
                      duration={project.lengthText}
                      title={project.title}
                      href={project.watchUrl}
                    />
                  ))}
                </div>
              ) : (
                <div className="projects-empty">
                  По выбранным фильтрам трансляции не найдены.
                </div>
              )}

              {filteredStreams.length > streamsPerPage && (
                <div className="projects-pagination">
                  <Pagination
                    currentPage={streamPage}
                    totalPages={streamTotalPages}
                    onPageChange={setStreamPage}
                    siblingCount={1}
                    boundaryCount={1}
                    showPrevNext
                    showFirstLast
                    size="md"
                  />
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </>
  );
}
