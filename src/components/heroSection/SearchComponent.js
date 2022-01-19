import classes from "./SearchComponent.module.css";
import { FaHome, FaGlobeAmericas, FaTrophy, FaSuitcase, FaTaxi, FaSearch} from "react-icons/fa";
import {BsSearch} from 'react-icons/bs';

export default function SearchComponent() {
  return (
    <div className={classes.centerFlexX + ' ' + classes.cointainer}>
      <div className={classes.centerFlexY + " " + classes.searchTabs}>
        <div
          className={
            classes.searchTab +
            " " +
            classes.startingSearchTab +
            " " +
            classes.centerFlexY
          }
        >
          <FaGlobeAmericas className={classes.icon} />
        
          <small style={{color:'#fff'}}>All</small>
        </div>

        <div className={classes.searchTab + ' ' +classes.centerFlexY}>
          <FaTrophy className={classes.icon} />
          <small style={{color:'#fff'}}>Activities</small>
        </div>

        <div className={classes.searchTab + ' ' +classes.centerFlexY}>
          <FaSuitcase className={classes.icon} />
          <small style={{color:'#fff'}}>Tour</small>
        </div>

        <div className={classes.searchTab + ' ' +classes.centerFlexY}>
          <FaTaxi className={classes.icon} />
          <small style={{color:'#fff'}}>Rental</small>
        </div>

        <div className={classes.searchTab+' '+classes.endingSearchTab+' '+classes.centerFlexY}>
        <FaHome className={classes.icon} />
          <small style={{color:'#fff'}}>Staycations</small>
        </div>
      </div>
      <div className={classes.searchBarCointainer}>
        <div className={classes.searchBar}>
          <input
            className={classes.searchInput}
            type="text"
            placeholder="Search Destination, Tour, Activities"
          />
        </div>
        <div className={classes.searchIconBox}>
          <BsSearch style={{color:'black !important'}} className={classes.searchIcon} />
          {/* <i className="fa fa-2x fa-search" aria-hidden="true"></i> */}
        </div>
      </div>
    </div>
  );
}
