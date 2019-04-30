const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

/* Helper Functions */
let selectAll = query => Array.from(document.querySelectorAll(query));
let selectOne = query => document.querySelector(query);

const updateProps = (element, props, meta) => {
  let attrs = Object.entries(props);

  attrs.forEach((attr) => {
    let [prop, value] = attr;

    if (typeof value === 'function') {
      value = value(meta);
    }

    element[prop] = value;
  });

}

const updateElementsProps = (elements, props) => 
Array.isArray(props) 
    ? elements.forEach((el, i) => {
      updateProps(el, props[i], i)
    })
    : elements.forEach((el, i) => {
      updateProps(el, props, i)
    })

const updateTextContent = (element, newValue) => 
  updateProps(element, {'textContent': newValue});

const updateSrc = (element, newValue) =>
  updateProps(element, {'src': newValue});

const updateElementStyles = (element, styles) => {
  let stylesArr = Object.entries(styles);

  stylesArr.forEach(([key, value]) => {
    element.style[key] = value;
  })
}

const updateElementsStyles = (elements, styles) => elements.forEach(el => updateElementStyles(el, styles))

/* Selectors */
let navLinks = selectAll('nav a');
let ctaTitle = selectOne('.cta-text h1');
let ctaButton = selectOne('.cta-text button');
let ctaImg = selectOne('#cta-img');
let textContentHeaders = selectAll('.text-content h4');
let textContentParagraphs = selectAll('.text-content p');
let middleImg = selectOne('#middle-img');
let contactHeader = selectOne('.contact h4');
let contactParagraphs = selectAll('.contact p');
let copyrightParagraph = selectOne('footer p');

/* Content */
updateElementsProps(navLinks, { 
  textContent: (i) => siteContent.nav[`nav-item-${i+1}`],
});
updateTextContent(ctaTitle, siteContent.cta.h1);
updateTextContent(ctaButton, siteContent.cta.button);
updateSrc(ctaImg, siteContent.cta['img-src']);
updateElementsProps(textContentHeaders, [
  { textContent: siteContent['main-content']['features-h4'] },
  { textContent: siteContent['main-content']['about-h4'] },
  { textContent: siteContent['main-content']['services-h4'] },
  { textContent: siteContent['main-content']['product-h4'] },
  { textContent: siteContent['main-content']['vision-h4'] },
]);
updateElementsProps(textContentParagraphs, [
  { textContent: siteContent['main-content']['features-content'] },
  { textContent: siteContent['main-content']['about-content'] },
  { textContent: siteContent['main-content']['services-content'] },
  { textContent: siteContent['main-content']['product-content'] },
  { textContent: siteContent['main-content']['vision-content'] },
]);
updateSrc(middleImg, siteContent['main-content']['middle-img-src']);
/* Styles */
// updateElementsStyles(navLinks, {
//   color: 'green'
// })
