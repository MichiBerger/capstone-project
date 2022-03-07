

export default function PhraseCard({date, phraseText}) {
  return (
   <article>
     <time>{date}</time>
     <p>{phraseText}</p>
   </article>
  );
}


