import "./word-defenition.css";
import LineBold from "../../ui/line-bold/line-bold";

const WordDefenition = ({ data, meaning }) => {
  const definitions = data?.[0]?.meanings?.[meaning]?.definitions || [];

  return (
    <>
      {definitions.map((definitionItem, index) => (
        <div key={index} className="definition-item">
          <LineBold />
          <div>
            <p>Definition:</p>
            {definitionItem.definition}
          </div>
          {definitionItem.example && (
            <div>
              <p>Example:</p>
              {definitionItem.example}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default WordDefenition;
