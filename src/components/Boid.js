import React, { Component } from "react";

class Boid extends Component {
  componentDidMount() {
    this.boids();
  }
  boids = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    
  };
  render() {
    return <canvas id="canvas"></canvas>;
  }
}

export default Boid;
