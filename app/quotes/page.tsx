async function quoteList() {
  let data = await fetch("https://dummyjson.com/quotes");
  data = await data.json();
  return data.quotes;
}

export default async function Quote() {
  let quotes = await quoteList();
  console.log(quotes);
  return (
    <>
      <h1>Quote</h1>
      {quotes.map((quote) => (
        <div key={quote.id} className="mt-4 mb-4">
          <h2>By {quote.author}</h2>
          <p>{quote.quote}</p>
        </div>
      ))}
    </>
  );
}
