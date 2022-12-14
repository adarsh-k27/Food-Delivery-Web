  // {import('tailwindcss').Config} 
  module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        width: {
          150: "150px",
          190: "190px",
          225: "225px",
          275: "275px",
          300: "300px",
          340: "340px",
          350: "350px",
          375: "375px",
          460: "460px",
          656: "656px",
          880: "880px",
          508: "508px",
        },
        height: {
          30: "30px",
          80: "80px",
          150: "150px",
          225: "225px",
          300: "300px",
          340: "340px",
          370: "370px",
          420: "420px",
          480: "480px",
          510: "510px",
          600: "600px",
          685: "685px",
          800: "800px",
          "90vh": "90vh"
        },
        minWidth: {
          210: "210px",
          300: "300px",
          310:"310px",
          350: "350px",
          620: "620px",
        },
        colors: {
          headingColor: "rgba(0,0,0,0.7)",
          textColor: "#515151",
          cartNumBg: "#e80013",
          primary: "#f5f3f3",
          header: "#e1e1e1",
          image: "rgba(256,256,256,0.4)",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          "2xl": "1536px"
        },
      },
    },
    plugins: [],
  }