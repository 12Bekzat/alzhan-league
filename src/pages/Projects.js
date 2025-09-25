// src/pages/ProjectsPage.jsx
import React, { useCallback, useState } from "react";
import { Gallery } from "../components/Gallery";
import WithSkeleton from "../components/WIthSkeleton";
import MatchCard from "../components/MatchCard";
import Pagination from "../components/Pagination";
import StatsFilterPanel from "../components/StatsFilterPanel";
import ProjectFilterPanel from "../components/ProjectFilterPanel";

const mockProjects = [
  {
    videoId: "oFO7Yio3Kkg",
    title: "C0001",
    thumbnail:
      "https://i.ytimg.com/vi/oFO7Yio3Kkg/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFooRzAP&rs=AOn4CLBOQu0U8Ejyoqv9ggnzWqHyke83tQ",
    watchUrl: "https://www.youtube.com/watch?v=oFO7Yio3Kkg",
    embedUrl: "https://www.youtube.com/embed/oFO7Yio3Kkg",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "1 month ago",
    publishedDate: "",
    lengthText: "1:54:11",
    viewCountText: "96 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "tO0nuOWqDOI",
    title: "Распределение по группам г. Актобе, мальчики",
    thumbnail:
      "https://i.ytimg.com/vi/tO0nuOWqDOI/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_giAAtAFigIMCAAQARhbIGEoZTAP&rs=AOn4CLDwlrxk3CdjYpriZRt5ZJ4lWFbE5Q",
    watchUrl: "https://www.youtube.com/watch?v=tO0nuOWqDOI",
    embedUrl: "https://www.youtube.com/embed/tO0nuOWqDOI",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "1 year ago",
    publishedDate: "",
    lengthText: "0:22",
    viewCountText: "173 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "YQFE7lb4q5Q",
    title:
      "КГУ СОШ №22 имени Бауыржана Момышулы vs Лицей имени Аманжола Шамкенова Highlights",
    thumbnail:
      "https://i.ytimg.com/vi/YQFE7lb4q5Q/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhAIGIoZTAP&rs=AOn4CLDJ-5Ytq_fNEhYMRnXgK_7bXbzbNA",
    watchUrl: "https://www.youtube.com/watch?v=YQFE7lb4q5Q",
    embedUrl: "https://www.youtube.com/embed/YQFE7lb4q5Q",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "1 year ago",
    publishedDate: "",
    lengthText: "2:31",
    viewCountText: "213 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "0kvd045glZY",
    title: "СОШ №26 мальчики vs КГУ СОШ 18 Дикие панды Highlights",
    thumbnail:
      "https://i.ytimg.com/vi/0kvd045glZY/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARg_IGQoZTAP&rs=AOn4CLCmql16aCBAvvVvjWftEHL7dgVo3w",
    watchUrl: "https://www.youtube.com/watch?v=0kvd045glZY",
    embedUrl: "https://www.youtube.com/embed/0kvd045glZY",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "1 year ago",
    publishedDate: "",
    lengthText: "4:11",
    viewCountText: "129 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "aF7p8ARt4ek",
    title: "КГУ СОШ 5 Легион vs СОШ №26 девочки Highlights",
    thumbnail:
      "https://i.ytimg.com/vi/aF7p8ARt4ek/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARg9IGUoWjAP&rs=AOn4CLCB_1JzcO58Oion0KDAWFtQzIXYDA",
    watchUrl: "https://www.youtube.com/watch?v=aF7p8ARt4ek",
    embedUrl: "https://www.youtube.com/embed/aF7p8ARt4ek",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "1 year ago",
    publishedDate: "",
    lengthText: "3:11",
    viewCountText: "115 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "rrCVtRid1rE",
    title: 'Суперфинал Школьной Лиги "Alzhan" сезон 2024/24 г.Хромтау 8-11 мая',
    thumbnail:
      "https://i.ytimg.com/vi/rrCVtRid1rE/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFsoRDAP&rs=AOn4CLCURW8T0ghX3-5jZUQdtKxEQcov7Q",
    watchUrl: "https://www.youtube.com/watch?v=rrCVtRid1rE",
    embedUrl: "https://www.youtube.com/embed/rrCVtRid1rE",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "3 months ago",
    publishedDate:
      "17 сильнейших команд из 7 регионов Казахстана. 3 дня эмоций, борьбы и настоящего баскетбола.\n\nСмотрите, как...",
    lengthText: "4:15",
    viewCountText: "382 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "kAZNhIXLQkM",
    title: "г.Хромтау, 5-6 класс, мальчики",
    thumbnail:
      "https://i.ytimg.com/vi/kAZNhIXLQkM/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBvgeAAtAFigIMCAAQARgRIGQocjAP&rs=AOn4CLA6QMAv8CWEZaokWeTYI1kl5pc0PQ",
    watchUrl: "https://www.youtube.com/watch?v=kAZNhIXLQkM",
    embedUrl: "https://www.youtube.com/embed/kAZNhIXLQkM",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "3 months ago",
    publishedDate: "",
    lengthText: "1:22",
    viewCountText: "160 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "TCurpKjcPdI",
    title: "г.Павлодар, 5-6 класс, мальчики",
    thumbnail:
      "https://i.ytimg.com/vi/TCurpKjcPdI/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBvgeAAtAFigIMCAAQARgTIGMocjAP&rs=AOn4CLArT857S_6FVZikEEGgXcLqqetfeQ",
    watchUrl: "https://www.youtube.com/watch?v=TCurpKjcPdI",
    embedUrl: "https://www.youtube.com/embed/TCurpKjcPdI",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "3 months ago",
    publishedDate: "",
    lengthText: "1:20",
    viewCountText: "263 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "unB-NKL7hg0",
    title: "г.Рудный, 5-6 класс, мальчики",
    thumbnail:
      "https://i.ytimg.com/vi/unB-NKL7hg0/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBvgeAAtAFigIMCAAQARgRIHIoMjAP&rs=AOn4CLAH83fosysSnlgnOovePmQIMVokqg",
    watchUrl: "https://www.youtube.com/watch?v=unB-NKL7hg0",
    embedUrl: "https://www.youtube.com/embed/unB-NKL7hg0",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "3 months ago",
    publishedDate: "",
    lengthText: "1:25",
    viewCountText: "154 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "UivpV1oJLc8",
    title: "г.Актобе, 5-6 класс, мальчики",
    thumbnail:
      "https://i.ytimg.com/vi/UivpV1oJLc8/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBvgeAAtAFigIMCAAQARh_IEMoIDAP&rs=AOn4CLDKAdfD-mQjntmUHKYmKQiB2FLY9w",
    watchUrl: "https://www.youtube.com/watch?v=UivpV1oJLc8",
    embedUrl: "https://www.youtube.com/embed/UivpV1oJLc8",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "3 months ago",
    publishedDate: "",
    lengthText: "1:20",
    viewCountText: "389 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "tGE2Tzh5iUs",
    title: "г.Рудный, 7-8 класс, девочки",
    thumbnail:
      "https://i.ytimg.com/vi/tGE2Tzh5iUs/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBvgeAAtAFigIMCAAQARgRIHIoNTAP&rs=AOn4CLB1QnD6Xqn3yuC6mwLeGU08ZxOajA",
    watchUrl: "https://www.youtube.com/watch?v=tGE2Tzh5iUs",
    embedUrl: "https://www.youtube.com/embed/tGE2Tzh5iUs",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "3 months ago",
    publishedDate: "",
    lengthText: "1:27",
    viewCountText: "248 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "948IjWfXm5g",
    title: "г.Актобе, 7-8 класс, девочки",
    thumbnail:
      "https://i.ytimg.com/vi/948IjWfXm5g/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBvgeAAtAFigIMCAAQARgRIGMocjAP&rs=AOn4CLC1kke3u63T80W9olTRTXJMUWLenA",
    watchUrl: "https://www.youtube.com/watch?v=948IjWfXm5g",
    embedUrl: "https://www.youtube.com/embed/948IjWfXm5g",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "3 months ago",
    publishedDate: "",
    lengthText: "1:20",
    viewCountText: "97 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "xjpCauJPVYI",
    title: "г.Актобе, 7-8 класс, мальчики",
    thumbnail:
      "https://i.ytimg.com/vi/xjpCauJPVYI/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBvgeAAtAFigIMCAAQARgRIGUocjAP&rs=AOn4CLB-pNC5e_sMDnAtNDp08qMh4db5Zg",
    watchUrl: "https://www.youtube.com/watch?v=xjpCauJPVYI",
    embedUrl: "https://www.youtube.com/embed/xjpCauJPVYI",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "3 months ago",
    publishedDate: "",
    lengthText: "1:25",
    viewCountText: "220 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "mKBZg5KzdVU",
    title: "г.Рудный, 7-8 класс, мальчики",
    thumbnail:
      "https://i.ytimg.com/vi/mKBZg5KzdVU/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBvgeAAtAFigIMCAAQARgRIHIoLjAP&rs=AOn4CLD_xICKqtA09GDNS9RKdhR0ScT-_g",
    watchUrl: "https://www.youtube.com/watch?v=mKBZg5KzdVU",
    embedUrl: "https://www.youtube.com/embed/mKBZg5KzdVU",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "3 months ago",
    publishedDate: "",
    lengthText: "1:30",
    viewCountText: "188 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "HfjsWKDFgIE",
    title:
      "СОШ №26  — СШ им. Николая Островского | Суперфинал ШЛ «Alzhan» | Девочки 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/HfjsWKDFgIE/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFgoUTAP&rs=AOn4CLDOmaur-YWQRLUaqQAWQoeiO2w4SQ",
    watchUrl: "https://www.youtube.com/watch?v=HfjsWKDFgIE",
    embedUrl: "https://www.youtube.com/embed/HfjsWKDFgIE",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "3 months ago",
    publishedDate: "",
    lengthText: "1:25:59",
    viewCountText: "260 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "vT1rYguYAqA",
    title:
      "КГУ ООШ №4 г. Лисаковск —  Школа-лицей им. Абая | Суперфинал ШЛ «Alzhan» | Девочки 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/vT1rYguYAqA/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFsoSjAP&rs=AOn4CLAtIYae_GyZmTRV8JYD26pAJpg44A",
    watchUrl: "https://www.youtube.com/watch?v=vT1rYguYAqA",
    embedUrl: "https://www.youtube.com/embed/vT1rYguYAqA",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "3 months ago",
    publishedDate: "",
    lengthText: "1:13:27",
    viewCountText: "145 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "XufxpJRaQJg",
    title: "Финал среди девушек 7-8 классов Гимназия №2-Школа №14 г. Рудный",
    thumbnail:
      "https://i.ytimg.com/vi/XufxpJRaQJg/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFQoTDAP&rs=AOn4CLBvb11QrRgoG-aJi1g5CzLISNazFA",
    watchUrl: "https://www.youtube.com/watch?v=XufxpJRaQJg",
    embedUrl: "https://www.youtube.com/embed/XufxpJRaQJg",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "3 months ago",
    publishedDate: "",
    lengthText: "55:27",
    viewCountText: "95 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "_tpqgQLXKdc",
    title:
      "37 гимназия — Qazaq Nomads №16 ЖОББМ | Школьная Лига «Alzhan» Семей 5-6 классы",
    thumbnail:
      "https://i.ytimg.com/vi/_tpqgQLXKdc/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLBXuyGU4uSLpefwrf9EwU_d5IOlgQ",
    watchUrl: "https://www.youtube.com/watch?v=_tpqgQLXKdc",
    embedUrl: "https://www.youtube.com/embed/_tpqgQLXKdc",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "6 months ago",
    publishedDate: "19.01.2025",
    lengthText: "52:49",
    viewCountText: "177 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "Qba79mjLYns",
    title:
      "СОШ № 1 Н. Г. Чернышеского — #11 мектеп | Школьная Лига «Alzhan» Семей 5-6 классы",
    thumbnail:
      "https://i.ytimg.com/vi/Qba79mjLYns/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhgIGUoVTAP&rs=AOn4CLC7eGCbKMl-kOlYFRa4ydc5ISabag",
    watchUrl: "https://www.youtube.com/watch?v=Qba79mjLYns",
    embedUrl: "https://www.youtube.com/embed/Qba79mjLYns",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "6 months ago",
    publishedDate: "19.01.2025",
    lengthText: "47:32",
    viewCountText: "134 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "EsfJllVSVGU",
    title:
      "45 Мектеп — Шүлбі мектеп-кешені | Школьная Лига «Alzhan» Семей 5-6 классы",
    thumbnail:
      "https://i.ytimg.com/vi/EsfJllVSVGU/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhhIGUoUjAP&rs=AOn4CLCOGF5ln0dSDFeQcMknRiLCoat47Q",
    watchUrl: "https://www.youtube.com/watch?v=EsfJllVSVGU",
    embedUrl: "https://www.youtube.com/embed/EsfJllVSVGU",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "6 months ago",
    publishedDate: "19.01.2025",
    lengthText: "47:22",
    viewCountText: "502 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "Leq3UMTNfI4",
    title: "Ramadan — Жарқын | Школьная Лига «Alzhan» Семей 5-6 классы",
    thumbnail:
      "https://i.ytimg.com/vi/Leq3UMTNfI4/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhfIGUoUjAP&rs=AOn4CLCaz6CloW5OpXbN9XoBBIbkNtt3Ow",
    watchUrl: "https://www.youtube.com/watch?v=Leq3UMTNfI4",
    embedUrl: "https://www.youtube.com/embed/Leq3UMTNfI4",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "6 months ago",
    publishedDate: "19.01.2025",
    lengthText: "45:18",
    viewCountText: "163 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "IJ9dFCSGNfw",
    title:
      "СШ 39 — IT школа-лицей №50 | Школьная Лига «Alzhan» Семей 5-6 классы",
    thumbnail:
      "https://i.ytimg.com/vi/IJ9dFCSGNfw/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoTTAP&rs=AOn4CLCziXqWazOF1mQqkpbSnzD2sC8nww",
    watchUrl: "https://www.youtube.com/watch?v=IJ9dFCSGNfw",
    embedUrl: "https://www.youtube.com/embed/IJ9dFCSGNfw",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "6 months ago",
    publishedDate: "19.01.2025",
    lengthText: "44:47",
    viewCountText: "145 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "kbv1F_hfWY4",
    title:
      "СОШ № 1 Н. Г. Чернышеского — Жарқын | Школьная Лига «Alzhan» Семей 5-6 классы",
    thumbnail:
      "https://i.ytimg.com/vi/kbv1F_hfWY4/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIFEoRTAP&rs=AOn4CLDokJhYBPMOPL0VbwqKE3JFvFDN3A",
    watchUrl: "https://www.youtube.com/watch?v=kbv1F_hfWY4",
    embedUrl: "https://www.youtube.com/embed/kbv1F_hfWY4",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "6 months ago",
    publishedDate: "18.01.2025",
    lengthText: "51:01",
    viewCountText: "142 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "sX6H17pbSkY",
    title:
      "Шүлбі мектеп-кешені — 49 Мектеп | Школьная Лига «Alzhan» Семей 5-6 классы",
    thumbnail:
      "https://i.ytimg.com/vi/sX6H17pbSkY/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFsoTzAP&rs=AOn4CLDtUDNBrNbxM9DI7LGWkVIYwa99QA",
    watchUrl: "https://www.youtube.com/watch?v=sX6H17pbSkY",
    embedUrl: "https://www.youtube.com/embed/sX6H17pbSkY",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "6 months ago",
    publishedDate: "18.01.2025",
    lengthText: "46:31",
    viewCountText: "280 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "YgnQtNRclKI",
    title:
      "#11 мектеп — КГУ «Средняя школа имени Николая Островского» | Школьная Лига «Alzhan» Семей 5-6 классы",
    thumbnail:
      "https://i.ytimg.com/vi/YgnQtNRclKI/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhOIGUoWTAP&rs=AOn4CLCFuNhobo0KmgoV99JdI6FyffMjAg",
    watchUrl: "https://www.youtube.com/watch?v=YgnQtNRclKI",
    embedUrl: "https://www.youtube.com/embed/YgnQtNRclKI",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "6 months ago",
    publishedDate: "18.01.2025",
    lengthText: "46:33",
    viewCountText: "151 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "yT7Hb-uuRn4",
    title:
      "49 Мектеп — КГУ «Средняя школа имени Николая Островского» | Школьная Лига «Alzhan» Семей 5-6 классы",
    thumbnail:
      "https://i.ytimg.com/vi/yT7Hb-uuRn4/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFgoSjAP&rs=AOn4CLDwqIDo6llE70fZIIzEc0ZjHFhGIw",
    watchUrl: "https://www.youtube.com/watch?v=yT7Hb-uuRn4",
    embedUrl: "https://www.youtube.com/embed/yT7Hb-uuRn4",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "6 months ago",
    publishedDate: "18.01.2025",
    lengthText: "42:21",
    viewCountText: "355 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "JYrSFTnK734",
    title: "А.Ибраева — 45 мектеп | Школьная Лига «Alzhan» Семей 5-6 классы",
    thumbnail:
      "https://i.ytimg.com/vi/JYrSFTnK734/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoWDAP&rs=AOn4CLBW3wrHL_czlLl7UYN-aJ08iJBeRg",
    watchUrl: "https://www.youtube.com/watch?v=JYrSFTnK734",
    embedUrl: "https://www.youtube.com/embed/JYrSFTnK734",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "6 months ago",
    publishedDate: "18.01.2025",
    lengthText: "42:13",
    viewCountText: "183 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "KgyxEKrc614",
    title: "Гимназия №2 — Школа №4 | Школьная Лига «Alzhan» Хромтау",
    thumbnail:
      "https://i.ytimg.com/vi/KgyxEKrc614/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFooRTAP&rs=AOn4CLDCSJkFpeHWV59J_WghemVxGVE5Og",
    watchUrl: "https://www.youtube.com/watch?v=KgyxEKrc614",
    embedUrl: "https://www.youtube.com/embed/KgyxEKrc614",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "7 months ago",
    publishedDate: "21.12.2024",
    lengthText: "1:05:46",
    viewCountText: "214 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "a9pzBhjOVvA",
    title: "Школа №3 - Школы №4 | Школьная Лига «Alzhan» Хромтау",
    thumbnail:
      "https://i.ytimg.com/vi/a9pzBhjOVvA/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGMoUTAP&rs=AOn4CLC-yqMoVJ1iMoUkqGNzXLxwNaL8VA",
    watchUrl: "https://www.youtube.com/watch?v=a9pzBhjOVvA",
    embedUrl: "https://www.youtube.com/embed/a9pzBhjOVvA",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "8 months ago",
    publishedDate: "",
    lengthText: "1:04:19",
    viewCountText: "376 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "tP0AlzsYDdY",
    title: "Актобе жеребьевка 7-8 класс мальчики",
    thumbnail:
      "https://i.ytimg.com/vi/tP0AlzsYDdY/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_giAAtAFigIMCAAQARhaIGAoZTAP&rs=AOn4CLAGk0VDbyEPu4cuJ-swKNRbDIswcA",
    watchUrl: "https://www.youtube.com/watch?v=tP0AlzsYDdY",
    embedUrl: "https://www.youtube.com/embed/tP0AlzsYDdY",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "8 months ago",
    publishedDate: "",
    lengthText: "0:20",
    viewCountText: "103 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "n9p1exzpExk",
    title: "PIT — ISKER | Летний Кубок | ФИНАЛ",
    thumbnail:
      "https://i.ytimg.com/vi/n9p1exzpExk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOVM7wlnMarlHBBidg9yQaIuErxw",
    watchUrl: "https://www.youtube.com/watch?v=n9p1exzpExk",
    embedUrl: "https://www.youtube.com/embed/n9p1exzpExk",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 2 months ago",
    publishedDate: "08.06.2025",
    lengthText: "1:56:15",
    viewCountText: "295 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "Rb1J4DrCf_8",
    title: "YETI — Do Bro | Летний Кубок | Матч за 3-е место",
    thumbnail:
      "https://i.ytimg.com/vi/Rb1J4DrCf_8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7TUzpUH6TvrXYW9GhSBE7KyoOOQ",
    watchUrl: "https://www.youtube.com/watch?v=Rb1J4DrCf_8",
    embedUrl: "https://www.youtube.com/embed/Rb1J4DrCf_8",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 2 months ago",
    publishedDate: "08.06.2025",
    lengthText: "1:27:01",
    viewCountText: "164 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "0c1prR_rCvo",
    title: "ISKER — Do Bro | Летний Кубок | Плейофф",
    thumbnail:
      "https://i.ytimg.com/vi/0c1prR_rCvo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1SsgvTYzJlKlPzi8qLwyRnuzQ1g",
    watchUrl: "https://www.youtube.com/watch?v=0c1prR_rCvo",
    embedUrl: "https://www.youtube.com/embed/0c1prR_rCvo",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 2 months ago",
    publishedDate: "07.06.2025",
    lengthText: "1:27:40",
    viewCountText: "152 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "EECM_agNUNc",
    title: "PIT — YETI | Летний Кубок | Плейофф",
    thumbnail:
      "https://i.ytimg.com/vi/EECM_agNUNc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNo9_Xq_msxhUnl7dgjr7Mg-x6og",
    watchUrl: "https://www.youtube.com/watch?v=EECM_agNUNc",
    embedUrl: "https://www.youtube.com/embed/EECM_agNUNc",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 2 months ago",
    publishedDate: "07.06.2025",
    lengthText: "1:11:01",
    viewCountText: "186 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "j4jjDnXfZ_o",
    title: "Do Bro — PIT | Летний Кубок | Групповой этап",
    thumbnail:
      "https://i.ytimg.com/vi/j4jjDnXfZ_o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYlFGuR9Kk408D0H9odBXzbCSABA",
    watchUrl: "https://www.youtube.com/watch?v=j4jjDnXfZ_o",
    embedUrl: "https://www.youtube.com/embed/j4jjDnXfZ_o",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 2 months ago",
    publishedDate: "07.06.2025",
    lengthText: "1:10:01",
    viewCountText: "142 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "lJgFy68AjHc",
    title: "ISKER — YETI | Летний Кубок | Групповой этап",
    thumbnail:
      "https://i.ytimg.com/vi/lJgFy68AjHc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtCqt-ipoqdT2X5S92fHoiGeKY_g",
    watchUrl: "https://www.youtube.com/watch?v=lJgFy68AjHc",
    embedUrl: "https://www.youtube.com/embed/lJgFy68AjHc",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 2 months ago",
    publishedDate: "06.06.2025",
    lengthText: "1:26:01",
    viewCountText: "231 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "M29uOXmgAeM",
    title: "PIT — ISKER | Летний Кубок | Групповой этап",
    thumbnail:
      "https://i.ytimg.com/vi/M29uOXmgAeM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCB4-O0OS-XzR5073HI8LbB37RCgQ",
    watchUrl: "https://www.youtube.com/watch?v=M29uOXmgAeM",
    embedUrl: "https://www.youtube.com/embed/M29uOXmgAeM",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 2 months ago",
    publishedDate: "06.06.2025",
    lengthText: "1:14:26",
    viewCountText: "220 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "PaTsLr2_wlc",
    title: "YETI — Do Bro | Летний Кубок | Групповой этап",
    thumbnail:
      "https://i.ytimg.com/vi/PaTsLr2_wlc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHWF9YZpxNkkDtqIX_cFHyOGOCuA",
    watchUrl: "https://www.youtube.com/watch?v=PaTsLr2_wlc",
    embedUrl: "https://www.youtube.com/embed/PaTsLr2_wlc",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 2 months ago",
    publishedDate: "06.06.2025",
    lengthText: "1:46:40",
    viewCountText: "244 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "LG-MmVQiFeA",
    title: "Do Bro — ISKER | Летний Кубок | Групповой этап",
    thumbnail:
      "https://i.ytimg.com/vi/LG-MmVQiFeA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCtepbdtX7SfjjKcf6wtEJUKN-a7w",
    watchUrl: "https://www.youtube.com/watch?v=LG-MmVQiFeA",
    embedUrl: "https://www.youtube.com/embed/LG-MmVQiFeA",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 2 months ago",
    publishedDate: "06.06.2025",
    lengthText: "1:40:10",
    viewCountText: "279 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "uI-SX8UkkXk",
    title: "YETI — PIT | Летний Кубок | Групповой этап",
    thumbnail:
      "https://i.ytimg.com/vi/uI-SX8UkkXk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_QxCZjQOcJ6m_plp4kmKUNH0RWg",
    watchUrl: "https://www.youtube.com/watch?v=uI-SX8UkkXk",
    embedUrl: "https://www.youtube.com/embed/uI-SX8UkkXk",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 2 months ago",
    publishedDate: "06.06.2025",
    lengthText: "1:25:16",
    viewCountText: "330 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "n9p1exzpExk",
    title: "PIT — ISKER | Летний Кубок | ФИНАЛ",
    thumbnail:
      "https://i.ytimg.com/vi/n9p1exzpExk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOVM7wlnMarlHBBidg9yQaIuErxw",
    watchUrl: "https://www.youtube.com/watch?v=n9p1exzpExk",
    embedUrl: "https://www.youtube.com/embed/n9p1exzpExk",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 2 months ago",
    publishedDate: "08.06.2025",
    lengthText: "1:56:15",
    viewCountText: "295 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "Rb1J4DrCf_8",
    title: "YETI — Do Bro | Летний Кубок | Матч за 3-е место",
    thumbnail:
      "https://i.ytimg.com/vi/Rb1J4DrCf_8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7TUzpUH6TvrXYW9GhSBE7KyoOOQ",
    watchUrl: "https://www.youtube.com/watch?v=Rb1J4DrCf_8",
    embedUrl: "https://www.youtube.com/embed/Rb1J4DrCf_8",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 2 months ago",
    publishedDate: "08.06.2025",
    lengthText: "1:27:01",
    viewCountText: "164 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "0c1prR_rCvo",
    title: "ISKER — Do Bro | Летний Кубок | Плейофф",
    thumbnail:
      "https://i.ytimg.com/vi/0c1prR_rCvo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1SsgvTYzJlKlPzi8qLwyRnuzQ1g",
    watchUrl: "https://www.youtube.com/watch?v=0c1prR_rCvo",
    embedUrl: "https://www.youtube.com/embed/0c1prR_rCvo",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 2 months ago",
    publishedDate: "07.06.2025",
    lengthText: "1:27:40",
    viewCountText: "152 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "EECM_agNUNc",
    title: "PIT — YETI | Летний Кубок | Плейофф",
    thumbnail:
      "https://i.ytimg.com/vi/EECM_agNUNc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNo9_Xq_msxhUnl7dgjr7Mg-x6og",
    watchUrl: "https://www.youtube.com/watch?v=EECM_agNUNc",
    embedUrl: "https://www.youtube.com/embed/EECM_agNUNc",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 2 months ago",
    publishedDate: "07.06.2025",
    lengthText: "1:11:01",
    viewCountText: "186 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "j4jjDnXfZ_o",
    title: "Do Bro — PIT | Летний Кубок | Групповой этап",
    thumbnail:
      "https://i.ytimg.com/vi/j4jjDnXfZ_o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYlFGuR9Kk408D0H9odBXzbCSABA",
    watchUrl: "https://www.youtube.com/watch?v=j4jjDnXfZ_o",
    embedUrl: "https://www.youtube.com/embed/j4jjDnXfZ_o",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 2 months ago",
    publishedDate: "07.06.2025",
    lengthText: "1:10:01",
    viewCountText: "142 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "lJgFy68AjHc",
    title: "ISKER — YETI | Летний Кубок | Групповой этап",
    thumbnail:
      "https://i.ytimg.com/vi/lJgFy68AjHc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtCqt-ipoqdT2X5S92fHoiGeKY_g",
    watchUrl: "https://www.youtube.com/watch?v=lJgFy68AjHc",
    embedUrl: "https://www.youtube.com/embed/lJgFy68AjHc",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 2 months ago",
    publishedDate: "06.06.2025",
    lengthText: "1:26:01",
    viewCountText: "231 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "M29uOXmgAeM",
    title: "PIT — ISKER | Летний Кубок | Групповой этап",
    thumbnail:
      "https://i.ytimg.com/vi/M29uOXmgAeM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCB4-O0OS-XzR5073HI8LbB37RCgQ",
    watchUrl: "https://www.youtube.com/watch?v=M29uOXmgAeM",
    embedUrl: "https://www.youtube.com/embed/M29uOXmgAeM",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 2 months ago",
    publishedDate: "06.06.2025",
    lengthText: "1:14:26",
    viewCountText: "220 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "PaTsLr2_wlc",
    title: "YETI — Do Bro | Летний Кубок | Групповой этап",
    thumbnail:
      "https://i.ytimg.com/vi/PaTsLr2_wlc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHWF9YZpxNkkDtqIX_cFHyOGOCuA",
    watchUrl: "https://www.youtube.com/watch?v=PaTsLr2_wlc",
    embedUrl: "https://www.youtube.com/embed/PaTsLr2_wlc",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 2 months ago",
    publishedDate: "06.06.2025",
    lengthText: "1:46:40",
    viewCountText: "244 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "LG-MmVQiFeA",
    title: "Do Bro — ISKER | Летний Кубок | Групповой этап",
    thumbnail:
      "https://i.ytimg.com/vi/LG-MmVQiFeA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCtepbdtX7SfjjKcf6wtEJUKN-a7w",
    watchUrl: "https://www.youtube.com/watch?v=LG-MmVQiFeA",
    embedUrl: "https://www.youtube.com/embed/LG-MmVQiFeA",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 2 months ago",
    publishedDate: "06.06.2025",
    lengthText: "1:40:10",
    viewCountText: "279 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "uI-SX8UkkXk",
    title: "YETI — PIT | Летний Кубок | Групповой этап",
    thumbnail:
      "https://i.ytimg.com/vi/uI-SX8UkkXk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_QxCZjQOcJ6m_plp4kmKUNH0RWg",
    watchUrl: "https://www.youtube.com/watch?v=uI-SX8UkkXk",
    embedUrl: "https://www.youtube.com/embed/uI-SX8UkkXk",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 2 months ago",
    publishedDate: "06.06.2025",
    lengthText: "1:25:16",
    viewCountText: "330 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "Oc-bCpjNa5Y",
    title:
      "СШЛ №27 — Гимназия №5 | Суперфинал ШЛ «Alzhan» | Мальчики 7-8 класс",
    thumbnail:
      "https://i.ytimg.com/vi/Oc-bCpjNa5Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9MyuG0tQWb4tHxG9SbqipgwI_Ng",
    watchUrl: "https://www.youtube.com/watch?v=Oc-bCpjNa5Y",
    embedUrl: "https://www.youtube.com/embed/Oc-bCpjNa5Y",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "11.05.2025",
    lengthText: "2:31:30",
    viewCountText: "1,015 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "vTSV4vC-0ew",
    title:
      "Гимназия №2  — СОШЛ №20  | Суперфинал ШЛ «Alzhan» | Девочки 7-8 класс",
    thumbnail:
      "https://i.ytimg.com/vi/vTSV4vC-0ew/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNwXbSQuBgVPUR7CFbHFZp4bFKag",
    watchUrl: "https://www.youtube.com/watch?v=vTSV4vC-0ew",
    embedUrl: "https://www.youtube.com/embed/vTSV4vC-0ew",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "11.05.2025",
    lengthText: "2:06:45",
    viewCountText: "489 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "HO70OOI39LM",
    title:
      "Иртышская СОШ №4 — Гимназия №5 | Суперфинал ШЛ «Alzhan» | Мальчики 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/HO70OOI39LM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRaxjixC1HWPnctoApLzkkdGAPQw",
    watchUrl: "https://www.youtube.com/watch?v=HO70OOI39LM",
    embedUrl: "https://www.youtube.com/embed/HO70OOI39LM",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "11.05.2025",
    lengthText: "1:46:21",
    viewCountText: "830 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "UcQyHJL6lU4",
    title:
      "Гимназия №17 — Гимназия №2 | Суперфинал ШЛ «Alzhan» | Мальчики 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/UcQyHJL6lU4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWmefN12f4ipWMLgOx8YDAeu0aKg",
    watchUrl: "https://www.youtube.com/watch?v=UcQyHJL6lU4",
    embedUrl: "https://www.youtube.com/embed/UcQyHJL6lU4",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "11.05.2025",
    lengthText: "1:52:20",
    viewCountText: "454 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "zTdhkcaeprI",
    title:
      "ОШ №12 Житикара — СШ им. Николая Островского  | Суперфинал ШЛ «Alzhan» | Мальчики 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/zTdhkcaeprI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2kIHJ1KGZ9n2TnJLhUjhGZivDNg",
    watchUrl: "https://www.youtube.com/watch?v=zTdhkcaeprI",
    embedUrl: "https://www.youtube.com/embed/zTdhkcaeprI",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "1:00:36",
    viewCountText: "183 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "Jja47TYybic",
    title:
      "СШ им. Николая Островского  — Школа-лицей им. Абая  | Суперфинал ШЛ «Alzhan» | Девочки 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/Jja47TYybic/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdiSHNDoQbj5k5vCO5tqKRSdHTmQ",
    watchUrl: "https://www.youtube.com/watch?v=Jja47TYybic",
    embedUrl: "https://www.youtube.com/embed/Jja47TYybic",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "1:04:16",
    viewCountText: "180 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "bLE55OodQQM",
    title:
      "Қыран — Гимназия №5 | Суперфинал ШЛ «Alzhan» | Мальчики 7-8 класс | Матч за 3 место",
    thumbnail:
      "https://i.ytimg.com/vi/bLE55OodQQM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAl9kPvbH6BWOv9z9wOIl0Bn4Viw",
    watchUrl: "https://www.youtube.com/watch?v=bLE55OodQQM",
    embedUrl: "https://www.youtube.com/embed/bLE55OodQQM",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "55:56",
    viewCountText: "165 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "-cZSz3toJvk",
    title:
      "Гимназия №5  — Гимназия №2 | Суперфинал ШЛ «Alzhan» | Мальчики 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/-cZSz3toJvk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSI8m51XG4lhCGAi8uINjbOMWM9w",
    watchUrl: "https://www.youtube.com/watch?v=-cZSz3toJvk",
    embedUrl: "https://www.youtube.com/embed/-cZSz3toJvk",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "1:48:50",
    viewCountText: "403 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "yd7dyH0ThXo",
    title: "СОШ №4  —  СОШ №30  | Суперфинал ШЛ «Alzhan» | Девочки 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/yd7dyH0ThXo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIIIuAHpRoMOrdx8nG2xiYVjvhqg",
    watchUrl: "https://www.youtube.com/watch?v=yd7dyH0ThXo",
    embedUrl: "https://www.youtube.com/embed/yd7dyH0ThXo",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "1:02:26",
    viewCountText: "198 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "-WWSGIND80o",
    title:
      "СОШЛ №20  —  Гимназия №2 | Суперфинал ШЛ «Alzhan» | Девочки 7-8 класс",
    thumbnail:
      "https://i.ytimg.com/vi/-WWSGIND80o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaAJwjqlvpE4Oi55vKoxSihDefuw",
    watchUrl: "https://www.youtube.com/watch?v=-WWSGIND80o",
    embedUrl: "https://www.youtube.com/embed/-WWSGIND80o",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "1:34:51",
    viewCountText: "296 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "-7kC5MmE7ks",
    title:
      "Иртышская СОШ №4 — Гимназия 17 | Суперфинал ШЛ «Alzhan» | Мальчики 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/-7kC5MmE7ks/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDSiA2hrI06u5Dku3y_Nli3rKAqoA",
    watchUrl: "https://www.youtube.com/watch?v=-7kC5MmE7ks",
    embedUrl: "https://www.youtube.com/embed/-7kC5MmE7ks",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "1:12:16",
    viewCountText: "327 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "YeoEtqJ8VxE",
    title: "СОШ №30  —  СОШ №26 | Суперфинал ШЛ «Alzhan» | Девочки 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/YeoEtqJ8VxE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAI6DDoqBy-JsDgrL7z2aeFm9S2qA",
    watchUrl: "https://www.youtube.com/watch?v=YeoEtqJ8VxE",
    embedUrl: "https://www.youtube.com/embed/YeoEtqJ8VxE",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "1:23:06",
    viewCountText: "294 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "Trp68X42zXM",
    title:
      "Гимназия №5 Хромтау  — Гимназия №5  | Суперфинал ШЛ «Alzhan» | Мальчики 7-8 класс",
    thumbnail:
      "https://i.ytimg.com/vi/Trp68X42zXM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5qBDGb7tzdXkGwyTc8xrchRUwHQ",
    watchUrl: "https://www.youtube.com/watch?v=Trp68X42zXM",
    embedUrl: "https://www.youtube.com/embed/Trp68X42zXM",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "1:15:32",
    viewCountText: "480 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "r4bW7wBrfVw",
    title: "Қыран  —  СШЛ №27  | Суперфинал ШЛ «Alzhan» | Мальчики 7-8 класс",
    thumbnail:
      "https://i.ytimg.com/vi/r4bW7wBrfVw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHKMAKGk8JWAE76Y-bGnS5Um0kPw",
    watchUrl: "https://www.youtube.com/watch?v=r4bW7wBrfVw",
    embedUrl: "https://www.youtube.com/embed/r4bW7wBrfVw",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "1:10:46",
    viewCountText: "509 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "HHvJdnXKRRs",
    title:
      "Гимназия №5  — СШ им. Николая Островского | Суперфинал ШЛ «Alzhan» | Мальчики 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/HHvJdnXKRRs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCAC4XRj2ojK0QXo_OtAhgmFDNzPw",
    watchUrl: "https://www.youtube.com/watch?v=HHvJdnXKRRs",
    embedUrl: "https://www.youtube.com/embed/HHvJdnXKRRs",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "1:27:29",
    viewCountText: "471 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "EwhJ9IhUCTo",
    title:
      "ОШ №12 Житикара — Иртышская СОШ №4  | Суперфинал ШЛ «Alzhan» | Мальчики 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/EwhJ9IhUCTo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJAyRO7c8JPFE3nu6Uj65UTeIOjw",
    watchUrl: "https://www.youtube.com/watch?v=EwhJ9IhUCTo",
    embedUrl: "https://www.youtube.com/embed/EwhJ9IhUCTo",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "51:58",
    viewCountText: "194 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "XufiRpRj_IU",
    title:
      'Гимназия №2  —  КГУ "Перелескинская ОШ"  | Суперфинал ШЛ «Alzhan» | Девочки 7-8 класс',
    thumbnail:
      "https://i.ytimg.com/vi/XufiRpRj_IU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcuUuF9weIihV2IS1uggjeK_qHFg",
    watchUrl: "https://www.youtube.com/watch?v=XufiRpRj_IU",
    embedUrl: "https://www.youtube.com/embed/XufiRpRj_IU",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "09.05.2025",
    lengthText: "1:00:21",
    viewCountText: "231 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "YCc64NCE3cc",
    title:
      "Гимназия №5 — Гимназия 17  | Суперфинал ШЛ «Alzhan» | Мальчики 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/YCc64NCE3cc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAy9Eif1KUWqcXbfaGUJOX-baX6Vw",
    watchUrl: "https://www.youtube.com/watch?v=YCc64NCE3cc",
    embedUrl: "https://www.youtube.com/embed/YCc64NCE3cc",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "09.05.2025",
    lengthText: "1:25:41",
    viewCountText: "609 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "H_gGFutcXcc",
    title: "Прямая трансляция пользователя ОФ Alzhan",
    thumbnail:
      "https://i.ytimg.com/vi/H_gGFutcXcc/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLCsKH4Km7KkZhj86NIPjJI9R-KwLw",
    watchUrl: "https://www.youtube.com/watch?v=H_gGFutcXcc",
    embedUrl: "https://www.youtube.com/embed/H_gGFutcXcc",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "",
    lengthText: "1:27:33",
    viewCountText: "573 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "fyusn8i4XsU",
    title:
      "Гимназия №2 — Иртышская СОШ №4  | Суперфинал ШЛ «Alzhan» | Мальчики 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/fyusn8i4XsU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCA7_yOpiOZdwhi4sm73opMOWbgJw",
    watchUrl: "https://www.youtube.com/watch?v=fyusn8i4XsU",
    embedUrl: "https://www.youtube.com/embed/fyusn8i4XsU",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "09.05.2025",
    lengthText: "1:04:21",
    viewCountText: "734 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "Oc-bCpjNa5Y",
    title:
      "СШЛ №27 — Гимназия №5 | Суперфинал ШЛ «Alzhan» | Мальчики 7-8 класс",
    thumbnail:
      "https://i.ytimg.com/vi/Oc-bCpjNa5Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9MyuG0tQWb4tHxG9SbqipgwI_Ng",
    watchUrl: "https://www.youtube.com/watch?v=Oc-bCpjNa5Y",
    embedUrl: "https://www.youtube.com/embed/Oc-bCpjNa5Y",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "11.05.2025",
    lengthText: "2:31:30",
    viewCountText: "1,015 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "vTSV4vC-0ew",
    title:
      "Гимназия №2  — СОШЛ №20  | Суперфинал ШЛ «Alzhan» | Девочки 7-8 класс",
    thumbnail:
      "https://i.ytimg.com/vi/vTSV4vC-0ew/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNwXbSQuBgVPUR7CFbHFZp4bFKag",
    watchUrl: "https://www.youtube.com/watch?v=vTSV4vC-0ew",
    embedUrl: "https://www.youtube.com/embed/vTSV4vC-0ew",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "11.05.2025",
    lengthText: "2:06:45",
    viewCountText: "489 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "HO70OOI39LM",
    title:
      "Иртышская СОШ №4 — Гимназия №5 | Суперфинал ШЛ «Alzhan» | Мальчики 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/HO70OOI39LM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRaxjixC1HWPnctoApLzkkdGAPQw",
    watchUrl: "https://www.youtube.com/watch?v=HO70OOI39LM",
    embedUrl: "https://www.youtube.com/embed/HO70OOI39LM",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "11.05.2025",
    lengthText: "1:46:21",
    viewCountText: "830 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "UcQyHJL6lU4",
    title:
      "Гимназия №17 — Гимназия №2 | Суперфинал ШЛ «Alzhan» | Мальчики 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/UcQyHJL6lU4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWmefN12f4ipWMLgOx8YDAeu0aKg",
    watchUrl: "https://www.youtube.com/watch?v=UcQyHJL6lU4",
    embedUrl: "https://www.youtube.com/embed/UcQyHJL6lU4",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "11.05.2025",
    lengthText: "1:52:20",
    viewCountText: "454 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "zTdhkcaeprI",
    title:
      "ОШ №12 Житикара — СШ им. Николая Островского  | Суперфинал ШЛ «Alzhan» | Мальчики 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/zTdhkcaeprI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2kIHJ1KGZ9n2TnJLhUjhGZivDNg",
    watchUrl: "https://www.youtube.com/watch?v=zTdhkcaeprI",
    embedUrl: "https://www.youtube.com/embed/zTdhkcaeprI",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "1:00:36",
    viewCountText: "183 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "Jja47TYybic",
    title:
      "СШ им. Николая Островского  — Школа-лицей им. Абая  | Суперфинал ШЛ «Alzhan» | Девочки 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/Jja47TYybic/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdiSHNDoQbj5k5vCO5tqKRSdHTmQ",
    watchUrl: "https://www.youtube.com/watch?v=Jja47TYybic",
    embedUrl: "https://www.youtube.com/embed/Jja47TYybic",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "1:04:16",
    viewCountText: "180 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "bLE55OodQQM",
    title:
      "Қыран — Гимназия №5 | Суперфинал ШЛ «Alzhan» | Мальчики 7-8 класс | Матч за 3 место",
    thumbnail:
      "https://i.ytimg.com/vi/bLE55OodQQM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAl9kPvbH6BWOv9z9wOIl0Bn4Viw",
    watchUrl: "https://www.youtube.com/watch?v=bLE55OodQQM",
    embedUrl: "https://www.youtube.com/embed/bLE55OodQQM",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "55:56",
    viewCountText: "165 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "-cZSz3toJvk",
    title:
      "Гимназия №5  — Гимназия №2 | Суперфинал ШЛ «Alzhan» | Мальчики 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/-cZSz3toJvk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSI8m51XG4lhCGAi8uINjbOMWM9w",
    watchUrl: "https://www.youtube.com/watch?v=-cZSz3toJvk",
    embedUrl: "https://www.youtube.com/embed/-cZSz3toJvk",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "1:48:50",
    viewCountText: "403 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "yd7dyH0ThXo",
    title: "СОШ №4  —  СОШ №30  | Суперфинал ШЛ «Alzhan» | Девочки 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/yd7dyH0ThXo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIIIuAHpRoMOrdx8nG2xiYVjvhqg",
    watchUrl: "https://www.youtube.com/watch?v=yd7dyH0ThXo",
    embedUrl: "https://www.youtube.com/embed/yd7dyH0ThXo",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "1:02:26",
    viewCountText: "198 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "-WWSGIND80o",
    title:
      "СОШЛ №20  —  Гимназия №2 | Суперфинал ШЛ «Alzhan» | Девочки 7-8 класс",
    thumbnail:
      "https://i.ytimg.com/vi/-WWSGIND80o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaAJwjqlvpE4Oi55vKoxSihDefuw",
    watchUrl: "https://www.youtube.com/watch?v=-WWSGIND80o",
    embedUrl: "https://www.youtube.com/embed/-WWSGIND80o",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "1:34:51",
    viewCountText: "296 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "-7kC5MmE7ks",
    title:
      "Иртышская СОШ №4 — Гимназия 17 | Суперфинал ШЛ «Alzhan» | Мальчики 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/-7kC5MmE7ks/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDSiA2hrI06u5Dku3y_Nli3rKAqoA",
    watchUrl: "https://www.youtube.com/watch?v=-7kC5MmE7ks",
    embedUrl: "https://www.youtube.com/embed/-7kC5MmE7ks",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "1:12:16",
    viewCountText: "327 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "YeoEtqJ8VxE",
    title: "СОШ №30  —  СОШ №26 | Суперфинал ШЛ «Alzhan» | Девочки 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/YeoEtqJ8VxE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAI6DDoqBy-JsDgrL7z2aeFm9S2qA",
    watchUrl: "https://www.youtube.com/watch?v=YeoEtqJ8VxE",
    embedUrl: "https://www.youtube.com/embed/YeoEtqJ8VxE",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "1:23:06",
    viewCountText: "294 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "Trp68X42zXM",
    title:
      "Гимназия №5 Хромтау  — Гимназия №5  | Суперфинал ШЛ «Alzhan» | Мальчики 7-8 класс",
    thumbnail:
      "https://i.ytimg.com/vi/Trp68X42zXM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5qBDGb7tzdXkGwyTc8xrchRUwHQ",
    watchUrl: "https://www.youtube.com/watch?v=Trp68X42zXM",
    embedUrl: "https://www.youtube.com/embed/Trp68X42zXM",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "1:15:32",
    viewCountText: "480 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "r4bW7wBrfVw",
    title: "Қыран  —  СШЛ №27  | Суперфинал ШЛ «Alzhan» | Мальчики 7-8 класс",
    thumbnail:
      "https://i.ytimg.com/vi/r4bW7wBrfVw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHKMAKGk8JWAE76Y-bGnS5Um0kPw",
    watchUrl: "https://www.youtube.com/watch?v=r4bW7wBrfVw",
    embedUrl: "https://www.youtube.com/embed/r4bW7wBrfVw",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "1:10:46",
    viewCountText: "509 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "HHvJdnXKRRs",
    title:
      "Гимназия №5  — СШ им. Николая Островского | Суперфинал ШЛ «Alzhan» | Мальчики 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/HHvJdnXKRRs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCAC4XRj2ojK0QXo_OtAhgmFDNzPw",
    watchUrl: "https://www.youtube.com/watch?v=HHvJdnXKRRs",
    embedUrl: "https://www.youtube.com/embed/HHvJdnXKRRs",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "1:27:29",
    viewCountText: "471 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "EwhJ9IhUCTo",
    title:
      "ОШ №12 Житикара — Иртышская СОШ №4  | Суперфинал ШЛ «Alzhan» | Мальчики 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/EwhJ9IhUCTo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJAyRO7c8JPFE3nu6Uj65UTeIOjw",
    watchUrl: "https://www.youtube.com/watch?v=EwhJ9IhUCTo",
    embedUrl: "https://www.youtube.com/embed/EwhJ9IhUCTo",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "10.05.2025",
    lengthText: "51:58",
    viewCountText: "194 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "XufiRpRj_IU",
    title:
      'Гимназия №2  —  КГУ "Перелескинская ОШ"  | Суперфинал ШЛ «Alzhan» | Девочки 7-8 класс',
    thumbnail:
      "https://i.ytimg.com/vi/XufiRpRj_IU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcuUuF9weIihV2IS1uggjeK_qHFg",
    watchUrl: "https://www.youtube.com/watch?v=XufiRpRj_IU",
    embedUrl: "https://www.youtube.com/embed/XufiRpRj_IU",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "09.05.2025",
    lengthText: "1:00:21",
    viewCountText: "231 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "YCc64NCE3cc",
    title:
      "Гимназия №5 — Гимназия 17  | Суперфинал ШЛ «Alzhan» | Мальчики 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/YCc64NCE3cc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAy9Eif1KUWqcXbfaGUJOX-baX6Vw",
    watchUrl: "https://www.youtube.com/watch?v=YCc64NCE3cc",
    embedUrl: "https://www.youtube.com/embed/YCc64NCE3cc",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "09.05.2025",
    lengthText: "1:25:41",
    viewCountText: "609 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "H_gGFutcXcc",
    title: "Прямая трансляция пользователя ОФ Alzhan",
    thumbnail:
      "https://i.ytimg.com/vi/H_gGFutcXcc/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLCsKH4Km7KkZhj86NIPjJI9R-KwLw",
    watchUrl: "https://www.youtube.com/watch?v=H_gGFutcXcc",
    embedUrl: "https://www.youtube.com/embed/H_gGFutcXcc",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "",
    lengthText: "1:27:33",
    viewCountText: "573 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
  {
    videoId: "fyusn8i4XsU",
    title:
      "Гимназия №2 — Иртышская СОШ №4  | Суперфинал ШЛ «Alzhan» | Мальчики 5-6 класс",
    thumbnail:
      "https://i.ytimg.com/vi/fyusn8i4XsU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCA7_yOpiOZdwhi4sm73opMOWbgJw",
    watchUrl: "https://www.youtube.com/watch?v=fyusn8i4XsU",
    embedUrl: "https://www.youtube.com/embed/fyusn8i4XsU",
    isLive: false,
    isUpcoming: false,
    publishedTimeText: "Streamed 3 months ago",
    publishedDate: "09.05.2025",
    lengthText: "1:04:21",
    viewCountText: "734 views",
    channelBase: "https://www.youtube.com/@Alzhankz",
  },
];

export default function Projects() {
  const [filters, setFilters] = useState({ year: "", title: "" });
  const [loading, setLoading] = useState(false);
  const [skip, setSkip] = useState(0);
  const [stage, setStage] = useState("photo");
  const take = 10;

  const getYear = (s) => {
    const [dd, mm, yyyy] = s.publishedDate.split(".").map(Number);
    return new Date(yyyy, mm - 1, dd);
  };
  const years = [
    ...new Set(
      mockProjects
        .filter((p) => getYear(p).getFullYear())
        .map((p) => getYear(p).getFullYear())
        .filter((p) => p)
    ),
  ];
  const titles = [
    ...new Set(
      mockProjects.filter((p) => getYear(p).getFullYear()).map((p) => p.title)
    ),
  ];

  const filtered = mockProjects
    .filter((p) => getYear(p).getFullYear())
    .filter((p) => {
      return (
        (!filters.year || getYear(p).getFullYear() == filters.year) &&
        (!filters.title || p.title.includes(filters.title))
      );
    })
    .slice(skip * take, (skip + 1) * take);

  const archivePhotos = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
  ];

  const handleChange = useCallback(
    ({ stage, gender, season, city, region }) => {
      // здесь конвертируешь выбранные значения в параметры твоих запросов
      // и дергаешь загрузку статистики
      // например: fetchStats({ stage, gender, season, region })
      console.log("filters:", { stage, gender, season, city, region });
      filters.year = season;
      setStage(stage);
    },
    []
  );

  return (
    <>
      <div className="docs-wrap" style={{ paddingBottom: 0 }}>
        <div className="docs-header">
          <div className="docs-breadcrumbs">
            Главная — <span>Проекты</span>
          </div>
        </div>
      </div>
      <div className="game-stats-page">
        <div className="container">
          <h1 className="title">Галерея</h1>

          <ProjectFilterPanel onChange={handleChange} years={years} />

          {stage === "broadcast" && (
            <>
              <div className="projects-grid">
                {filtered.map((project, i) => (
                  // <div key={i} className="project-card">
                  //   <img
                  //     src={project.thumbnail}
                  //     alt={project.title}
                  //     className="project-image"
                  //   />
                  //   <div className="project-content">
                  //     <h2 className="project-title">{project.title}</h2>
                  //     {project.publishedDate && <p className="project-meta">
                  //       {getYear(project).getFullYear()} • {getYear(project).getMonth()} • {getYear(project).getDate()}
                  //     </p>}
                  //     <p className="project-description">{project.description}</p>
                  //     {project.embedUrl && (
                  //       <div className="project-video">
                  //         <WithSkeleton loading={loading} ratio={'16/9'}>
                  //           <iframe
                  //             src={project.embedUrl}
                  //             title={project.title}
                  //             loading="lazy"
                  //             onLoad={() => setLoading(false)}
                  //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  //             allowFullScreen
                  //             style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, borderRadius: 12 }}
                  //           />
                  //         </WithSkeleton>
                  //       </div>
                  //     )}
                  //   </div>
                  // </div>
                  <MatchCard
                    imageSrc={project.thumbnail}
                    alt={project.title}
                    date={project.publishedDate}
                    duration={project.lengthText}
                    title={project.title}
                    href={project.watchUrl}
                  />
                ))}
              </div>
              <div className="filters">
                {/* <select
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
  </select> */}

                <Pagination
                  currentPage={skip}
                  totalPages={
                    mockProjects.filter((p) => getYear(p).getFullYear())
                      .length / 10
                  }
                  onPageChange={setSkip}
                  siblingCount={1}
                  boundaryCount={1}
                  showPrevNext
                  showFirstLast
                  size="md" // sm | md | lg
                />
              </div>
            </>
          )}

          {stage === "photo" && <Gallery images={archivePhotos} />}
        </div>
      </div>
    </>
  );
}
