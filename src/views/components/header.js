import "../css/header/header.css";
import { useSelector, useDispatch } from "react-redux";
import { widgetSliderToggle } from "../../redux/features/widgetSlider/widgetSlider";
import { lastDaysDrpDownToggle } from "../../redux/features/lastDays/lastDays";
import { useState } from "react";

function Header() {
  const daysLimit = [
    "Last 2 days",
    "Last 5 days",
    "Last 10 days",
    "Last 15 days",
  ];
  const [dateDuration, setdataDuration] = useState(daysLimit[0]);

  const lastDays = useSelector((state) => state.lastDays.value);
  const dispatch = useDispatch();

  const setDaysDuration = (index) => {
    setdataDuration(daysLimit[index]);
  };

  return (
    <div className="headerContainer">
      <div className="headerHeading">My Dashboard</div>
      <div
        className="headerAddWidget"
        onClick={() => dispatch(widgetSliderToggle())}
      >
        Add Widget
      </div>
      <div className="refreshIcon">
        <i class="fa-duotone fa-solid fa-arrows-rotate"></i>
      </div>
      <div
        className="headerDrpdownDuration"
        onClick={() => dispatch(lastDaysDrpDownToggle())}
      >
        {dateDuration}
        <i class="fa-solid fa-circle-chevron-down"></i>
        <div className={lastDays ? "headerDrpdownDurationOptions" : "dispNone"}>
          {daysLimit.map((days, index) => {
            return (
              <div key={index} onClick={() => setDaysDuration(index)}>
                {days}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
