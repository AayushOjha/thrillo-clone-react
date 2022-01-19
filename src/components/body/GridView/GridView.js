import React, { Component } from "react";
import style from "./GridView.module.css";
import sec1 from "../../../assets/50.jpg";
import Dubai from "../../../assets/Dubai.jpg";
import Goa from "../../../assets/Goa.jpg";
import Hp from "../../../assets/Himachal Pradesh.jpg";
import Maldives from "../../../assets/Maldives.jpg";
import Rajasthan from "../../../assets/Rajasthan.jpg";
import Sikkim from "../../../assets/Sikkim.jpg";
import Srilanka from "../../../assets/Srilanka.jpg";
import Trek from "../../../assets/Trek.jpg";

export default class GridView extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.sec1} style={{ backgroundImage: `url(${sec1})` }}>
          <div className={style.blackBg}></div>
          <div className={style.offTitle}>
            <div>
              <h1 className={style.upto}>UPTO</h1>
              <div className={style.offer}>
                <div className={style.value}>50</div>
                <div className={style.percent}>
                  <h2>%</h2>
                  <h3>Off</h3>
                </div>
              </div>
              <div>
                <h1 className={style.holiday}>Holiday Packages</h1>
              </div>
            </div>
          </div>

          <div className={style.bookBtn}></div>
        </div>

        <div className={style.sec2}>
          <div className={`${style.c1} ${style.gradient}`}>
            <img src={Rajasthan} className="50" alt="Rajasthan" />
            <div className={style.center}>Rajasthan</div>
          </div>
          <div className={style.c2}>
            <img src={Dubai} className="" alt="Dubai" />
            <div className={style.center}>Dubai</div>
          </div>
          <div className={style.c3}>
            <img src={Goa} className="50" alt="Goa" />
            <div className={style.center}>Goa</div>
          </div>
        </div>
        <div className={style.sec3}>
          <div className={`${style.c1} ${style.gradient}`}>
            <img src={Sikkim} className={style.gradient} alt="Goa" />
            <div className={style.center}>Sikkim</div>
          </div>
          <div className={style.c2}>
            <img src={Hp} className="50" alt="Goa" />
            <div className={style.center}>
              Himachal <br /> Pradesh
            </div>
          </div>
          <div className={style.c3}>
            <img src={Maldives} className="50" alt="Goa" />
            <div className={style.center}>Maldives</div>
          </div>
        </div>
        <div className={style.sec4}>
          <div className={style.c1}>
            <img src={Trek} className="50" alt="Goa" />
            <div className={style.center}>Trek</div>
          </div>
          <div className={`${style.c2} ${style.gradient}`}>
            <img src={Srilanka} className={style.gradient} alt="Goa" />
            <div className={style.center}>Srilanka</div>
          </div>
          <div className={style.content}>
            <button>View all</button>
          </div>
        </div>
      </div>
    );
  }
}
