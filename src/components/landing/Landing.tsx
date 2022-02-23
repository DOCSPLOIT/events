import React from "react";
import { Images } from "../../assets/resources";
import KonfhubEvents from "../events/KonfEvents";
import "./landing.css";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import events, { fetchEvents } from "../../store/events";
function Landing() {
  const dispatch = useDispatch();
  const defaultLimit = 12;
  let extendedLimit = defaultLimit;
  const onSearch = (key: string) =>
    dispatch(fetchEvents({ search_query: key, limit: defaultLimit }));
  const onChangePastEvents = (key: string) =>
    dispatch(fetchEvents({ past_event: key, limit: defaultLimit }));

  return (
    <div className="col-md-12  mt-3">
      <div className="m-auto col-md-10">
        <img src={Images.LOGO} alt="logo" className="inline  col-md-2" />
        <div
          className="col-md-12 row m-auto position-relative pb-5  mt-4 mb-5 yellow-plate"
          style={{
            backgroundColor: "#FFDBA6",
            borderRadius: 35,
          }}
        >
          <div className="col-md-6 m-auto">
            <h1
              className="font-caveat primary-color m-3"
              style={{
                textShadow: "0px 3px 4px rgba(0,0,0,.25)",
                fontSize: "4rem",
              }}
            >
              Events
            </h1>
            <p className="font-nunito primary-color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam quis enim lobortis scelerisque fermentum dui
              faucibus in ornare quam viverra
            </p>
          </div>
          <div className="col-md-5 ml-auto text-center">
            <img
              src={Images.KONF_OCTO}
              alt="Konfhub Octupus"
              className="col-md-8 mx-auto my-5 "
            />
          </div>
          <div className="position-absolute p-3  col-md-10 col-lg-6 col-sm-12 auto paper">
            <div className="row">
              <div className="col-md-7 m-auto">
                <label
                  htmlFor="search"
                  className="font-nunito"
                  style={{ fontSize: "large", fontWeight: "700" }}
                >
                  Search
                </label>

                <div className="search ">
                  <input
                    onChange={(e) => onSearch(e.target.value)}
                    type="text"
                    name="search"
                    id="search"
                  />
                  <button type="submit" className="mt-2">
                    <BiSearch />
                  </button>
                </div>
              </div>
              <div className="col-md-5  m-auto">
                <label
                  htmlFor="past_events"
                  className="font-nunito"
                  style={{ fontSize: "large", fontWeight: "700" }}
                >
                  Past Events
                </label>

                <div className="col-md-12">
                  <select
                    className="col-md-12 p-2 font-nunito "
                    name="past_events"
                    id="past_events"
                    onChange={(e) => onChangePastEvents(e.target.value)}
                  >
                    <option defaultValue={undefined}>Default</option>
                    <option value={"true"}>True</option>
                    <option value={"false"}>False</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <KonfhubEvents />
        </div>
        <div
          className="my-3 row
        "
        >
          <div className="border col-md-4 m-auto"></div>
          <div className="col-md-3 m-auto text-center">
            <button
              onClick={() => {
                extendedLimit += defaultLimit;
                dispatch(fetchEvents({ limit: extendedLimit }));
              }}
              className="btn btn-outline-secondary col-md-6 mx-auto"
            >
              Load More
            </button>
          </div>
          <div className="border col-md-4 m-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
