import './Quote.css'
const Quote = (props) => {
    // const {text, author} = props;
    const {quote:{text, author}} = props;
    return (
        <blockquote className="quote">
            <p className="text">{text}</p>
            <p className="author">{author}</p>
        </blockquote>
    );
}

export default Quote;
