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
    id: "berlin-humboldt",
    name: "Берлинский университет им. Гумбольдта",
    country: "Germany",
    city: "Берлин",
    description:
      "Один из старейших университетов Германии с богатой историей сотрудничества в области сельскохозяйственных наук.",
    year: 2010,
    programs: ["Обмен студентами", "Совместные исследования", "Летние школы"],
    website: "https://www.hu-berlin.de",
    studentsCount: 150,
  },
  {
    id: "munich-tech",
    name: "Мюнхенский технический университет",
    country: "Germany",
    city: "Мюнхен",
    description:
      "Ведущий технический университет Германии с сильными программами в области биотехнологий и экологии.",
    year: 2012,
    programs: ["Двойные дипломы", "Исследовательские проекты", "Конференции"],
    website: "https://www.tum.de",
    studentsCount: 80,
  },
  {
    id: "paris-saclay",
    name: "Университет Париж-Сакле",
    country: "France",
    city: "Париж",
    description:
      "Французский исследовательский университет с фокусом на точные науки и инженерию.",
    year: 2015,
    programs: ["Стажировки", "Научные семинары", "Международные проекты"],
    website: "https://www.universite-paris-saclay.fr",
    studentsCount: 120,
  },
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
    id: "california-davis",
    name: "Университет Калифорнии, Дэвис",
    country: "United States of America",
    city: "Дэвис, Калифорния",
    description:
      "Мировой лидер в области сельскохозяйственных наук и ветеринарии.",
    year: 2008,
    programs: [
      "Студенческий обмен",
      "Исследования",
      "Профессиональные тренинги",
    ],
    website: "https://www.ucdavis.edu",
    studentsCount: 300,
  },
  {
    id: "cornell",
    name: "Корнеллский университет",
    country: "United States of America",
    city: "Итака, Нью-Йорк",
    description:
      "Престижный университет США с сильной школой сельского хозяйства и наук о жизни.",
    year: 2011,
    programs: [
      "Двойные степени",
      "Летние программы",
      "Исследовательские гранты",
    ],
    website: "https://www.cornell.edu",
    studentsCount: 180,
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
];

export const PARTNER_COUNTRIES = [
  "Germany",
  "France",
  "China",
  "United States of America",
  "Brazil",
  "Kazakhstan",
];

export const PARTNER_DATA: Record<string, string[]> = {
  Germany: [
    "Берлинский университет им. Гумбольдта",
    "Мюнхенский технический университет",
  ],
  France: ["Университет Париж-Сакле"],
  China: ["Пекинский университет сельского хозяйства"],
  "United States of America": [
    "Университет Калифорнии, Дэвис",
    "Корнеллский университет",
  ],
  Brazil: ["Университет Сан-Паулу"],
  Kazakhstan: ["Казахский национальный аграрный университет"],
};

export function getPartnersByCountry(country: string): Partner[] {
  return PARTNERS.filter((partner) => partner.country === country);
}

export function getCountryPartnersCount(country: string): number {
  return PARTNERS.filter((partner) => partner.country === country).length;
}
