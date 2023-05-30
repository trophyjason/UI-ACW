import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './energy-efficiency.css'

const EnergyEfficiency = (props) => {
  return (
    <div className="energy-efficiency-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="energy-efficiency-energy-efficiency">
        <div className="energy-efficiency-i-phone141">
          <div className="energy-efficiency-androidstatusbar">
            <img
              alt="backgroundI491"
              src="/playground_assets/backgroundi491-l05j-200h.png"
              className="energy-efficiency-background"
            />
            <div className="energy-efficiency-icons">
              <img
                alt="CellularI491"
                src="/playground_assets/cellulari491-b1r4.svg"
                className="energy-efficiency-cellular"
              />
              <img
                alt="WifiI491"
                src="/playground_assets/wifii491-6wtq.svg"
                className="energy-efficiency-wifi"
              />
              <div className="energy-efficiency-battery">
                <img
                  alt="UnionI491"
                  src="/playground_assets/unioni491-xiu6.svg"
                  className="energy-efficiency-union"
                />
                <img
                  alt="CapacityI491"
                  src="/playground_assets/capacityi491-8ny-200h.png"
                  className="energy-efficiency-capacity"
                />
              </div>
            </div>
            <span className="energy-efficiency-text">
              <span>12:30</span>
            </span>
          </div>
          <div className="energy-efficiency-androidstatusbar1">
            <img
              alt="backgroundI491"
              src="/playground_assets/backgroundi491-kq54-200h.png"
              className="energy-efficiency-background1"
            />
            <div className="energy-efficiency-icons1">
              <img
                alt="CellularI491"
                src="/playground_assets/cellulari491-3rd8.svg"
                className="energy-efficiency-cellular1"
              />
              <img
                alt="WifiI491"
                src="/playground_assets/wifii491-iqcc.svg"
                className="energy-efficiency-wifi1"
              />
              <div className="energy-efficiency-battery1">
                <img
                  alt="UnionI491"
                  src="/playground_assets/unioni491-kj2h.svg"
                  className="energy-efficiency-union1"
                />
                <img
                  alt="CapacityI491"
                  src="/playground_assets/capacityi491-u2mf-200h.png"
                  className="energy-efficiency-capacity1"
                />
              </div>
            </div>
            <span className="energy-efficiency-text02">
              <span>12:30</span>
            </span>
          </div>
          <img
            alt="Rectangle24915"
            src="/playground_assets/rectangle24915-sc4b-200h.png"
            className="energy-efficiency-rectangle2"
          />
          <span className="energy-efficiency-text04">
            <span>Energy Efficiency</span>
          </span>
          <img
            alt="Ellipse14915"
            src="/playground_assets/ellipse14915-o885-200h.png"
            className="energy-efficiency-ellipse1"
          />
          <img
            alt="Rectangle24915"
            src="/playground_assets/rectangle24915-sbyl-200h.png"
            className="energy-efficiency-rectangle21"
          />
          <img
            alt="Vector4915"
            src="/playground_assets/vector4915-4mjy.svg"
            className="energy-efficiency-vector"
          />
          <span className="energy-efficiency-text06">
            <span>
              1 2 3 4 5 6 7 8 9 10 11 12 13 (h)
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className="energy-efficiency-text08">
            <span>
              <span>(KW)</span>
              <br></br>
              <span></span>
              <br></br>
              <span>4</span>
              <br></br>
              <span></span>
              <br></br>
              <span>3</span>
              <br></br>
              <span></span>
              <br></br>
              <span>2</span>
              <br></br>
              <span></span>
              <br></br>
              <span>1</span>
              <br></br>
              <span></span>
              <br></br>
              <span>0</span>
              <br></br>
              <span></span>
              <br></br>
              <span></span>
            </span>
          </span>
          <img
            alt="Rectangle84915"
            src="/playground_assets/rectangle84915-76ye-200h.png"
            className="energy-efficiency-rectangle8"
          />
          <span className="energy-efficiency-text35">
            <span>
              <span>2 kWh</span>
              <br></br>
              <span>5 kWh</span>
              <br></br>
              <span>34 kWh</span>
              <br></br>
              <span>160kWh</span>
            </span>
          </span>
          <span className="energy-efficiency-text44">
            <span>
              <span>Today</span>
              <br></br>
              <span>Yesterday</span>
              <br></br>
              <span>1 Week</span>
              <br></br>
              <span>1 Month</span>
            </span>
          </span>
          <span className="energy-efficiency-text53">
            <span>Readings</span>
          </span>
          <Link
            to="/energy-efficiency-error"
            className="energy-efficiency-navlink"
          >
            <div className="energy-efficiency-container1">
              <img
                alt="Rectangle14915"
                src="/playground_assets/solid_grey.svg-200h.png"
                className="energy-efficiency-rectangle1"
              />
              <span className="energy-efficiency-text55">
                <span>OFF</span>
              </span>
            </div>
          </Link>
          <Link
            to="/energy-efficiency-on"
            className="energy-efficiency-navlink1"
          >
            <img
              alt="Rectangle74915"
              src="/playground_assets/solid_grey.svg-200h.png"
              className="energy-efficiency-rectangle7"
            />
          </Link>
          <Link to="/energy-efficiency-on" className="energy-efficiency-text57">
            <span>ON</span>
          </Link>
          <img
            alt="Vector4915"
            src="/playground_assets/vector4915-1i18.svg"
            className="energy-efficiency-vector1"
          />
        </div>
        <Link to="/home" className="energy-efficiency-navlink2">
          <img
            alt="Vector4915"
            src="/playground_assets/vector4915-6a3.svg"
            className="energy-efficiency-vector2"
          />
        </Link>
        <Link to="/home" className="energy-efficiency-text59">
          <span>Back</span>
        </Link>
        <span className="energy-efficiency-text61">
          <span>
            <span>Warning:</span>
            <br></br>
            <span>
              Turning this on reduces power input for devices, turns off
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>all devices that have no motion detected, from motion</span>
            <br></br>
            <span>
              {' '}
              sensors, for the past hour and turns off all devices that
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>have had no user interaction for past 5 hours</span>
          </span>
        </span>
      </div>
    </div>
  )
}

export default EnergyEfficiency
