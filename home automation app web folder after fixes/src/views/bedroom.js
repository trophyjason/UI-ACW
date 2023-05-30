import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './bedroom.css'

const Bedroom = (props) => {
  return (
    <div className="bedroom-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="bedroom-bedroom">
        <div className="bedroom-i-phone141">
          <div className="bedroom-androidstatusbar">
            <img
              alt="backgroundI491"
              src="/playground_assets/backgroundi491-fd7-200h.png"
              className="bedroom-background"
            />
            <div className="bedroom-icons">
              <img
                alt="CellularI491"
                src="/playground_assets/cellulari491-p18a.svg"
                className="bedroom-cellular"
              />
              <img
                alt="WifiI491"
                src="/playground_assets/wifii491-ry3h.svg"
                className="bedroom-wifi"
              />
              <div className="bedroom-battery">
                <img
                  alt="UnionI491"
                  src="/playground_assets/unioni491-0446k.svg"
                  className="bedroom-union"
                />
                <img
                  alt="CapacityI491"
                  src="/playground_assets/capacityi491-r446-200h.png"
                  className="bedroom-capacity"
                />
              </div>
            </div>
            <span className="bedroom-text">
              <span>12:30</span>
            </span>
          </div>
          <div className="bedroom-androidnavbar"></div>
          <img
            alt="Rectangle24912"
            src="/playground_assets/rectangle24912-zikq-200h.png"
            className="bedroom-rectangle2"
          />
        </div>
        <div className="bedroom-androidstatusbar1">
          <img
            alt="backgroundI491"
            src="/playground_assets/backgroundi491-gfhg-200h.png"
            className="bedroom-background1"
          />
          <div className="bedroom-icons1">
            <img
              alt="CellularI491"
              src="/playground_assets/cellulari491-63l3.svg"
              className="bedroom-cellular1"
            />
            <img
              alt="WifiI491"
              src="/playground_assets/wifii491-pc8.svg"
              className="bedroom-wifi1"
            />
            <div className="bedroom-battery1">
              <img
                alt="UnionI491"
                src="/playground_assets/unioni491-ddth.svg"
                className="bedroom-union1"
              />
              <img
                alt="CapacityI491"
                src="/playground_assets/capacityi491-q3ui-200h.png"
                className="bedroom-capacity1"
              />
            </div>
          </div>
          <span className="bedroom-text02">
            <span>12:30</span>
          </span>
        </div>
        <img
          alt="Rectangle24912"
          src="/playground_assets/rectangle24912-x4l9-200h.png"
          className="bedroom-rectangle21"
        />
        <span className="bedroom-text04">
          <span>Bedroom</span>
        </span>
        <Link to="/bedroom-error" className="bedroom-navlink">
          <div className="bedroom-container1">
            <img
              alt="Rectangle34912"
              src="/playground_assets/solid_grey.svg-200h.png"
              className="bedroom-rectangle3"
            />
            <span className="bedroom-text06">
              <span>
                <span>Fans</span>
                <br></br>
                <span></span>
              </span>
            </span>
            <img
              alt="Rectangle54912"
              src="/playground_assets/solid_grey.svg-200h.png"
              className="bedroom-rectangle5"
            />
            <span className="bedroom-text11">
              <span>AC</span>
            </span>
            <img
              alt="Rectangle64912"
              src="/playground_assets/solid_grey.svg-200h.png"
              className="bedroom-rectangle6"
            />
            <span className="bedroom-text13">
              <span>Outlet</span>
            </span>
            <span className="bedroom-text15">
              <span>1 Device</span>
            </span>
            <span className="bedroom-text17">
              <span>1 Device</span>
            </span>
            <img
              alt="Rectangle14912"
              src="/playground_assets/solid_grey.svg-200h.png"
              className="bedroom-rectangle1"
            />
            <span className="bedroom-text19">
              <span>Curtains</span>
            </span>
            <span className="bedroom-text21">
              <span>1 Device</span>
            </span>
            <span className="bedroom-text23">
              <span>1 Device</span>
            </span>
            <img
              alt="Vector4912"
              src="/playground_assets/vector4912-hakg.svg"
              className="bedroom-vector"
            />
            <img
              alt="Vector4912"
              src="/playground_assets/vector4912-2mpo.svg"
              className="bedroom-vector1"
            />
            <img
              alt="Vector4912"
              src="/playground_assets/vector4912-d4hj.svg"
              className="bedroom-vector2"
            />
            <img
              alt="Vector4912"
              src="/playground_assets/vector4912-gyn.svg"
              className="bedroom-vector3"
            />
            <img
              alt="Rectangle84912"
              src="/playground_assets/solid_grey.svg-200h.png"
              className="bedroom-rectangle8"
            />
            <span className="bedroom-text25">
              <span>Heater</span>
            </span>
            <img
              alt="Vector4912"
              src="/playground_assets/vector4912-wn4c.svg"
              className="bedroom-vector4"
            />
            <span className="bedroom-text27">
              <span>18°C</span>
            </span>
          </div>
        </Link>
        <Link to="/lighting" className="bedroom-navlink1">
          <img
            alt="Rectangle74912"
            src="/playground_assets/solid_grey.svg-200h.png"
            className="bedroom-rectangle7"
          />
        </Link>
        <Link to="/lighting" className="bedroom-text29">
          <span>Lighting</span>
        </Link>
        <Link to="/lighting" className="bedroom-text31">
          <span>2 Devices</span>
        </Link>
        <img
          alt="Ellipse14912"
          src="/playground_assets/ellipse14912-rxw-200h.png"
          className="bedroom-ellipse1"
        />
        <Link to="/lighting" className="bedroom-navlink2">
          <img
            alt="Vector4912"
            src="/playground_assets/vector4912-5qwl.svg"
            className="bedroom-vector5"
          />
        </Link>
        <img
          alt="Vector4912"
          src="/playground_assets/vector4912-xlp9.svg"
          className="bedroom-vector6"
        />
        <Link to="/home" className="bedroom-navlink3">
          <img
            alt="Vector4912"
            src="/playground_assets/vector4912-clbs.svg"
            className="bedroom-vector7"
          />
        </Link>
        <Link to="/home" className="bedroom-text33">
          <span>Back</span>
        </Link>
      </div>
    </div>
  )
}

export default Bedroom
