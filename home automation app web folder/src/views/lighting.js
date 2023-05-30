import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './lighting.css'

const Lighting = (props) => {
  return (
    <div className="lighting-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="lighting-lighting">
        <div className="lighting-i-phone141"></div>
        <Link to="/light1" className="lighting-navlink">
          <img
            alt="Rectangle74915"
            src="/playground_assets/rectangle74915-q84x-200w.png"
            className="lighting-rectangle7"
          />
        </Link>
        <div className="lighting-androidstatusbar">
          <img
            alt="backgroundI491"
            src="/playground_assets/backgroundi491-voi-200h.png"
            className="lighting-background"
          />
          <div className="lighting-icons">
            <img
              alt="CellularI491"
              src="/playground_assets/cellulari491-87.svg"
              className="lighting-cellular"
            />
            <img
              alt="WifiI491"
              src="/playground_assets/wifii491-2cf.svg"
              className="lighting-wifi"
            />
            <div className="lighting-battery">
              <img
                alt="UnionI491"
                src="/playground_assets/unioni491-jn6k.svg"
                className="lighting-union"
              />
              <img
                alt="CapacityI491"
                src="/playground_assets/capacityi491-37b-200h.png"
                className="lighting-capacity"
              />
            </div>
          </div>
          <span className="lighting-text">
            <span>12:30</span>
          </span>
        </div>
        <span className="lighting-text02">
          <span>ON</span>
        </span>
        <Link to="/lighting-error" className="lighting-navlink1">
          <div className="lighting-container1">
            <img
              alt="Rectangle14915"
              src="/playground_assets/rectangle14915-5zbu-200w.png"
              className="lighting-rectangle1"
            />
            <img
              alt="Vector4915"
              src="/playground_assets/vector4915-tcu7.svg"
              className="lighting-vector"
            />
            <span className="lighting-text04">
              <span>20%</span>
            </span>
            <span className="lighting-text06">
              <span>Light 2</span>
            </span>
          </div>
        </Link>
        <img
          alt="Vector4915"
          src="/playground_assets/vector4915-15j9.svg"
          className="lighting-vector1"
        />
        <span className="lighting-text08">
          <span>50%</span>
        </span>
        <img
          alt="Rectangle24915"
          src="/playground_assets/rectangle24915-flgd-200h.png"
          className="lighting-rectangle2"
        />
        <span className="lighting-text10">
          <span>Lighting</span>
        </span>
        <Link to="/light1" className="lighting-text12">
          <span>Light 1</span>
        </Link>
        <img
          alt="Ellipse14915"
          src="/playground_assets/ellipse14915-wqb7-200h.png"
          className="lighting-ellipse1"
        />
        <div className="lighting-androidstatusbar1">
          <img
            alt="backgroundI491"
            src="/playground_assets/backgroundi491-5k6o-200h.png"
            className="lighting-background1"
          />
          <div className="lighting-icons1">
            <img
              alt="CellularI491"
              src="/playground_assets/cellulari491-mxz8.svg"
              className="lighting-cellular1"
            />
            <img
              alt="WifiI491"
              src="/playground_assets/wifii491-rrrc.svg"
              className="lighting-wifi1"
            />
            <div className="lighting-battery1">
              <img
                alt="UnionI491"
                src="/playground_assets/unioni491-2e0b.svg"
                className="lighting-union1"
              />
              <img
                alt="CapacityI491"
                src="/playground_assets/capacityi491-pn8f-200h.png"
                className="lighting-capacity1"
              />
            </div>
          </div>
          <span className="lighting-text14">
            <span>12:30</span>
          </span>
        </div>
        <div className="lighting-androidnavbar"></div>
        <img
          alt="Rectangle24915"
          src="/playground_assets/rectangle24915-ndgr-200h.png"
          className="lighting-rectangle21"
        />
        <img
          alt="Vector4915"
          src="/playground_assets/vector4915-v79.svg"
          className="lighting-vector2"
        />
        <Link to="/bedroom" className="lighting-navlink2">
          <img
            alt="Vector4915"
            src="/playground_assets/vector4915-ec6.svg"
            className="lighting-vector3"
          />
        </Link>
        <Link to="/bedroom" className="lighting-text16">
          <span>Back</span>
        </Link>
        <Link to="/home" className="lighting-text18">
          <span>Home</span>
        </Link>
        <Link to="/home" className="lighting-navlink3">
          <img
            alt="Vector4916"
            src="/playground_assets/vector4916-nhac.svg"
            className="lighting-vector4"
          />
        </Link>
      </div>
    </div>
  )
}

export default Lighting
