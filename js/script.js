console.log("Hello World!");

///////////////////////////////////////////////////////////
// Footer- Set Current Year
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

///////////////////////////////////////////////////////////
//Navigation Menu Button
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
//Smooth scrolling animation

const allLinks = document.querySelectorAll(".main-nav-link:link"); //Get all links

//For each links
allLinks.forEach(function (link) {
  //listen when user click a link
  link.addEventListener("click", function (e) {
    e.preventDefault(); //do not do anything when user click something

    const href = link.getAttribute("href"); //record the link user click

    // For hash link scroll back at the top
    if (href == "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to specific id
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //Close navigation when clicked a link
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

///////////////////////////////////////////////////////////
// Sticky Nav
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      console.log(ent);
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      console.log(ent);
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-92px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  //Created an object
  var flex = document.createElement("div");

  //Use the object
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  //Create 2 child of the object
  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  //Put it on the body
  document.body.appendChild(flex);

  var isSupported = flex.scrollHeight === 1;

  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}

checkFlexGap();
