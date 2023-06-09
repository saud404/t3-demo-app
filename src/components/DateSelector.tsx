import * as React from "react";
// import { render } from "react-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./styles.css";

const DateSelector = () => {
  const [startDate, setDate] = React.useState(new Date());
  const [rangeStart, setRangeStart] = React.useState(new Date());
  const defaultEndDate = new Date();
  defaultEndDate.setDate(defaultEndDate.getDate() + 7);
  const [rangeEnd, setRangeEnd] = React.useState(defaultEndDate);
  const today = new Date();

  const selectDateHandler = (d: Date) => {
    setDate(d);
  };

  const selectStartDate = (d: Date) => {
    setRangeStart(d);
  };

  const selectEndDate = (d: Date) => {
    setRangeEnd(d);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>simple datepicker</h3>
      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={selectDateHandler}
        minDate={today}
        todayButton={"Today"}
      />

      <h3>date range picker</h3>
      <DatePicker
        selectsStart
        selected={rangeStart}
        minDate={today}
        startDate={rangeStart}
        endDate={rangeEnd}
        onChange={selectStartDate}
      />
      <DatePicker
        selectsEnd
        selected={rangeEnd}
        startDate={rangeStart}
        endDate={rangeEnd}
        onChange={selectEndDate}
      />
    </div>
  );
};

export default DateSelector;
