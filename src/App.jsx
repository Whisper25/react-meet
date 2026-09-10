import Quote from "./components/Quote/Quote";
import Title from "./components/Title/Title";

function App() {
  return (
    <>
      <Title title="Цитати для натхнення" />
      <Quote
        text="“Найкращий спосіб почати — перестати говорити і почати робити.”"
        author="— Волт Дісней"
      />
      <Quote
        text="“Не помиляється лише той, хто нічого не робить.”"
        author="— Теодор Рузвельт"
      />
      <Quote
        text="“Успіх — це рух від невдачі до невдачі без втрати ентузіазму.”"
        author="— Вінстон Черчилль"
      />
    </>
  );
}

export default App;
