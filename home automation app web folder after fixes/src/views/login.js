import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>exported project</title>
        <meta property="og:title" content="exported project" />
      </Helmet>
      <div className="login-i-phone141">
        <span className="login-text">
          <span>
            <span>Home Automation</span>
            <br></br>
            <span>App</span>
          </span>
        </span>
        <div className="login-androidstatusbar">
          <img
            alt="backgroundI193"
            src="/playground_assets/backgroundi193-6g0s-200h.png"
            className="login-background"
          />
          <div className="login-icons">
            <img
              alt="CellularI193"
              src="/playground_assets/cellulari193-ahej.svg"
              className="login-cellular"
            />
            <img
              alt="WifiI193"
              src="/playground_assets/wifii193-ygdf.svg"
              className="login-wifi"
            />
            <div className="login-battery">
              <img
                alt="UnionI193"
                src="/playground_assets/unioni193-50zd.svg"
                className="login-union"
              />
              <img
                alt="CapacityI193"
                src="/playground_assets/capacityi193-9h8r-200h.png"
                className="login-capacity"
              />
            </div>
          </div>
          <span className="login-text5">
            <span>12:30</span>
          </span>
        </div>
        <div className="login-androidnavbar"></div>
        <Link to="/home" className="login-navlink">
          <div className="login-group2">
            <span className="login-text7">
              <span>LOG IN</span>
            </span>
          </div>
        </Link>
        <input
          type="email"
          placeholder="Email address"
          className="login-textinput input"
        />
        <input
          type="password"
          placeholder="Password"
          className="login-textinput1 input"
        />
        <img
          alt="Arrow17236"
          src="/playground_assets/arrow17236-bi08.svg"
          className="login-arrow1"
        />
        <img
          alt="Arrow27237"
          src="/playground_assets/arrow27237-kwoc.svg"
          className="login-arrow2"
        />
        <img
          alt="Rectangle27238"
          src="/playground_assets/rectangle27238-wgoh-200h.png"
          className="login-rectangle2"
        />
        <img
          alt="Vector3461"
          src="/playground_assets/vector3461-6pm.svg"
          className="login-vector"
        />
      </div>
    </div>
  )
}

export default Login
