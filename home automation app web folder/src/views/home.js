import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="home-home">
        <div className="home-i-phone141">
          <div className="home-androidstatusbar">
            <img
              alt="backgroundI499"
              src="/playground_assets/backgroundi499-rxxh-200h.png"
              className="home-background"
            />
            <div className="home-icons">
              <img
                alt="CellularI499"
                src="/playground_assets/cellulari499-eug7.svg"
                className="home-cellular"
              />
              <img
                alt="WifiI499"
                src="/playground_assets/wifii499-ngu.svg"
                className="home-wifi"
              />
              <div className="home-battery">
                <img
                  alt="UnionI499"
                  src="/playground_assets/unioni499-t7y.svg"
                  className="home-union"
                />
                <img
                  alt="CapacityI499"
                  src="/playground_assets/capacityi499-ud36-200h.png"
                  className="home-capacity"
                />
              </div>
            </div>
            <span className="home-text">
              <span>12:30</span>
            </span>
          </div>
          <img
            alt="Rectangle24993"
            src="/playground_assets/rectangle24993-kojx-200h.png"
            className="home-rectangle2"
          />
          <div className="home-group8">
            <Link to="/bedroom" className="home-navlink">
              <img
                alt="Rectangle14994"
                src="/playground_assets/rectangle14994-l47-200w.png"
                className="home-rectangle1"
              />
            </Link>
            <Link to="/bedroom" className="home-text02">
              <span>
                <span>Bedroom</span>
                <br></br>
                <span></span>
              </span>
            </Link>
            <Link to="/bedroom" className="home-navlink1">
              <img
                alt="Vector4993"
                src="/playground_assets/vector4993-44jg.svg"
                className="home-vector"
              />
            </Link>
          </div>
          <span className="home-text07">Wrong Button</span>
          <div className="home-group9">
            <div className="home-container1">
              <Link to="/home-error" className="home-navlink2">
                <img
                  alt="Rectangle14994"
                  src="/playground_assets/rectangle14994-l47-200w.png"
                  className="home-rectangle11"
                />
              </Link>
              <Link to="/home-error" className="home-text08">
                <span>Office</span>
              </Link>
              <Link to="/home-error" className="home-navlink3">
                <img
                  alt="Vector4994"
                  src="/playground_assets/vector4994-ztnb.svg"
                  className="home-vector1"
                />
              </Link>
            </div>
          </div>
          <div className="home-group6">
            <div className="home-group11">
              <Link to="/home-error" className="home-navlink4">
                <div className="home-container2">
                  <img
                    alt="Rectangle14994"
                    src="/playground_assets/rectangle14994-l47-200w.png"
                    className="home-rectangle12"
                  />
                  <img
                    alt="Vector4994"
                    src="/playground_assets/vector4994-mys.svg"
                    className="home-vector2"
                  />
                  <span className="home-text10">
                    <span>Kitchen</span>
                  </span>
                </div>
              </Link>
            </div>
            <Link to="/home-error" className="home-navlink5">
              <div className="home-container3">
                <img
                  alt="Rectangle14994"
                  src="/playground_assets/rectangle14994-l47-200w.png"
                  className="home-rectangle13"
                />
                <span className="home-text12">
                  <span>
                    <span>Living Room</span>
                    <br></br>
                    <span></span>
                  </span>
                </span>
                <img
                  alt="Vector4994"
                  src="/playground_assets/vector4994-wpzf.svg"
                  className="home-vector3"
                />
              </div>
            </Link>
            <Link to="/home-error" className="home-text17">
              <span>7 Devices</span>
            </Link>
            <Link to="/home-error" className="home-text19">
              <span>7 Devices</span>
            </Link>
            <Link to="/home-error" className="home-text21">
              <span>7 Devices</span>
            </Link>
            <Link to="/bedroom" className="home-text23">
              <span>7 Devices</span>
            </Link>
          </div>
          <Link to="/energy-efficiency" className="home-navlink6">
            <img
              alt="Rectangle34995"
              src="/playground_assets/rectangle34995-gx88-200h.png"
              className="home-rectangle3"
            />
          </Link>
          <Link to="/home-error" className="home-navlink7">
            <img
              alt="Vector4995"
              src="/playground_assets/vector4995-dp4.svg"
              className="home-vector4"
            />
          </Link>
          <Link to="/energy-efficiency" className="home-text25">
            <span>Energy Efficiency</span>
          </Link>
          <Link to="/energy-efficiency" className="home-text27">
            <span>50%</span>
          </Link>
          <Link to="/" className="home-navlink8">
            <img
              alt="icbaselinelogout4995"
              src="/playground_assets/icbaselinelogout4995-3lhl.svg"
              className="home-icbaselinelogout"
            />
          </Link>
          <Link to="/" className="home-text29">
            <span>Log out</span>
          </Link>
          <span className="home-text31">
            <span>Add</span>
          </span>
          <span className="home-text33">
            <span>28 Devices</span>
          </span>
          <span className="home-text35">
            <span>Welcome To Your Home</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home
