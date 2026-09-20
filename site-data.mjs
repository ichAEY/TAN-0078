const publicBase = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default {
  "basePath": publicBase,
  "template": {
    "specialty": "hair",
    "bookingProvider": "DIKIDI",
    "reviewSource": "Яндекс Карты"
  },
  "brand": {
    "name": "Ольга",
    "subtitle": "Парикмахер-стилист",
    "monogram": "О"
  },
  "master": {
    "name": "Ольга",
    "dative": "Ольге",
    "genitive": "Ольги",
    "instrumental": "Ольгой",
    "monogram": "О",
    "profession": "парикмахер-стилист",
    "heroTitle": "",
    "heroEmphasis": "эксперт по волосам",
    "heroCaption": "Парикмахер-стилист",
    "imageAlt": "парикмахер-стилист",
    "heroCopy": "Стрижки, окрашивание, блонд, уход и укладки с вниманием к состоянию волос, оттенку и вашему образу.",
    "visitMotto": "",
    "experienceYears": null,
    "experienceAria": "",
    "aboutTitle": "Ольга",
    "aboutLead": "",
    "aboutParagraphs": [],
    "skills": []
  },
  "location": {
    "country": "Россия",
    "countryCode": "RU",
    "city": "Москва",
    "metro": "",
    "cityMetro": "Москва",
    "address": "посёлок Коммунарка, улица Александры Монаховой, 84, корп. 1",
    "mapCardAddress": "посёлок Коммунарка, улица Александры Монаховой, 84, корп. 1",
    "schedule": "По предварительной записи",
    "scheduleCapitalized": "По предварительной записи",
    "timeZone": "Europe/Moscow",
    "openTime": "00:00",
    "closeTime": "00:00"
  },
  "contacts": {
    "phoneDisplay": "+7 (905) 505-31-21",
    "phoneHref": "tel:+79055053121",
    "messenger": null
  },
  "links": {
    "bookingUrl": "https://dikidi.net/1778964",
    "reviewsUrl": "https://yandex.ru/maps/org/parikmakher_stilist/80522187436/",
    "mapUrl": "https://yandex.ru/maps/org/parikmakher_stilist/80522187436/",
    "routeUrl": "https://yandex.ru/maps/org/parikmakher_stilist/80522187436/",
    "mobileMapEmbedUrl": "about:blank",
    "desktopMapEmbedUrl": "about:blank",
    "yandexMapHrefMatch": "80522187436"
  },
  "reputation": {
    "rating": "5.0",
    "reviewCount": "32"
  },
  "images": {
    "logo": "",
    "portrait": `${publicBase}/placeholder.svg`,
    "about": `${publicBase}/placeholder.svg`,
    "favicon": `${publicBase}/favicon-source.png`,
    "heroDecoration": `${publicBase}/assets/template/hair-tools.png`,
    "beforeAfter": [],
    "gallery": []
  },
  "services": {
    "groups": [
      {
        "id": "haircuts",
        "label": "Стрижки",
        "services": [
          {
            "name": "Стрижка длинных волос",
            "price": "",
            "time": "",
            "description": "",
            "url": ""
          },
          {
            "name": "Стрижка средней длины",
            "price": "",
            "time": "",
            "description": "",
            "url": ""
          },
          {
            "name": "Стрижка коротких волос",
            "price": "",
            "time": "",
            "description": "",
            "url": ""
          },
          {
            "name": "Стрижка ровным срезом машинкой",
            "price": "",
            "time": "",
            "description": "",
            "url": ""
          }
        ]
      },
      {
        "id": "color",
        "label": "Окрашивание",
        "services": [
          {
            "name": "Окрашивание",
            "price": "",
            "time": "",
            "description": "",
            "url": ""
          },
          {
            "name": "Сложное окрашивание",
            "price": "",
            "time": "",
            "description": "",
            "url": ""
          }
        ]
      },
      {
        "id": "care",
        "label": "Уход и укладка",
        "services": [
          {
            "name": "Ботокс для волос",
            "price": "6 500 ₽",
            "time": "",
            "description": "",
            "url": ""
          },
          {
            "name": "Восстанавливающие процедуры",
            "price": "",
            "time": "",
            "description": "",
            "url": ""
          },
          {
            "name": "Укладка",
            "price": "",
            "time": "",
            "description": "",
            "url": ""
          },
          {
            "name": "Биозавивка волос",
            "price": "",
            "time": "",
            "description": "",
            "url": ""
          }
        ]
      }
    ]
  },
  "i18n": {
    "localLocale": "ru",
    "locales": [
      {
        "code": "ru",
        "label": "RU"
      },
      {
        "code": "en",
        "label": "EN"
      }
    ],
    "translations": {
      "en": {
        "мастер маникюра и педикюра": "manicure and pedicure specialist",
        "эксперт по маникюру и педикюру": "manicure and pedicure expert",
        "Мастер маникюра и педикюра": "Manicure and pedicure specialist",
        "Маникюр, педикюр и уход за ногтями с вниманием к аккуратности, форме и качеству результата.": "Manicure, pedicure and nail care with attention to precision, shape and quality.",
        "Выполняю маникюр и педикюр, наращивание и коррекцию ногтей.": "I provide manicure and pedicure, nail extensions and corrections.",
        "Работаю со стерильными инструментами и уделяю внимание аккуратности, форме и качеству результата.": "I work with sterile instruments and pay close attention to precision, shape and the quality of the result.",
        "Маникюр и педикюр": "Manicure and pedicure",
        "Наращивание и коррекция": "Extensions and corrections",
        "Стерильные инструменты": "Sterile instruments",
        "колорист и мастер по волосам": "colorist and hair specialist",
        "парикмахер-стилист": "hair stylist",
        "парикмахер-колорист": "hair colorist",
        "технолог-колорист": "hair technologist and colorist",
        "Колорист": "Colorist",
        "Парикмахер-стилист": "Hair stylist",
        "Парикмахер-колорист": "Hair colorist",
        "Технолог-колорист": "Hair technologist and colorist",
        "эксперт по волосам": "hair expert",
        "Стрижки, окрашивание, блонд, уход и укладки с вниманием к состоянию волос, оттенку и вашему образу.": "Haircuts, coloring, blonding, care and styling with attention to hair condition, tone and your look.",
        "Специализируюсь на стрижках и окрашивании, blond и сложных техниках, уходе и реконструкции волос.": "I specialize in haircuts and coloring, blond and complex techniques, hair care and reconstruction.",
        "Работаю с формой, цветом и состоянием волос, чтобы результат выглядел цельно и подходил именно вам.": "I work with shape, color and hair condition so the result looks cohesive and suits you.",
        "Стрижки и окрашивание": "Haircuts and coloring",
        "Blond и сложные техники": "Blond and complex techniques",
        "Уход и реконструкция волос": "Hair care and reconstruction",
        "Москва": "Moscow",
        "Щёлково": "Shchyolkovo",
        "Беляево": "Belyayevo",
        "Печатники": "Pechatniki",
        "По предварительной записи": "By appointment",
        "Строго по предварительной записи": "Strictly by appointment",
        "Пн–Сб 10:00–22:00": "Mon–Sat 10:00–22:00",
        "Ежедневно 10:00–22:00": "Daily 10:00–22:00",
        "Ольга": "Olga",
        "посёлок Коммунарка, улица Александры Монаховой, 84, корп. 1": "84 bldg. 1 Aleksandry Monakhovoy Street, Kommunarka, Moscow",
        "Стрижки": "Haircuts",
        "Стрижка длинных волос": "Long hair haircut",
        "Стрижка средней длины": "Medium-length haircut",
        "Стрижка коротких волос": "Short haircut",
        "Стрижка ровным срезом машинкой": "Straight machine cut",
        "Окрашивание": "Coloring",
        "Сложное окрашивание": "Complex coloring",
        "Уход и укладка": "Care and styling",
        "Ботокс для волос": "Hair botox",
        "Восстанавливающие процедуры": "Restorative treatments",
        "Укладка": "Styling",
        "Биозавивка волос": "Bio perm",
        "Я Ольга — эксперт по волосам.": "I am Olga — a hair expert."
      }
    }
  },
  "reviews": [
    {
      "author": "Яна",
      "text": "Ольга — замечательный и внимательный мастер. Профессионал своего дела, который постоянно совершенствует свои навыки и следит за новыми тенденциями. Очень чутко прислушивается к пожеланиям, подробно объясняет процесс и помогает подобрать идеальное решение. Результат всегда радует — цвет получается именно таким, как хотелось, а качество волос остаётся на высоте. Атмосфера во время работы комфортная и спокойная. С уверенностью могу рекомендовать Ольгу всем, кто ищет действительно грамотного колориста.",
      "source": "Яндекс Карты"
    }
  ],
  "promotions": [],
  "amenities": [],
  "seo": {
    "siteUrl": "https://ichaey.github.io/TAN-0078/",
    "title": "Ольга — парикмахер-стилист",
    "description": "Стрижки, окрашивание и уход за волосами у парикмахера-стилиста Ольги в Москве. Запись через DIKIDI.",
    "keywords": [
      "парикмахер Ольга",
      "стилист Москва",
      "окрашивание волос",
      "Коммунарка"
    ],
    "locale": "ru_RU"
  },
  "analytics": {
    "yandexMetrikaId": ""
  }
};
