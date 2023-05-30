import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './lighting-error.css'

const LightingError = (props) => {
  return (
    <div className="lighting-error-container">
      <Helmet>
        <title>Lighting-Error - exported project</title>
        <meta property="og:title" content="Lighting-Error - exported project" />
      </Helmet>
      <div className="lighting-error-lighting">
        <div className="lighting-error-i-phone141">
          <span className="lighting-error-text">
            <span className="lighting-error-text01">Inactive button</span>
            <br className="lighting-error-text02"></br>
            <span className="lighting-error-text03">
              Wrong button selected for goal
            </span>
            <br className="lighting-error-text04"></br>
            <span className="lighting-error-text05">
              Click below to return to back
            </span>
            <br></br>
          </span>
          <Link
            to="/lighting"
            name="Home"
            className="lighting-error-navlink button"
          >
            OK
          </Link>
        </div>
        <img
          alt="Rectangle74915"
          src="/playground_assets/rectangle74915-q84x-200w.png"
          className="lighting-error-rectangle7"
        />
        <div className="lighting-error-androidstatusbar">
          <img
            alt="backgroundI491"
            src="/playground_assets/backgroundi491-voi-200h.png"
            className="lighting-error-background"
          />
          <div className="lighting-error-icons">
            <img
              alt="CellularI491"
              src="/playground_assets/cellulari491-87.svg"
              className="lighting-error-cellular"
            />
            <img
              alt="WifiI491"
              src="/playground_assets/wifii491-2cf.svg"
              className="lighting-error-wifi"
            />
            <div className="lighting-error-battery">
              <img
                alt="UnionI491"
                src="/playground_assets/unioni491-jn6k.svg"
                className="lighting-error-union"
              />
              <img
                alt="CapacityI491"
                src="/playground_assets/capacityi491-37b-200h.png"
                className="lighting-error-capacity"
              />
            </div>
          </div>
          <span className="lighting-error-text07">
            <span>12:30</span>
          </span>
        </div>
        <span className="lighting-error-text09">
          <span>ON</span>
        </span>
        <div className="lighting-error-container1">
          <img
            alt="Rectangle14915"
            src="/playground_assets/rectangle14915-5zbu-200w.png"
            className="lighting-error-rectangle1"
          />
          <img
            alt="Vector4915"
            src="/playground_assets/vector4915-tcu7.svg"
            className="lighting-error-vector"
          />
          <span className="lighting-error-text11">
            <span>20%</span>
          </span>
          <span className="lighting-error-text13">
            <span>Light 2</span>
          </span>
        </div>
        <img
          alt="Vector4915"
          src="/playground_assets/vector4915-15j9.svg"
          className="lighting-error-vector1"
        />
        <span className="lighting-error-text15">
          <span>50%</span>
        </span>
        <img
          alt="Rectangle24915"
          src="/playground_assets/rectangle24915-flgd-200h.png"
          className="lighting-error-rectangle2"
        />
        <span className="lighting-error-text17">
          <span>Lighting</span>
        </span>
        <span className="lighting-error-text19">
          <span>Light 1</span>
        </span>
        <img
          alt="Ellipse14915"
          src="/playground_assets/ellipse14915-wqb7-200h.png"
          className="lighting-error-ellipse1"
        />
        <div className="lighting-error-androidstatusbar1">
          <img
            alt="backgroundI491"
            src="/playground_assets/backgroundi491-5k6o-200h.png"
            className="lighting-error-background1"
          />
          <div className="lighting-error-icons1">
            <img
              alt="CellularI491"
              src="/playground_assets/cellulari491-mxz8.svg"
              className="lighting-error-cellular1"
            />
            <img
              alt="WifiI491"
              src="/playground_assets/wifii491-rrrc.svg"
              className="lighting-error-wifi1"
            />
            <div className="lighting-error-battery1">
              <img
                alt="UnionI491"
                src="/playground_assets/unioni491-2e0b.svg"
                className="lighting-error-union1"
              />
              <img
                alt="CapacityI491"
                src="/playground_assets/capacityi491-pn8f-200h.png"
                className="lighting-error-capacity1"
              />
            </div>
          </div>
          <span className="lighting-error-text21">
            <span>12:30</span>
          </span>
        </div>
        <div className="lighting-error-androidnavbar"></div>
        <img
          alt="Rectangle24915"
          src="/playground_assets/rectangle24915-ndgr-200h.png"
          className="lighting-error-rectangle21"
        />
        <img
          alt="Vector4915"
          src="/playground_assets/vector4915-v79.svg"
          className="lighting-error-vector2"
        />
        <img
          alt="Vector4915"
          src="/playground_assets/vector4915-ec6.svg"
          className="lighting-error-vector3"
        />
        <span className="lighting-error-text23">
          <span>Back</span>
        </span>
        <span className="lighting-error-text25">
          <span>Home</span>
        </span>
        <img
          alt="Vector4916"
          src="/playground_assets/vector4916-nhac.svg"
          className="lighting-error-vector4"
        />
      </div>
    </div>
  )
}

export default LightingError
