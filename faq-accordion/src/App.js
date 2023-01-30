import Question from "./question";
import './App.css';
import Cup from '../src/assets/images/cup EFA.jpg'
import Logo from '../src/assets/images/logo.jpg'

import React from "react";
import Champions from "./assets/images/Chemp leg.jpg";



export default function App() {
  return (
    <>
        <img className='logo' src={Logo}/>
    <h1>About Liverpool Football Club</h1>
        <div className="container">
            <h3>Interesting Facts</h3>
            <div className="questions">
                {questions.map((questions) => (
                    <Question key={questions.id} question={questions}/>
                    ))}
            </div>
        </div>
    </>
  );
}

const questions = [
    {
        id: 1,
        title: "Liverpool is the most decorated club in England",
        image: {Cup},
        info:
            "League Titles\n" +
            "1900-01, 1905-06, 1921-22, 1922-23, 1946-47, 1963-64, " +
            "1965-66, 1972-73, 1975-76, 1976-77, 1978-79, 1979-80, 1981-82, " +
            "1982-83, 1983-84, 1985-86, 1987-88, 1989-90, 2019-20\n" +
            "\n" +
            "Liverpool have won a phenomenal 19 top-flight league titles, " +
            "with Jürgen Klopp leading the Reds to their most recent in the Premier League in 2019-20."
    },
    {
        id: 2,
        title: "Team has won 6 Champions Leagues",
        image: {Champions},
        info:
            "European Cups\n" +
            "1976-77, 1977-78, 1980-81, 1983-84, 2004-05, 2018-19\n" +
            "\n" +
            "We have proudly won six European Cups - more than any other British team. " +
            "The first came under Bob Paisley, who added two more to the trophy cabinet before his successor Joe Fagan also won the famous cup. Rafael Benitez oversaw the Miracle of Istanbul in 2005, " +
            "and the most recent came under Jürgen Klopp in 2019."
    },
    {
        id: 3,
        title: "Best players",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    }
];

