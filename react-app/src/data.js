import spainElectricalShortfallJPG from "./imgs/projects/spain_electrical_shortfall.jpg"
import tweetSentimentAnalysisJPG from "./imgs/projects/tweet_sentiment_analysis.jpg"
import tableauVisualizationsJPG from "./imgs/projects/tableau_visualizations.jpg"
import mt4Mt5TradingPlatformJPG from "./imgs/projects/MT4_MT5_Trading_Platform.png"
import blenderJPG from "./imgs/projects/blender.png"
import co2EmissionAnalysis from "./imgs/projects/co2-emission_analysis.jpg"

export const projects = [
    {
      title: "Carbon Emission Analysis",
      subtitle: "Predicting countries' CO2 emissions using economic & energy data.",
      description:
        "In combating carbon emission, the project attemps to predict future carbon emission levels for countries. The use of the predictions is for countries to strategize their upcoming development projects, & in forecasting carbon credit purchases.",
      image: co2EmissionAnalysis,
      link: "https://edsa-internship-group-3.github.io/co2-emission-analysis/",      
    },
    {
      title: "Spain Electrical Shortfall",
      subtitle: "Predicting energy supply shortages using weather features.",
      description:
        "The government of Spain released a dataset showing the electrical shortfall of renewable energies against fossil fuel production. The motive was to predict future shortfalls based on the weather data, as well as gather insights to assist in development of the country's renewable energy sector.",
      image: spainElectricalShortfallJPG,
      link: "https://teddywaweru.github.io/2110ACDS_ND5/",
    },
    {
      title: "Tweet Sentiment Analysis",
      subtitle: "Determining a sentiment's view on critical issues.",
      description:
      "With a dataset containing a set of tweets off Twitter, we attempted to determine the source's sentiment on climate change being a real threat. The insights garnered from the project would enable stakeholders to plan their brand campaigns strategically.",
      image: tweetSentimentAnalysisJPG,
      link: "https://jesswn.github.io/2110ACDS_T13/",
    },
    {
      title: "MetaTrader 5 Trade Management Application",
      subtitle: "Python GUI app for trading",
      description:
        "MetaTrader is speculation trading platform for financial instruments. I embarked on developing a Python Windows GUI platform that offers additional functionalities in trade management, which would link with the platform via available APIs.",
      image: mt4Mt5TradingPlatformJPG,
      link: "https://teddywaweru.github.io/MT5-trade-manager/",
    },
    {
      title: "Tableau Visualizations",
      subtitle: "Building data dashboards using Tableau",
      description:
        "Tableau is a powerful data visualization GUI, & here I developed dashboards to offer a feel of its application. Also, it offers a reliable remote platform to be able to share these visuals, so you don't have to download an entire dataset!",
      image: tableauVisualizationsJPG,
      link: "https://public.tableau.com/app/profile/teddy.waweru",
    },
    {
      title: "Blender",
      subtitle: "Amazing 3D open-source project",
      description:
      "Blender 3D is an amazing open-source 3D viz software. I'm highly attracted by the community (creators & developers) & the software's potential. I have done some visuals here, now I pursue further experience in the programme's Python API & codebase.",
      image: blenderJPG,
      link: "https://www.behance.net/gallery/146634467/Sunflowers",

    }
  ];

export const technologies = [
    "Python","Pandas","Numpy","Scikit-learn","PyQt5", "Javascript"
];
export const skills = [
    "Version Control","CI/CD","Data processing","Documentation", "Scripting"
];

export const testimonials = [
    "He","Really","Tries","His","Best"
];