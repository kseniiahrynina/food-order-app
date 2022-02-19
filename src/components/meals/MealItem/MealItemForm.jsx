import React from "react";
import classes from "./MealItemForm.module.css";
import { FaPlus } from "react-icons/fa";
import Input from "../../ui/Input";

const MealItemForm = ({ id }) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>
        <FaPlus />
        <span>Add</span>
      </button>
    </form>
  );
};

export default MealItemForm;
