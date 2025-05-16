// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          stone: { // Keep Tailwind's stone palette for shades like 50, 400, etc.
            50: '#fafaf9', // Default stone-50
            // ... other stone shades if needed
          },
          // Your Custom Colors
          shallowCloud: "#EAEEF1",
          suCai: "#D4DDE1",
          taJian: "#151D29",    // Primary Text Color (Dark)
          jiLan: "#3C4654",     // Secondary Text Color (Darker)
          yuYangRan: "#576470", // Tertiary Text Color
          shanFan: "#F5F3F2",   // Light Background / Card Background
          gaoYu: "#EFEFEF",     // Alternate Light Background
          luoShenZhu: "#D23918", // Accent Red / Debit
          huangDan: "#EA5514",   // Accent Orange
          juYi: "#D3A237",       // Accent Yellow
          cuiWei: "#4C8045",     // Accent Green / Credit
          rouLan: "#106898",     // Accent Blue (Deep)
          qieLan: "#88ABDA",     // Accent Blue (Light)
          biCheng: "#12507B",    // Primary Blue Action
          youTanRui: "#615EA8", // Accent Purple
          tangLiHe: "#955A42",   // Accent Brown
          ruanCui: "#006D87",
          ouBi: "#C0D695",
          huangSuLiu: "#FEDC5E",
          huangBaiYou: "#FFF799",
          huangBuLao: "#DB9B34",
          biShan: "#779649",
          zhuCao: "#A64036",
          zengQing: "#535164",
          guanLv: "#2A6E3F",
          diShiQing: "#003460",
          lanCaiHe: "#06436F",
          tianShuiBi: "#5AA4AE",
          xiZi: "#87C0CA",
          yunMen: "#A2E2D2",
          zhiZi: "#FAC03D",
          qiGu: "#5D8351",
          shiFa: "#6A8D52",
          chunChen: "#A9BE7B",
          // youTanRui is duplicated, keeping one
          meiMei: "#4E8548",
          woZhu: "#DD6B7B",
          cangJia: "#A8BF8F",
          tingWuLv: "#68945C",
          cuiQiu: "#446A37",
          weiHong: "#A73766",
          kuJin: "#E18A3B",
          queMei: "#788A6F",
          ziBoHan: "#BBA1CB",
          ziPu: "#A6559D",
          songHua: "#FFEE6F",
          xiangYe: "#ECD452",
          qingMing: "#3271AE",
          shuiLongYin: "#84A729",
          kongQueLan: "#4994C4",
          renLai: "#9EBC19",
          zheHuang: "#C67915",
          qiLin: "#12264F",
          changChun: "#DC6B82",
          royalPink: "#B83570",
          zhengQing: "#6CA8AF",
          qunQing: "#2E59A7",
          diLai: "#DFCEB4",
          daKuai: "#BFA782",
          longZhan: "#5F4321",
          liuHuang: "#8B7042",
          danShu: "#873424",
          huangHeLiuLi: "#E5A84B",
          tealOne: "#007175",
          erLv: "#5DA39D",
          tealTwo: "#88BFB8",
          jianDe: "#6F94CD",
          cangCang: "#5976BA",
          bianQing: "#509296",
          yaoSe: "#226b68",
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // Example: Using Inter font
        },
      },
    },
    plugins: [],
  }