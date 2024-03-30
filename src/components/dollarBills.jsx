import React, { useEffect, useState } from "react";
import dollarBillImg from "../assets/dollar.gif"; // Add your image path here

const FallingDollarBills = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const bill = {
        id: Math.random(),
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 2}s`, // Controls the speed of the fall
      };
      setBills((currentBills) => [...currentBills, bill]);

      // Optionally remove bills that have finished falling to keep the DOM clean
      setBills((currentBills) =>
        currentBills.filter((bill) => parseFloat(bill.animationDuration) > 0.5)
      );
    }, 500); // Adjust as needed to control the density of the falling bills

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {bills.map((bill) => (
        <img
          key={bill.id}
          src={dollarBillImg}
          className="dollar-bill"
          width={"70px"}
          style={{
            left: bill.left,
            animationDuration: bill.animationDuration,
            animationDelay: `${-Math.random() * 2}s`, // Makes some bills start falling in the middle of their animation
          }}
          alt="dollar bill"
        />
      ))}
    </>
  );
};

export default FallingDollarBills;
