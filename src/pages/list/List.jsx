import { format } from "date-fns";
import { useContext, useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import "./list.css";
const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location?.state.destination);
  const [dates, setDates] = useState(location.state.dates);

  const [options, setOptions] = useState({
    adult: location.state.options.adult || 1,
    children: location.state.options.children || 0,
    room: location.state.options.room || 1,
  });
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const { data, loading, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 30000}`
  );
  const { dispatch } = useContext(SearchContext);
  const onChange = (e) => {
    setOptions((prev) => {
      return {
        ...prev,
        [e.target.name]: Number(e.target.value),
      };
    });
  };
  const handleClick = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    reFetch();
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input
                onChange={(e) => setDestination(e.target.value)}
                placeholder={destination}
                type="text"
              />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label htmlFor="">Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    min={1}
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.adult}
                    onChange={onChange}
                    name="adult"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children </span>
                  <input
                    min={0}
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.children}
                    name="children"
                    onChange={onChange}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    min={1}
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.room}
                    name="room"
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
