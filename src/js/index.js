import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 */
function render(variables = {}) {
  let pName = "Your Name";
  if (variables.name !== null) pName = variables.name;

  let pLast = "Your Last Name";
  if (variables.lastname !== null) pLast = variables.lastname;

  let pRol = "Your Role";
  if (variables.role !== null) pRol = variables.role;

  let pCiudad = "Your City";
  if (variables.city !== null) pCiudad = variables.city;

  let pPais = "Your Country";
  if (variables.country !== null) pPais = variables.country;

  let pPos = "";
  if (variables.socialMediaPosition !== null)
    pPos = variables.socialMediaPosition;

  let pTwit = "";
  if (variables.twitter !== null) pTwit = variables.twitter;

  let pGit = "";
  if (variables.github !== null) pGit = variables.github;

  let pLink = "";
  if (variables.linkedin !== null) pLink = variables.linkedin;

  let pIns = "";
  if (variables.instagram !== null) pIns = variables.instagram;

  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
        ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${pName} ${pLast} </h1>
          <h2>${pRol}</h2>
          <h3>${pCiudad}, ${pPais}</h3>
          <ul class="${pPos}">
            <li><a href="https://twitter.com/${pTwit}"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${pGit}"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${pLink}"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${pIns}"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == ""
          ? null
          : this.value == "true"
            ? true
            : this.value == "false"
              ? false
              : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
