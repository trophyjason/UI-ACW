import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home-error.css'

const HomeError = (props) => {
  return (
    <div className="home-error-container">
      <Helmet>
        <title>Home-Error - exported project</title>
        <meta property="og:title" content="Home-Error - exported project" />
      </Helmet>
      <div className="home-error-home">
        <div className="home-error-i-phone141">
          <div className="home-error-androidstatusbar">
            <img
              alt="backgroundI499"
              src="/playground_assets/backgroundi499-rxxh-200h.png"
              className="home-error-background"
            />
            <div className="home-error-icons">
              <img
                alt="CellularI499"
                src="/playground_assets/cellulari499-eug7.svg"
                className="home-error-cellular"
              />
              <img
                alt="WifiI499"
                src="/playground_assets/wifii499-ngu.svg"
                className="home-error-wifi"
              />
              <div className="home-error-battery">
                <img
                  alt="UnionI499"
                  src="/playground_assets/unioni499-t7y.svg"
                  className="home-error-union"
                />
                <img
                  alt="CapacityI499"
                  src="/playground_assets/capacityi499-ud36-200h.png"
                  className="home-error-capacity"
                />
              </div>
            </div>
            <span className="home-error-text">
              <span>12:30</span>
            </span>
          </div>
          <img
            alt="Rectangle24993"
            src="/playground_assets/rectangle24993-kojx-200h.png"
            className="home-error-rectangle2"
          />
          <div className="home-error-group8">
            <img
              alt="Rectangle14994"
              src="/playground_assets/rectangle14994-l47-200w.png"
              className="home-error-rectangle1"
            />
            <span className="home-error-text02">
              <span>
                <span>Bedroom</span>
                <br></br>
                <span></span>
              </span>
            </span>
            <img
              alt="Vector4993"
              src="/playground_assets/vector4993-44jg.svg"
              className="home-error-vector"
            />
          </div>
          <span className="home-error-text07">Wrong Button</span>
          <div className="home-error-group9">
            <div className="home-error-container1">
              <img
                alt="Rectangle14994"
                src="/playground_assets/rectangle14994-l47-200w.png"
                className="home-error-rectangle11"
              />
              <span className="home-error-text08">
                <span>Office</span>
              </span>
              <img
                alt="Vector4994"
                src="/playground_assets/vector4994-ztnb.svg"
                className="home-error-vector1"
              />
            </div>
          </div>
          <div className="home-error-group6">
            <div className="home-error-group11">
              <div className="home-error-container2">
                <img
                  alt="Rectangle14994"
                  src="/playground_assets/rectangle14994-l47-200w.png"
                  className="home-error-rectangle12"
                />
                <img
                  alt="Vector4994"
                  src="/playground_assets/vector4994-mys.svg"
                  className="home-error-vector2"
                />
                <span className="home-error-text10">
                  <span>Kitchen</span>
                </span>
              </div>
            </div>
            <div className="home-error-container3">
              <img
                alt="Rectangle14994"
                src="/playground_assets/rectangle14994-l47-200w.png"
                className="home-error-rectangle13"
              />
              <span className="home-error-text12">
                <span>
                  <span>Living Room</span>
                  <br></br>
                  <span></span>
                </span>
              </span>
              <img
                alt="Vector4994"
                src="/playground_assets/vector4994-wpzf.svg"
                className="home-error-vector3"
              />
            </div>
            <span className="home-error-text17">
              <span>7 Devices</span>
            </span>
            <span className="home-error-text19">
              <span>7 Devices</span>
            </span>
            <span className="home-error-text21">
              <span>7 Devices</span>
            </span>
            <span className="home-error-text23">
              <span>7 Devices</span>
            </span>
          </div>
          <img
            alt="Rectangle34995"
            src="/playground_assets/rectangle34995-gx88-200h.png"
            className="home-error-rectangle3"
          />
          <img
            alt="Vector4995"
            src="/playground_assets/vector4995-dp4.svg"
            className="home-error-vector4"
          />
          <span className="home-error-text25">
            <span>Energy Efficiency</span>
          </span>
          <span className="home-error-text27">
            <span>50%</span>
          </span>
          <img
            alt="icbaselinelogout4995"
            src="/playground_assets/icbaselinelogout4995-3lhl.svg"
            className="home-error-icbaselinelogout"
          />
          <span className="home-error-text29">
            <span>Log out</span>
          </span>
          <span className="home-error-text31">
            <span>Add</span>
          </span>
          <span className="home-error-text33">
            <span>28 Devices</span>
          </span>
          <span className="home-error-text35">
            <span>Welcome To Your Home</span>
          </span>
        </div>
        <span className="home-error-text37">
          <span className="home-error-text38">Inactive button</span>
          <br className="home-error-text39"></br>
          <span className="home-error-text40">
            Wrong button selected for goal
          </span>
          <br className="home-error-text41"></br>
          <span className="home-error-text42">
            Click below to return to back
          </span>
          <br></br>
        </span>
        <Link to="/home" name="Home" className="home-error-navlink button">
          OK
        </Link>
      </div>
    </div>
  )
}

export default HomeError
