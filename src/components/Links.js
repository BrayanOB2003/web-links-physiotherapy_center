import "../style_sheets/Links.css"
import React from "react";

function Links(){
    return (
        <div className="container-links">
            
            <div className="container-div_img">
                <img 
                    className="container-img"
                    src={require("../imgs/logo.png")} 
                    alt="Logo"
                />
            </div>

            <div className="container-buttons">

                <button class="button">
                    Agendar cita
                    <div class="button__horizontal"></div>
                    <div class="button__vertical"></div>
                </button>

                <button class="button">
                    Servicios
                    <div class="button__horizontal"></div>
                    <div class="button__vertical"></div>
                </button>

                <button class="button">
                    Instagram
                    <div class="button__horizontal"></div>
                    <div class="button__vertical"></div>
                </button>

                <button class="button">
                    Facebook
                    <div class="button__horizontal"></div>
                    <div class="button__vertical"></div>
                </button>


                <button class="button">
                    Tik tok
                    <div class="button__horizontal"></div>
                    <div class="button__vertical"></div>
                </button>

            </div>
        </div>
    );
}

export default Links;