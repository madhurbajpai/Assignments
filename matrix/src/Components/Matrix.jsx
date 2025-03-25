import React, { useState } from "react";
import "./Matrix.css";

const Matrix = () => {
  //   creat a 3*3 matrix with all white cells

  const [matrix, setMatrix] = useState([
    ["white", "white", "white"],
    ["white", "white", "white"],
    ["white", "white", "white"],
  ]);

  //to track order of clicked cells
  const [order, setOrder] = useState([]);

  //function to handle click
  const handleClick = (index, subIndex) => {
    //if the cell is clicked first time, change color to green
    if (matrix[index][subIndex] === "white") {
      //copy the matrix
      const newMatrix = matrix.map((row) => [...row]);
      //change the color of clicked cell to green
      newMatrix[index][subIndex] = "green";
      //update
      setMatrix(newMatrix);
      //add the index of clicked cell to order
      setOrder((preOrder) => {
        const newOrder = [...preOrder, [index, subIndex]];
        //if 9 cells are clicked, change color of cells to orange
        if (newOrder.length === 9) {
          newOrder.forEach((i, idx) => {
            //change color of cell to orange after 600ms
            setTimeout(() => {
              setMatrix((prevMatrix) => {
                const newMatrix = prevMatrix.map((row) => [...row]);

                //change color of cell to orange
                newMatrix[i[0]][i[1]] = "orange";
                return newMatrix;
              });
            }, idx * 600);
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
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Matrix;
