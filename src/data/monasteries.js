const monasteries = [
  {
    id: "pemayangtse",
    name: "Pemayangtse Monastery",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57606.28695320747!2d88.23367640000001!3d27.305196400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e685d35d570dcf%3A0xbba9d8f51db0ca38!2sPemayangtse%20Monastery!5e0!3m2!1sen!2sin!4v1693920345678!5m2!1sen!2sin",

    narrations: {
      en: "/assets/pemayangtse_en.mp3", // English
      hi: "/assets/pemayangtse_hi.mp3", // Hindi
      ne: "/assets/pemayangtse_ne.mp3", // Nepali
    },

    infoPanels: [
      {
        title: "History",
        text: "Founded in 1705 by Lama Lhatsun Chempo; one of Sikkim’s oldest monasteries (Nyingma order).",
      },
      {
        title: "Unique Feature",
        text: "Houses Zangdok Palri, a seven-tiered wooden sculpture symbolizing Guru Padmasambhava’s heavenly palace.",
      },
      {
        title: "Location",
        text: "Near Pelling; famous for breathtaking views of Mount Kanchenjunga.",
      },
    ],
  },
];

export default monasteries;