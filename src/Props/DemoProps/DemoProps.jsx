import React, { Component } from 'react'
import ProductCard from './ProductCard'
export default class DemoProps extends Component {
  render() {
    return (
      <div className="container">
        <div className="w-25 col-3">
          <ProductCard name=" Hau" age=" 18"></ProductCard>
        </div>
        <div className="w-25">
          <ProductCard name="Quan" age=" 19"></ProductCard>
        </div>
      </div>
    )
  }
}
