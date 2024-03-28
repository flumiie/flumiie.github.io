import React, { Component } from 'react'
import { Navbar } from '../components'
import { Outlet } from 'react-router-dom'

export default class Layout extends Component {
  render() {
    return (
      <div className="main-component">
        <Navbar />
        <Outlet />
      </div>
    )
  }
}
