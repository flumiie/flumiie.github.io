import React, { useState, useEffect } from "react";
import useLocalStorage from "../tools/Hooks";
import $ from "jquery";
import Tilt from "react-tilt";
import Typing from "react-typing-animation";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

const Home = () => {
  const [darkMode] = useLocalStorage("Dark Mode");
  const [typerColor, setTyperColor] = useState("");

  useEffect(() => {
    if (localStorage.getItem("Dark Mode")) setTyperColor("#F9F9F9");
    else setTyperColor("#000");
  }, [darkMode, typerColor]);

  const RowOneFinished = () => {
    $(".typer-first-row").html(
      `<h2><b style="color:${typerColor}">Hi, my name is Ferick</b></h2><br />`
    );
  };
  const RowTwoFinished = () => {
    $(".typer-second-row").html(
      `<h3><b style="color:${typerColor}">I'm a Web &amp; App Developer</b></h3><br />`
    );
  };
  const RowThreeFinished = () => {
    $(".typer-third-row").html(
      `<b style="color:${typerColor}">I can help take your ideas and brand to the web and the mobile.</b><br/><br/>`
    );
  };
  const RowFourFinished = () => {
    $(".typer-fourth-row").html(
      `<b style="color:${typerColor}">Sounds familiar or might be something that you need?</b><br/><br/>`
    );
  };
  const RowFiveFinished = () => {
    $(".typer-fifth-row").html(`
            <div id="contact-button">
                <a href="/contact">
                    <button class="btn btn-secondary">Leave a Message</button>
                </a>
            </div>
        `);
    $("#contact-button > a").hover(
      () => $("#contact-button > a > button").html("/contact"),
      () => $("#contact-button > a > button").html("Leave a Message")
    );
  };

  return (
    <div className="App container">
      <header className="App-header">
        <MainNavbar />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>

      <div className="row" id="homepage-row">
        <div className="col-sm typer-container">
          <div className="typer-first-row">
            <Typing
              className="typer"
              startDelay={2500}
              onFinishedTyping={() => RowOneFinished()}
            >
              <Typing.Speed ms={20} />
              <p>
                &lt;h2&gt;&lt;b&gt;Hi, my name is Ferick&lt;/b&gt;&lt;/h2&gt;
              </p>
            </Typing>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
