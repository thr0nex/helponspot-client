import React from "react";
import { Link } from "react-router-dom";
import ButtonOrange from "../../../components/ButtonOrange";
// import "./App.css";

export default function CallToAction() {
  return (
    <div class="pt-24">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div class="flex flex-col w-full md:w-1/2 justify-center items-start md:text-left">
          <h1 class="my-4 text-lg leading-tight text-figmaHead font-dm-sans-h1">
            Unterstützung finden, wenn sie gebraucht wird
          </h1>
          <p class="leading-normal text-figmaParagraph font-inter-p">
            Wenn Zeit und Personal knapp sind, ist schnelle und unkomplizierte Unterstützung gefragt.
            Help-On-Spot ist in diesen Situationen die zentrale Anlaufstelle, um qualifizierte Hilfskräfte in der Nähe sichtbar zu machen
            und ihre schnelle Mobilisierung zu ermöglichen!
          </p>

          <ButtonOrange>
            <Link to="org-register1">registrieren</Link>
          </ButtonOrange>


          <img
              className="w-full md:w-2/5 z-50 md:mt-16"
              src={require("../../../assets/hacklogoporjekt.webp")}
              alt={"Logo von #WirVsVirus"}
          />

        </div>

        <div class="w-full h-full md:w-1/2 py-6 text-center md:mt-auto">
          <img
            class="w-full md:w-5/5 z-50 mt-auto"
            src={require("../../../assets/mobile_testing_1.png")}
            alt={"Dekoratives Bild"}
          />
        </div>
      </div>
    </div>
  );
}
