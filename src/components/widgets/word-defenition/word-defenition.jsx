import "./word-defenition.css";

import Dot from "../../ui/dot/dot";
import LineBold from "../../ui/line-bold/line-bold";

const WordDefenition = ({ data, meaning }) => {
  const definitions = data?.[0]?.meanings?.[meaning]?.definitions || [];

  return (
    <>
      {definitions.map((definitionItem, index) => (
        <div key={index} className="definition-item">
          <LineBold />
          <div className="definition-item__definition">
            <p> {definitionItem.definition} </p>
          </div>
          {definitionItem.example && (
            <div className="definition-item__example">
              <Dot />
              <p>{definitionItem.example}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default WordDefenition;
