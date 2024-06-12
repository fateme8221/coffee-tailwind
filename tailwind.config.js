/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow:{
        "normal":" 0px 1px 10px 0px rgba(0, 0, 0, 0.05)"
      },
      colors:{
        "Brown-100":"#ECE0D1",
        "Brown-300":"#DBC1AC",
        "Brown-600":"#967259",
        "Brown-900":"#634832",
      },
      borderRadius:{
        "rounded-4xl":"2rem"
      },
      fontFamily:{
        "dana":"dana",
        "danaMedium":"dana Medium",
        "danaDemiBold":"dana DemiBold",
        "moraddaLight":"moradda Light",
        "moraddaMeduim":"moradda Meduim",
        "moraddaBold":"moradda Bold"
      },
      letterSpacing:{
        "tightest" : "-0.065em"
      },
      spacing:{
        "30":"7.5rem"
      },
      container:{
        center:true,
        'padding':{
          DEFAULT:'1rem',
          lg:'0.625rem'
        }
      },
      backgroundImage:{
        'home-mobile':"url(../image/headerBgMobile.webp)",
        'home-desktop':"url(../image/headerBgDesktop.webp)",
      }
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [
    function({ addVariant }){
      addVariant('child','& > *')
      addVariant('child-hover','& > *:hover')

    }
  ],
}

