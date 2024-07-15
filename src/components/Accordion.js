import { useState } from "react";

const Accordion = ({ items, keepOthersOpen }) => {
  const [accordionItems, setAccordionItems] = useState(items || []);

  const handleAccordionToggle = (clickedItem) => {
    setAccordionItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        toggled:
          clickedItem.id === item.id
            ? !item.toggled
            : !keepOthersOpen
            ? false
            : item.toggled,
      }))
    );
  };

  return (
    <div className="accordion-parent">
      {accordionItems.map((listItem, key) => (
        <div
          className={`accordion ${listItem.toggled ? "toggled" : ""}`}
          key={key}
        >
          <button
            className="toggle"
            onClick={() => handleAccordionToggle(listItem)}
          >
            <p>{listItem.label}</p>
            <div className="direction-indicator">
              {listItem.toggled ? "-" : "+"}
            </div>
          </button>
          <div className="content-parent">
            <div className="content">{listItem.renderContent()}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
