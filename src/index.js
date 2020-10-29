class Carousel {
    constructor(container=containerCarousel, containerWidth=800, containerHeight=500, widthRatio=80, heightRatio=80, imgMargin=40) {
        this.container = container;
        this.imgArr = [...this.container.querySelectorAll(".carousel-img")];
        this.isPressed = false;
        this.view = Math.floor(this.imgArr.length / 2);
        this.containerWidth = containerWidth;
        this.containerHeight = containerHeight;
        this.imgWidthRatio = widthRatio;
        this.imgHeightRatio = heightRatio;
        this.imgWidth = this.containerWidth / 100 * this.imgWidthRatio;
        this.imgHeight = this.containerHeight / 100 * this.imgHeightRatio;
        this.imgMargin = imgMargin;
        this.numOfImg = this.imgArr.length;
        this.numOfLeftImg = Math.floor(this.numOfImg / 2);;
        this.view = Math.floor(this.numOfImg / 2);
        this.imgPlusMargins = this.imgWidth + this.imgMargin;
        this.firstPosition = -this.imgPlusMargins * this.numOfLeftImg;
        this.containerPieceWidth = this.containerWidth / 100 * ((100 - this.imgWidthRatio) / 2); //The piece of image that is shown inside the container left and right. It's 10% because image is 80%
        this.isPressed = false;

    }
    create() {
        if (!window.containerCarousel) return console.log("You need to create a div with the id of containerCarousel")
        this.createAndStyleElements()
    }
    createAndStyleElements() {
        const that = this;
        styleContainer(this.container);
        createArrows(that);
        styleImg(this.imgArr);

        function styleContainer(cont) {
            cont.style.position = "relative";
            cont.style.display = "flex";
            cont.style.justifyContent = "center";
            cont.style.alignItems = "center";
            cont.style.overflow = "hidden";
            cont.style.width = that.containerWidth + "px";
            cont.style.height = that.containerHeight + "px";
        }

        function styleImg(arr) {
            for (let i = 0; i < arr.length; i++) {
                arr[i].style.position = "absolute";
                arr[i].style.width = that.imgWidthRatio + "%"
                arr[i].style.height = that.imgHeightRatio + "%"
                arr[i].style.left = that.firstPosition + (that.imgPlusMargins * (i + 1)) + that.containerPieceWidth + "px";
                arr[i].style.transition = "all 1s ease";
            }
        }

        function createArrows(that) {
            //import fontawesome
            
            const link = document.createElement("link");
            const head = document.querySelector("head");
            head.appendChild(link);
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css")
            const left = document.createElement("i")
            left.classList.add("fas");
            left.classList.add("fa-chevron-left");
            left.style.position = "absolute";
            left.style.left = "0";
            left.style.fontSize = "50px";
            left.style.color = "white";
            left.style.textShadow = "3px 3px 10px #FFFFFF";
            left.style.cursor = "pointer";
            left.id = "left";
            that.container.appendChild(left);
            const right = document.createElement("i")
            right.classList.add("fas");
            right.classList.add("fa-chevron-right");
            right.style.position = "absolute";
            right.style.right = "0";
            right.style.fontSize = "50px";
            right.style.color = "white";
            right.style.textShadow = "3px 3px 10px #FFFFFF";
            right.style.cursor = "pointer";
            right.id = "right";
            that.container.appendChild(right)
            left.onmouseover = (e) => {
                e.target.style.color = "#CDCDCD";
            }
            right.onmouseover = (e) => {
                e.target.style.color = "#CDCDCD";
            }
            left.onmouseout = (e) => {
                e.target.style.color = "white";
            }
            right.onmouseout = (e) => {
                e.target.style.color = "white";
            }

            left.onclick = () => {
                //enables sliding only after the previous slide has ended
                if (that.isPressed) return;
                that.isPressed = true;
                setTimeout(() => {
                        that.isPressed = false;
                    }, 1100)
                    //-------------------------------------------------
                that.view--;
                    //Slide the images to the right
                for (let img of that.imgArr) {
                    let left = getComputedStyle(img)["left"];
                    let actualValue = that.getAbsoluteVal(left) + that.imgPlusMargins + "px";
                    img.style.left = actualValue;
                }
                if (that.view === 2) {
                    that.imgArr[that.imgArr.length - 1].style.display = "none";
                    that.imgArr[that.imgArr.length - 1].style.left = -(that.imgPlusMargins * 2 - that.containerPieceWidth) + "px"; //First position + imgPlusMargins width + containerPiece width
                    that.view++;
                    setTimeout(() => {
                        that.imgArr = that.shiftRight(that.imgArr, 1)
                        that.imgArr[0].style.display = "block";
                    }, 1000)

                }
            }
            right.onclick = () => {
                if (that.isPressed) return;
                that.isPressed = true;
                that.view++;
                setTimeout(() => {
                    that.isPressed = false;
                }, 1100)
                for (let img of that.imgArr) {
                    let left = getComputedStyle(img)["left"];
                    let actualValue = that.getAbsoluteVal(left) - that.imgPlusMargins + "px";
                    img.style.left = actualValue;
                }
                if (that.view === 5) {
                    that.imgArr[0].style.display = "none";
                    that.imgArr[0].style.left = that.containerWidth + that.imgPlusMargins - (that.containerPieceWidth - that.imgMargin) + "px";
                    that.view--;
                    setTimeout(() => {
                        that.imgArr = that.shiftLeft(that.imgArr, 1)
                        that.imgArr[that.imgArr.length - 1].style.display = "block";
                    }, 1000)

                }
            }
        }
    }
    shiftRight(arr, steps) {
        let newArr = [];
        let length = arr.length;
        for (let i = 0; i < arr.length; i++) {
            if (i + steps >= length) {
                newArr[(i + steps) % length] = arr[i]
                continue;
            }
            newArr[i + steps] = arr[i]
        }
        return newArr
    }

    shiftLeft(arr, steps) {
        let newArr = [];
        let length = arr.length;
        for (let i = 0; i < arr.length; i++) {
            if (i - steps < 0) {
                newArr[length + (i - steps) % length] = arr[i]
                continue;
            }
            newArr[i - steps] = arr[i]
        }
        return newArr
    }
    getAbsoluteVal(val) {
        return parseInt(val.match(/-*\d+/)[0])
    }
}