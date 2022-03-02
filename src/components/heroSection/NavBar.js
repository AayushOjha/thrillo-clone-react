import { BsGift } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";
import React, { useState } from "react";
import classes from "./NavBar.module.css";
import "./../../responsiveGrid/responsive.css";
import { useQuery, gql } from "@apollo/client";

const DATAS = gql`
  query {
    homePage(id: 3) {
      data {
        attributes {
          Header {
            BrandName
            Actions {
              value
            }
          }
        }
      }
    }
  }
`;

export default function NavBar() {
  const [primaryColor, setprimaryColor] = useState("white");

  const [navStickey, setnavStickey] = useState(false);

  const { loading, error, data } = useQuery(DATAS);

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    console.log("error occored");
    return <h1>error</h1>;
  }

  const scrollFunc = () => {
    if (window.scrollY >= 64) {
      setnavStickey(true);
      setprimaryColor("black");
    } else {
      setnavStickey(false);
      setprimaryColor("white");
    }
  };

  window.addEventListener("scroll", scrollFunc);

  if (data) {
    const datax = data.homePage.data.attributes.Header;
    // console.log(JSON.stringify(datax.Actions));
    const action1 = datax.Actions[0].value;
    const action2 = datax.Actions[1].value;
    // const imgName = datax.logo.data.attributes.url;
    // const image = `http://localhost:1337${imgName}`;

    return (
      <>
        <div
          className={` ${
            navStickey
              ? classes.headerTop + " col-12 " + classes.navStickey
              : classes.headerTop + " col-11"
          }`}
        >
          <div className={`col-3 md-col-4 sm-cal-4 ${classes.logoMain}`}></div>
          <div className={classes.headerTopRight}>
            <div className={classes.navList}>
              <div className={classes.headerTopText}>
                <BsGift style={{ color: primaryColor }} />
                <p style={{ marginLeft: "5px", color: primaryColor }}>
                  {action1}
                </p>
              </div>
              <div className={classes.headerTopText}>
                <a href="/about">
                  <p style={{ color: primaryColor }}>{action2}</p>
                </a>
              </div>
            </div>
            <GoThreeBars
              style={{ fontSize: "1.8rem" }}
              className={classes.threeBar}
            />
          </div>
        </div>
      </>
    );
  }
}
