const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const product = $(".product");

const app = {
    images: [{
            title: "",
            item: "trang",
            image: "1.jpg"
        },
        {
            name: "",
            item: "trang",
            image: "2.jpg"
        },
        {
            name: "",
            item: "couple",
            image: "1.jpg"
        },
        {
            name: "",
            item: "trang",
            image: "3.jpg"
        },
        {
            name: "",
            item: "trang",
            image: "4.jpg"
        },
        {
            name: "",
            item: "trang",
            image: "5.jpg"
        }
    ],
    setConfig: function(key, value) {
        this.config[key] = value;
        // (2/2) Uncomment the line below to use localStorage
        // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
    },
    render: function() {
        const htmls = this.images.map((img, index) => {
            return `
                <div class="itemBox" data-item="${img.item}"><img src="images/${img.item}/${img.image}"></div>
                    `;
        });
        product.innerHTML = htmls.join("");
    },
    start: function() {

        this.render();
    }
};


app.start();