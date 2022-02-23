import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Images } from "../../assets/resources";
import { KonfEvents } from "../../models/events";
import { fetchEvents } from "../../store/events";

import "./events.css";
function KonfhubEvents() {
  const events: KonfEvents = useSelector((state: any) => state.events);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchEvents({ limit: 10 }));
  }, []);
  return (
    <div className="col-md-12 mt-5">
      <h1 className="font-nunito" style={{ fontWeight: "700" }}>
        {(events.count > 250 ? "250+" : events.count) + " "}Events
      </h1>

      {events.loading === "idle" && (
        <>
          {/* <div
            style={{ height: 100 }}
            className="col-md-12 d-flex justify-content-center align-items-center"
          >
            <div
              className="spinner-border text-center mx-auto col-md-1"
              role="status"
            ></div>
          </div> */}
          <div className="card col-md-3 ml-auto mr-auto mb-3 mt-3 position-relative">
            <img src={Images.CAPTION} />
            <img
              src={Images.TOOLTIP}
              height="30"
              width="30"
              className="position-absolute"
              style={{ left: 15, top: 15 }}
            />
            <div className="mt-3 col-md-12 mx-3">
              <h6 className="font-prompt w-75 ">
                {"Annual International Conference on Data Science and Robotics".substring(
                  0,
                  40
                ) + "..."}
              </h6>
              <div className="row ">
                <div className="col-6 tex-center ">
                  <span
                    className=" font-prompt"
                    style={{ fontSize: "small", verticalAlign: "middle" }}
                  >
                    <img
                      src={Images.PODIUM}
                      style={{ verticalAlign: "middle", position: "relative" }}
                    />
                    Raddison Blue
                  </span>
                </div>
                <div className="col-6 d-flex m-auto text-center">
                  <i className="bx bx-info-circle"></i>

                  <p className="font-prompt " style={{ fontSize: "small" }}>
                    &nbsp;Offline
                  </p>
                </div>
              </div>
            </div>
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
      {/* {
        (events.loading === "completed" && events.events.length > 0) && (
          events.events.map(item => {
            
          })
       )
      } */}
    </div>
  );
}

export default KonfhubEvents;
