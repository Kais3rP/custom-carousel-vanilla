class Carousel{constructor(a=containerCarousel,b=800,c=500,d=80,e=80,f=40){var g=Math.floor;this.container=a,this.imgArr=[...this.container.querySelectorAll(".carousel-img")],this.isPressed=!1,this.view=g(this.imgArr.length/2),this.containerWidth=b,this.containerHeight=c,this.imgWidthRatio=d,this.imgHeightRatio=e,this.imgWidth=this.containerWidth/100*this.imgWidthRatio,this.imgHeight=this.containerHeight/100*this.imgHeightRatio,this.imgMargin=f,this.numOfImg=this.imgArr.length,this.numOfLeftImg=g(this.numOfImg/2);this.view=g(this.numOfImg/2),this.imgPlusMargins=this.imgWidth+this.imgMargin,this.firstPosition=-this.imgPlusMargins*this.numOfLeftImg,this.containerPieceWidth=this.containerWidth/100*((100-this.imgWidthRatio)/2),this.isPressed=!1}create(){return window.containerCarousel?void this.createAndStyleElements():console.log("You need to create a div with the id of containerCarousel")}createAndStyleElements(){const a=this;(function styleContainer(b){b.style.position="relative",b.style.display="flex",b.style.justifyContent="center",b.style.alignItems="center",b.style.overflow="hidden",b.style.width=a.containerWidth+"px",b.style.height=a.containerHeight+"px"})(this.container),function createArrows(a){const b=document.createElement("link"),c=document.querySelector("head");c.appendChild(b),b.setAttribute("rel","stylesheet"),b.setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");const d=document.createElement("i");d.classList.add("fas"),d.classList.add("fa-chevron-left"),d.style.position="absolute",d.style.left="0",d.style.fontSize="50px",d.style.color="white",d.style.textShadow="3px 3px 10px #FFFFFF",d.style.cursor="pointer",d.id="left",a.container.appendChild(d);const e=document.createElement("i");e.classList.add("fas"),e.classList.add("fa-chevron-right"),e.style.position="absolute",e.style.right="0",e.style.fontSize="50px",e.style.color="white",e.style.textShadow="3px 3px 10px #FFFFFF",e.style.cursor="pointer",e.id="right",a.container.appendChild(e),d.onmouseover=a=>{a.target.style.color="#CDCDCD"},e.onmouseover=a=>{a.target.style.color="#CDCDCD"},d.onmouseout=a=>{a.target.style.color="white"},e.onmouseout=a=>{a.target.style.color="white"},d.onclick=()=>{if(!a.isPressed){a.isPressed=!0,setTimeout(()=>{a.isPressed=!1},1100),a.view--;for(let b of a.imgArr){let c=getComputedStyle(b).left,d=a.getAbsoluteVal(c)+a.imgPlusMargins+"px";b.style.left=d}2===a.view&&(a.imgArr[a.imgArr.length-1].style.display="none",a.imgArr[a.imgArr.length-1].style.left=-(2*a.imgPlusMargins-a.containerPieceWidth)+"px",a.view++,setTimeout(()=>{a.imgArr=a.shiftRight(a.imgArr,1),a.imgArr[0].style.display="block"},1e3))}},e.onclick=()=>{if(!a.isPressed){a.isPressed=!0,a.view++,setTimeout(()=>{a.isPressed=!1},1100);for(let b of a.imgArr){let c=getComputedStyle(b).left,d=a.getAbsoluteVal(c)-a.imgPlusMargins+"px";b.style.left=d}5===a.view&&(a.imgArr[0].style.display="none",a.imgArr[0].style.left=a.containerWidth+a.imgPlusMargins-(a.containerPieceWidth-a.imgMargin)+"px",a.view--,setTimeout(()=>{a.imgArr=a.shiftLeft(a.imgArr,1),a.imgArr[a.imgArr.length-1].style.display="block"},1e3))}}}(a),function styleImg(b){for(let c=0;c<b.length;c++)b[c].style.position="absolute",b[c].style.width=a.imgWidthRatio+"%",b[c].style.height=a.imgHeightRatio+"%",b[c].style.left=a.firstPosition+a.imgPlusMargins*(c+1)+a.containerPieceWidth+"px",b[c].style.transition="all 1s ease"}(this.imgArr)}shiftRight(a,b){let c=[],d=a.length;for(let e=0;e<a.length;e++){if(e+b>=d){c[(e+b)%d]=a[e];continue}c[e+b]=a[e]}return c}shiftLeft(a,b){let c=[],d=a.length;for(let e=0;e<a.length;e++){if(0>e-b){c[d+(e-b)%d]=a[e];continue}c[e-b]=a[e]}return c}getAbsoluteVal(a){return parseInt(a.match(/-*\d+/)[0])}}