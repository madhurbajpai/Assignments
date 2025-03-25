import React, { useState } from "react";
import "./Matrix.css";

const Matrix = () => {
  const [matrix, setMatrix] = useState([
    ["white", "white", "white"],
    ["white", "white", "white"],
    ["white", "white", "white"],
  ]);

  const [order, setOrder] = useState([]);
  const handleClick = (index, subIndex) => {
    if (matrix[index][subIndex] === "white") {
      const newMatrix = matrix.map((row) => [...row]);
      newMatrix[index][subIndex] = "green";
      setMatrix(newMatrix);
      setOrder((preOrder) => {
        const newOrder = [...preOrder, [index, subIndex]];
        console.log(newOrder);
        if (newOrder.length === 9) {
            newOrder.forEach((i, idx) => {
                setTimeout(() => {
                    setMatrix((prevMatrix) => {
                        const newMatrix = prevMatrix.map((row) => [...row]);
                        console.log("changing ", i[0], i[1]);
                        newMatrix[i[0]][i[1]] = "orange";
                        return newMatrix;
                    });
                }, idx*600);
            });
        }
        return newOrder;
    });
    }
  };
  return (
    <div className="matrix-main">
      <h1>Matrix</h1>

      {matrix.map((item, index) => (
        <div className="matrix-item-row" id={`i-${index}`} key={index}>
          {item.map((subItem, subIndex) => (
            <div
              className="matrix-item-col"
              id={`j-${subIndex}`}
              key={subIndex}
              style={{ backgroundColor: subItem }}
              onClick={() => handleClick(index, subIndex)}
            >
              
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Matrix;
