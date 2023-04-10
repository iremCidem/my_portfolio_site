import React from "react";
import "./app.css";
import Infos from "./components/infos";
import Sites from "./components/sites";
import { Row, Col } from "antd";

export default function App() {
  return (
    <div className="bg">
      <div>
        <h1 className="app">Welcome.</h1>
      </div>

      <Row>
        <Col span={12} className="gutter-row bg  ">
          <Infos />
        </Col>
        <Col span={12} className="gutter-row bg ">
          <Sites />
        </Col>
      </Row>
    </div>
  );
}
