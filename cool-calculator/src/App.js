import React from 'react';
import './App.css';

function App() {
  const [expression, setExpression] = React.useState("");
  const [answer, setAnswer] = React.useState(0);

  const display = (symbol) => {
    setExpression(prev => prev + symbol)
  }
  const percent = () => {
    setExpression(answer => answer / 100)
  }
  const calculate = () => {
    setAnswer(eval(expression));
  }

  const allClear = () => {
    setExpression("");
    setAnswer(0);
  }

  const plusMinus = () => {
    setExpression(answer.prepend("-"));
  }
  return (
    <div>
      <h1 >Calculator by FullStackJustin</h1>
      <div className="calcContainer" name="Calculator">
        <div className="output">
          <input className="expression" id="currentValue" value={expression} placeholder="0" disabled name="Display"/>
          <p className="answer">{answer}</p>
        </div>
        <div className="btnGrid">
          <div onClick={allClear} className="lightBtn ac">AC</div>
          <div onClick={plusMinus} className="lightBtn plusMinus">+/-</div>
          <div onClick={percent} className="lightBtn percent">%</div>
          <div onClick={() => display("/")} className="darkBtn division">/</div>
          <div onClick={() => display("7")} className="numBtn seven">7</div>
          <div onClick={() => display("8")} className="numBtn eight">8</div>
          <div onClick={() => display("9")} className="numBtn nine">9</div>
          <div onClick={() => display("*")} className="darkBtn multiply">x</div>
          <div onClick={() => display("4")} className="numBtn four">4</div>
          <div onClick={() => display("5")} className="numBtn five">5</div>
          <div onClick={() => display("6")} className="numBtn six">6</div>
          <div onClick={() => display("-")} className="darkBtn subtract">-</div>
          <div onClick={() => display("1")} className="numBtn one">1</div>
          <div onClick={() => display("2")} className="numBtn two">2</div>
          <div onClick={() => display("3")} className="numBtn three">3</div>
          <div onClick={() => display("+")} className="darkBtn add">+</div>
          <div onClick={() => display("0")} className="zero">0</div>
          <div onClick={() => display("0")} className="extraSpace"></div>
          <div onClick={() => display(".")} className="numBtn dot">.</div>
          <div onClick={calculate} className="equals">=</div>
        </div>
      </div>
      <div className="githubLogo">
      <a className="gitLink" href="https://github.com/FullStackJustin" target="_blank" ><i class="fa-brands fa-square-github fa-4x"></i></a>
      </div>
    </div>
  );
}

export default App;
