import "../css/dashboardAddWidget/dashboardAddWidget.css";
import { useSelector, useDispatch } from "react-redux";
import { widgetSliderToggle } from "../../redux/features/widgetSlider/widgetSlider";
import { useState } from "react";
import { widgetActive } from "../../redux/features/widgetActive/widgetActive";

function DashboardAddWidget() {
  const [widgetCatIdx, setwidgetCatIdx] = useState(0);

  const widgetSlider = useSelector((state) => state.widgetSlider.value);
  const widgets = useSelector((state) => state.widgetActive.value);
  const dispatch = useDispatch();

  const cancelWidget = (widgetIdx) => {
    dispatch(widgetActive({ categoryIdx: widgetCatIdx, widgetIdx: widgetIdx }));
    if (widgetSlider) dispatch(widgetSliderToggle());
  };

  const changeCategoryActive = () => {
    dispatch(widgetSliderToggle());
  };

  return (
    <div className="dashboardAddWidgetContainer">
      {widgets.map((widget, index) => {
        return (
          <div
            key={index}
            className="dashboardAddWidgetCategoriesWidgets"
            onClick={() => setwidgetCatIdx(index)}
          >
            <div className="dashboardAddWidgetCategoryName">
              {widget.category}
            </div>
            <div className="dashboardWidgetsBtn">
              {widget.widgets.map((widget, index) => {
                if (widget.widgetActiveStatus) {
                  return (
                    <div key={index} className="dashboardWidgets">
                      {widget.widgetName}
                      <i
                        class="fa-solid fa-xmark"
                        onClick={() => cancelWidget(index)}
                      ></i>
                    </div>
                  );
                }
              })}

              <div
                className="dashboardAddWidgetBtn"
                onClick={() => changeCategoryActive()}
              >
                <i class="fa-solid fa-plus"></i>Add Widget
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DashboardAddWidget;
