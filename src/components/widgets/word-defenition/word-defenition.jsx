import Dot from "../../ui/dot/dot";
import LineDefinition from "../../ui/line-definition/line-definition";

import "./word-defenition.css";

const WordDefenition = ({ data, meaning }) => {
  const definitions = data?.[0]?.meanings?.[meaning]?.definitions || [];

  return (
    <>
      {definitions.map((definitionItem, index) => (
        <div key={index} className="definition-item">
          <div className="definition-item__definition">
            <p> {definitionItem.definition} </p>
          </div>
          {definitionItem.example && (
            <div className="definition-item__example">
              <Dot />
              <p>{definitionItem.example}</p>
            </div>
          )}
          <LineDefinition />
        </div>
      ))}
    </>
  );
};

export default WordDefenition;
