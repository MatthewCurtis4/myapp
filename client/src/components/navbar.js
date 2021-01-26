import React, { Component } from "react";
 
class NavBar extends Component {
  render() {
    return (
        <div id="wrapper">
      <React.Fragment>
	<nav class="navbar navbar-expand-md  fixed-top transparent" id="nav1">
		<div class="container">
			<a class="navbar-brand" href="index.html">MC Curtis</a>
			<button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
				aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
				<ul class="nav">
					<li class="nav-item active">
						<a class="nav-link" href="theintro.html">The Intro <span class="sr-only">(current)</span></a>
					</li>
										<li class="nav-item">
						<a class="nav-link" href="Benjis.html">Benjis</a>
                    </li>
					<li class="nav-item">
						<a class="nav-link" href="FreezeUp.html">Freeze Up</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="UCU.html">UCU</a>
					</li>

					<li class="nav-item">
						<a class="nav-link" href="Socials.html">Socials</a>
					</li>
					<li class="nav-item">
						<a class="nav-link btn btn-outline-secondary" href="Contact.html">Contact</a>
					</li>

					<li class="nav-item">
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Full Distography Links</a>
						<div class="dropdown-menu" aria-labelledby="dropdownId">
							<a class="dropdown-item" href="FWTV.html">Fuck With the Vision</a>
							<a class="dropdown-item" href="MakeAMill.html">Make a Mill</a>
							<a class="dropdown-item" href="LiquorFlowin.html">Keep the Liquor Flowin'</a>
							<a class="dropdown-item" href="LoudThatISmoke.html">Loud That I Smoke</a>
							<a class="dropdown-item" href="FreestyleHenny.html">Freestyle Henny</a>
							<a class="dropdown-item" href="Sick.html">Sick When You Do That Remix</a>
						</div>
					</li>
                    </li>
				    </ul>
			    </div>

		    </div>
		
        </nav>
      </React.Fragment>
    </div>
    );
  }
}
 

export default NavBar;