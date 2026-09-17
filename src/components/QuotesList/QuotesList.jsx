import Quote from "../Quote/Quote";
import Title from "../Title/Title";
import quotes from "./data";

const QuotesList = () => {
    const showQuote = (quote)=>(<Quote key={quote.id} quote={quote}/>)
    return (
        <section>
            <Title title='Надихаючі цитати'/>
            <div>
                {quotes.map(showQuote)}
            </div>
        </section>
    );
}

export default QuotesList;
