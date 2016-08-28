import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to='/'>NewsRant</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to='/'>Search</Link></li>
              <li><Link to='/rooms'>Active Rooms</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
