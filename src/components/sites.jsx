import React from "react";
import { Modal, Space } from "antd";
import weather from "../images/weather.png";
import food from "../images/food.png";
import spotify from "../images/spotify.png";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function Sites() {
  const info1 = () => {
    Modal.info({
      title: "Weather Condition App",
      content: (
        <div className="text-2">
          <p>
            I got the data i need on this site using the weather Api via the
            openweathermap address. I used axios for data fetching and formik
            library for form management. I used bootstrap as css framework.
          </p>
          <p className="text-red">--Site Content--</p>
          <p>
            On this site, you can access the current temperature and weather
            conditions of the city that you want.
          </p>

          <div className="btn">
            <a
              href="https://aquamarine-ganache-9a0961.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <DoubleRightOutlined />
              See More
            </a>
          </div>
        </div>
      ),
      onOk() {},
    });
  };
  const info2 = () => {
    Modal.info({
      title: "Food Order App",
      content: (
        <div className="text-2">
          <p>
            On this site, i created and used my required state variables in the
            redux store using redux-toolkit. I used the react-router-dom library
            for the routing process within the site. I used bootstrap as css
            framework.
          </p>
          <p className="text-red">--Site Content--</p>
          <p>
            You can order what you want from the campaigns given on this site,
            which belongs to a pizza restaurant, and find out whether there is a
            restaurant in your city.
          </p>

          <div className="btn">
            <a
              href="https://clever-phoenix-af9d76.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <DoubleRightOutlined />
              See More
            </a>
          </div>
        </div>
      ),
      onOk() {},
    });
  };
  const info3 = () => {
    Modal.info({
      title: "Spotify 2.0 App",
      content: (
        <div className="text-2">
          <p>
            I got the data i need on this site using the Web Api via the
            Developerspotify address. I managed to avoid code duplication by
            using reusable components on this site. I used the react-router-dom
            library for the routing process within the site.I created and used
            my required state variables in the redux store using redux-toolkit.
            I used the React UI library, Ant Design, for the design part of my
            site.
          </p>
          <p className="text-red">--Site Content--</p>
          <p>
            On this site, you can see the recently released popular albums and
            access the playlists on your spotify account. You can also search
            for the artist you want and access his album lists. You can choose
            your favorites from these lists and create your favorites list.
          </p>

          <div className="btn">
            <a
              href="https://poetic-cat-414ed7.netlify.app/search"
              target="_blank"
              rel="noreferrer"
            >
              <DoubleRightOutlined />
              See More
            </a>
          </div>
        </div>
      ),
      onOk() {},
    });
  };

  return (
    <div>
      <Space wrap>
        <div>
          <img
            src={weather}
            alt="site"
            className="photo photo-1"
            onClick={info1}
          />

          <img
            src={food}
            alt="site"
            className="photo photo-2"
            onClick={info2}
          />

          <img
            src={spotify}
            alt="site"
            className="photo photo-3"
            onClick={info3}
          />
        </div>
      </Space>
    </div>
  );
}
