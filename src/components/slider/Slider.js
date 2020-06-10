import React from "react";
import "./Slider.css";
import logo from "./logo.png";
function Slider(props) {
  return (
    <div className="slider-outerbox">
      <button className="left-button">left</button>
      <button className="right-button">right</button>
      <div className="slider-innerbox">
        <Pages imgname={props.imgname} info={props.info} />
        <Pages imgname={props.imgname} info={props.info} />
        <Pages imgname={props.imgname} info={props.info} />
        <Pages imgname={props.imgname} info={props.info} />
        <Pages imgname={props.imgname} info={props.info} />
        <Pages imgname={props.imgname} info={props.info} />
        <Pages imgname={props.imgname} info={props.info} />
        <Pages imgname={props.imgname} info={props.info} />
        <Pages imgname={props.imgname} info={props.info} />
        <Pages imgname={props.imgname} info={props.info} />
      </div>
    </div>
  );
}
function Pages(props) {
  return (
    <div className="imgbox">
      <img src={logo} style={{ width: "100%" }} />
      <div className="container">
        <h3 style={{ color: "grey", textTransform: "uppercase" }}>
          {props.imgname}
        </h3>
        <p>{props.info}</p>
      </div>
    </div>
  );
}
export default Slider;
