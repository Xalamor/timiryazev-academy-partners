// src/data/partners.ts
export interface Partner {
  id: string;
  name: string;
  country: string;
  city: string;
  description: string;
  year: number;
  programs: string[];
  website?: string;
  logo?: string;
  studentsCount?: number;
}

export const PARTNERS: Partner[] = [
  {
    id: "beijing-agro",
    name: "Пекинский университет сельского хозяйства",
    country: "China",
    city: "Пекин",
    description:
      "Ведущий аграрный университет Китая с современными лабораториями и исследовательскими центрами.",
    year: 2018,
    programs: [
      "Обмен преподавателями",
      "Совместные публикации",
      "Технологический трансфер",
    ],
    website: "https://www.cau.edu.cn",
    studentsCount: 200,
  },
  {
    id: "sao-paulo",
    name: "Университет Сан-Паулу",
    country: "Brazil",
    city: "Сан-Паулу",
    description:
      "Крупнейший университет Бразилии с развитыми программами в тропическом сельском хозяйстве.",
    year: 2017,
    programs: ["Обмен в аспирантуре", "Полевые исследования", "Конференции"],
    website: "https://www5.usp.br",
    studentsCount: 90,
  },
  {
    id: "kazakh-agro",
    name: "Казахский национальный аграрный университет",
    country: "Kazakhstan",
    city: "Алматы",
    description:
      "Ведущий аграрный университет Центральной Азии с фокусом на степном сельском хозяйстве.",
    year: 2019,
    programs: [
      "Обмен студентами",
      "Совместные исследования",
      "Культурные программы",
    ],
    website: "https://www.kaznaru.edu.kz",
    studentsCount: 110,
  },
  {
    id: "india-agro",
    name: "Северо-Восточный институт науки и технологий (NEIST, CSIR-NEIST)",
    country: "India",
    city: "Джорхат",
    description:
      "Исследовательское учреждение Совета научных и промышленных исследований (CSIR) в Индии.",
    year: 2020,
    programs: [
      "Обмен студентами",
      "Совместные исследования",
      "Культурные программы",
    ],
    website: "https://neist.res.in",
    studentsCount: 30,
  },
];

export const PARTNER_COUNTRIES = [
  "China",
  "Brazil",
  "Kazakhstan",
  "India",
  "Egypt",
  "Azerbaijan", 
  "Armenia", 
  "Belarus",
  "Benin",
  "Chad",
  "Hungary",
  "Vietnam",
  "Zambia",
  "Iran",
  "Iraq",
  "Kyrgyzstan",
  "Colombia",
  "Cuba",
  "Mongolia",
  "Pakistan",
  "Serbia",
  "Tadjikistan",
  "Uzbekistan",
  "Ecuador"
];

export const PARTNER_DATA: Record<string, string[]> = {
  China: ["Пекинский университет сельского хозяйства"],
  Brazil: ["Университет Сан-Паулу"],
  Kazakhstan: ["Казахский национальный аграрный университет"],
  India:["Северо-Восточный институт науки и технологий (NEIST, CSIR-NEIST)"]
};

export function getPartnersByCountry(country: string): Partner[] {
  return PARTNERS.filter((partner) => partner.country === country);
}

export function getCountryPartnersCount(country: string): number {
  return PARTNERS.filter((partner) => partner.country === country).length;
}
