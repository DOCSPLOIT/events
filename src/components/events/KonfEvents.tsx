import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Images } from "../../assets/resources";
import { KonfEvents } from "../../models/events";
import { fetchEvents } from "../../store/events";
import { MdOutlinePlace } from "react-icons/md";
import { FiInfo } from "react-icons/fi";

import "./events.css";

/**
 * This component will render events loaded from api in a grid view design
 *
 * This page loaded in three stages based on the loading state from event store
 *
 * `case 1 :` loading ="idle"
 *    - shows a bootstrap spinner
 *
 * `case 2 : `loading="completed" and has no data
 *
 *    - show a middle aligned text 'No Events hosted'
 *
 * case 3: loading="completed" and has data
 *
 *    - shows the grid view
 *
 * @returns {JSXElement}
 */

function KonfhubEvents() {
  /**
   * event state will be selected from redux states using useSelector Hook
   */
  const events: KonfEvents = useSelector((state: any) => state.events);
  /**
   * We need to store the data when page is  loaded initially, hence we need
   * dispatch the action and store the response from api to event store
   */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvents({ limit: 12 }));
  }, []);

  return (
    <div className="col-md-12 mt-5">
      <h1 className="font-nunito" style={{ fontWeight: "700" }}>
        {(events.count > 250 ? "250+" : events.count) + " "}Events
      </h1>

      {events.loading === "idle" && (
        <>
          <div
            style={{ height: 100 }}
            className="col-md-12 d-flex justify-content-center align-items-center"
          >
            <div
              className="spinner-border text-center mx-auto col-md-1"
              role="status"
            ></div>
          </div>
        </>
      )}
      {events.loading === "completed" && events.count == 0 && (
        <>
          <div
            style={{ height: 100 }}
            className="col-md-12 d-flex justify-content-center align-items-center"
          >
            <p className="font-nunito text-secondary">No Events Scheduled</p>
          </div>
        </>
      )}

      {events.loading === "completed" && events.events.length > 0 && (
        <div className="row col-md-12 card-deck m-auto ">
          {" "}
          {events.events.map((item, index) => {
            return (
              <div
                key={index + 1}
                className="card mx-auto my-3 position-relative p-0"
              >
                <img src={Images.CAPTION} className="card-img-top" />
                <img
                  src={Images.TOOLTIP}
                  height="30"
                  width="30"
                  className="position-absolute"
                  style={{ left: 15, top: 15 }}
                />
                <div className="mt-3 col-md-12 mx-3">
                  <h6 className="font-prompt w-75 ">
                    {item.name.length > 40
                      ? item.name.substring(0, 40) + "..."
                      : item.name}
                  </h6>
                  <div className="row ">
                    <div className="col-md-6  mx-auto my-md-2 ">
                      <span className="d-inline text font-prompt">
                        <span className="d-inline p-1 float-right">
                          <MdOutlinePlace size={18} />
                        </span>
                        Raddison Blue
                      </span>
                    </div>
                    <div className="col-md-6 mx-auto my-2">
                      <span className="d-inline text font-prompt">
                        <span className="d-inline p-1 float-right">
                          <FiInfo size={16} />
                        </span>
                        {item.is_free ? "Free" : "Paid"}&nbsp;|&nbsp;
                        {item.is_virtual ? "Online" : "Offline"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default KonfhubEvents;
