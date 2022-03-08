import PhraseCard from "./PhraseCard.js";

const phrases = [
  {
    date: "22. Feb. 2022",
    phrase: "Das ist mein Papapa!"
  },
  {
    date: "10. Feb. 2022",
    phrase: "Ach menno!"
  },
  {
    date: "02. Jan. 2022",
    phrase: "Das ist mein Papapa!"
  },
  {
    date: "23. Dez. 2021",
    phrase: "Nochmal Dosinen, Nüsse und Haferflocken! Ja...das wars!"
  },
  {
    date: "06. Jun. 2021",
    phrase: "Badebanne"
  },
]

export default function PhraseCardList(){
  return(
    <div>
      <ul>
      {phrases.map((phrase, index) => {
       return <li key={index}><PhraseCard date={phrase.date} phraseText={phrase.phrase}/></li>
      })}
      </ul>
    </div>
  )
}