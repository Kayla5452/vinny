import React, { Component } from "react";

class Header extends Component
{
    render()
    {
        return(

            <div>
                <div class="HeadCol">
                    <header>
                        <div class="navbar navbar-dark bg-dark shadow-sm">
                            <div class="container">
                                
                                    <img src="./images/SCP_Foundation_(emblem_white).png" alt="SCP Foundation" class="Emblem"></img>
                                    <strong>SCP Foundation</strong>
                                
                                
                            </div>
                        </div>
                    </header>

                    <section class="py-5 text-center container">
                        <div class="row py-lg-5">
                            <div class="col-lg-5 col-md-8 mx-auto">
                                <img src="./images/SCP_Foundation_(emblem).svg.png" alt="SCP Foundation" class="Logo"></img>
                                <h1 class="fw-normal">SCP Foundation</h1>
                                <h3 class="fw-normal red">Warning: Classified</h3>
                                <p class="text-muted">Current test-beta of web development project #47.07b. This project is within level 4 classifcation. If you are an employee outside the intended beta-testers, you are fired effective immediately.</p>
                            </div>
                        </div>
                    </section>

                    <nav class="navbar navbar-dark bg-dark">
                        <div class="container">

                                    <strong class="txt">List stock data files used: SCP-002 to SCP-006</strong>
                                
                        </div>
                    </nav>
                </div>
            </div>

        );
    }
}

export default Header;
