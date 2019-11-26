import React, { Component } from "react";
import { render } from "react-dom";
import hero from "./b1hero.png";
import "./app.scss";

import { Facebook, Instagram, Whatsapp } from "./icons";
import Phone from "./phone";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div className="container c-c">
        <img
          className="hero"
          src="https://raw.githubusercontent.com/MorenoJoshua/b1dental/8c6b6a8892c9e01d6113099696498e5551cac496/b1hero.png"
        />
        <div className="redes text-white">
          <div className="sociales">
            <a href="https://facebook.com/b1dentalstudio">
              <Facebook /> B1DentalStudio
            </a>
            <a href="https://www.instagram.com/b1dentalstudio/">
              <Instagram /> B1DentalStudio
            </a>
          </div>

          <div className="telefonos">
            <Phone
              href="tel:+526646346627"
              icon="🇲🇽"
              lada="664"
              number="6346627"
            />
            <Phone
              href="https://wa.me/526641884342"
              icon={<Whatsapp />}
              lada="664"
              number="1884342"
            />
            <Phone
              href="tel:+16196005816"
              icon="🇺🇸"
              lada="619"
              number="6005816"
            />
          </div>
          <div className="direccion">
            <a href="https://goo.gl/maps/TJfFSLfEvdhTiRiU6">
              David Alfaro Siquieros 2637 Int 104
              <br />
              Zona Urbana Rio Tijuana
              <br />
              22010 Tijuana, B.C.
            </a>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
