import { useState } from "react";
import "../css/addWidget/addWidget.css";
import Widget from "../widgets/widgets";
import { useSelector, useDispatch } from "react-redux";
import { widgetSliderToggle } from "../../redux/features/widgetSlider/widgetSlider";
import { widgetActive } from "../../redux/features/widgetActive/widgetActive";

function AddWidget() {
  const widgetsActive = useSelector((state) => state.widgetActive.value);
  const widgetSlider = useSelector((state) => state.widgetSlider.value);

  const [widget, setWidget] = useState(0);
  const [addingWidgets, setaddingWidgets] = useState([]);
  const [deleteWidgets, setdeleteWidgets] = useState([]);

  const dispatch = useDispatch();

  const widgetSelect = (e, widgetIndex) => {
    if (e.target.checked) {
      addingWidgets.push(widgetIndex);
      dispatch(widgetActive({ categoryIdx: widget, widgetIdx: widgetIndex }));
    } else {
      deleteWidgets.push(widgetIndex);
      dispatch(widgetActive({ categoryIdx: widget, widgetIdx: widgetIndex }));
    }
  };

  const changeWidgetCat = (index) => {
    setWidget(index);
  };

  const addWidgets = () => {
    setaddingWidgets([]);
    setdeleteWidgets([]);
    dispatch(widgetSliderToggle());
  };

  const cancelWidget = () => {
    for (let i = 0; i < addingWidgets.length; i++) {
      if (widgetsActive[widget].widgets[addingWidgets[i]].widgetActiveStatus) {
        dispatch(
          widgetActive({ categoryIdx: widget, widgetIdx: addingWidgets[i] })
        );
      }
    }

    for (let i = 0; i < deleteWidgets.length; i++) {
      if (!widgetsActive[widget].widgets[deleteWidgets[i]].widgetActiveStatus) {
        dispatch(
          widgetActive({ categoryIdx: widget, widgetIdx: deleteWidgets[i] })
        );
      }
    }

    setdeleteWidgets([]);
    setaddingWidgets([]);
    dispatch(widgetSliderToggle());
  };

  return (
    <div className={widgetSlider == true ? "addWidgetContainer" : "dispNone"}>
      <div className="addWidgetHeading">
        Add Widget
        <i class="fa-solid fa-xmark" onClick={() => cancelWidget()}></i>
      </div>
      <div className="addWidgetIntro">
        Personalise your dashboard by adding the following widget
      </div>
      <div className="addWidgetCategory">
        {Widget.map((widgets, index) => {
          return (
            <div
              key={index}
              onClick={() => changeWidgetCat(index)}
              className={index == widget ? "categoryActive" : null}
            >
              {widgets.category}
            </div>
          );
        })}
      </div>

      <div className="addWidgetCategoryWidgets">
        {Widget[widget].widgets.map((widgets, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                checked={
                  widgetsActive[widget].widgets[index].widgetActiveStatus
                    ? true
                    : false
                }
                onChange={(e) => widgetSelect(e, index)}
              ></input>
              {widgets.widgetName}
            </div>
          );
        })}
      </div>

      <div className="addWidgetBottomBtns">
        <div
          className="addWidgetBottomBtnsCancel"
          onClick={() => cancelWidget()}
        >
          Cancel
        </div>
        <div
          className="addWidgetBottomBtnsConfirm"
          onClick={() => addWidgets()}
        >
          Confirm
        </div>
      </div>
    </div>
  );
}

export default AddWidget;
