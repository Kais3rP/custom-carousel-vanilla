
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Kais3rP/custom-carousel-vanilla">
  REPO
  </a>

  <h3 align="center">Custom Carousel</h3>

  <p align="center">
    An highly customizable Carousel
    <br />
    <a href="https://github.com/Kais3rP/custom-carousel-vanilla"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://codepen.io/kais3rp/pen/wvWeVvx" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/Kais3rP/custom-carousel-vanilla/issues">Report Bug</a>
    ·
    <a href="https://github.com/Kais3rP/custom-carousel-vanilla/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
* [Usage](#usage)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project


This is a Carousel generator. 
You can create a new carousel just creating an instance of the Carousel class.
The constructor accepts several params to customize the carousel (see API section).

### Built With

* [Vanilla JS]()


<!-- GETTING STARTED -->
## Getting Started

You can use this library by using the **CDN**  directly on your page: 
### https://cdn.jsdelivr.net/gh/Kais3rP/custom-carousel-vanilla/build/index.js

Or by importing the minified version directly as a script.

<!-- USAGE EXAMPLES -->
## Usage

* Import the library in you project.
* Create a container div element with the id "containerCarousel".
* Place your carousel images inside the container in img tags with class "carousel-img"
* Now you just need to create an instance of the Carousel constructor: const carousel = new Carousel()

## This is the constructor : 
#### ```Carousel(container id, container width (px), container height (px), image width ratio (%), image height ratio (%), margin between images (px))```
This is how you call the function:

```
<div id='containerCarousel'>
    <img class="carousel-img" src="">
    <img class="carousel-img" src="">
    <img class="carousel-img" src="">
    <img class="carousel-img" src="">
</div>
<script type="text/javascript"> 
let carousel = new Carousel();
</script>

```
### Demo Link : [https://codepen.io/kais3rp/pen/wvWeVvx](https://codepen.io/kais3rp/pen/wvWeVvx)



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/Kais3rP/custom-carousel-vanilla/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Cesare Polonara - [@CesarePolonara](https://twitter.com/CesarePolonara) - cesare.polonara@gmail.com<br>
Project Link: [https://github.com/Kais3rP/custom-carousel-vanilla](https://github.com/Kais3rP/custom-carousel-vanilla)<br>
Demo Link : [https://codepen.io/kais3rp/pen/yLOKdVj](https://codepen.io/kais3rp/pen/wvWeVvx)<br>
Personal Site : [http://cesare-polonara.netlify.app/](http://cesare-polonara.netlify.app/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Kais3rP/repo.svg?style=flat-square
[contributors-url]: https://github.com/Kais3rP/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Kais3rP/repo.svg?style=flat-square
[forks-url]: https://github.com/Kais3rP/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/Kais3rP/repo.svg?style=flat-square
[stars-url]: https://github.com/Kais3rP/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/Kais3rP/repo.svg?style=flat-square
[issues-url]: https://github.com/Kais3rP/repo/issues
[license-shield]: https://img.shields.io/github/license/Kais3rP/repo.svg?style=flat-square
[license-url]: https://github.com/Kais3rP/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/cesare-polonara-12b7138b
[product-screenshot]: images/screenshot.png