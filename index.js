var image_container_storage = [{
    image: "./images/apple_image.jpg",
    title: "Apple",
    title_explain: `An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus
    sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including
    Norse, Greek, and European Christian tradition.Apples grown from seed tend to be very different from those of the parents, and the resultant fruit frequently lack desired characteristics. Generally then, apple cultivars are propagated
    by clonal grafting onto rootstocks. Apple trees grown without rootstocks tend to be large and much slower to fruit after planting. Rootstocks are used to control speed of growth and the size of the resulting tree allowing for easier
    harvesting. There are more than 7,500 known cultivars of apples. Different cultivars are bred for various tastes and use, including cooking, eating raw and cider production. Trees and fruit are prone to a number of fungal, bacterial
    and pest problems, which can be controlled by a number of organic and non-organic means. In 2010, the fruit's genome was sequenced as part of research on disease control and selective breeding in apple production.Worldwide production
    of apples in 2018 was 86 million tonnes, with China accounting for nearly half of the total.`
}, {
    image: "./images/mango_image.jpg",
    title: "Mango",
    title_explain: `A mango is an edible stone fruit produced by the tropical tree Mangifera indica which is believed to have originated from the region between northwestern Myanmar, Bangladesh,and northeastern India.M.indica has been cultivated in South and Southeast Asia since ancient times resulting in two distinct types of modern mango cultivars: the "Indian type"and the "Southeast Asian type"Other species in the genus Mangifera also produce edible fruits that are also called "mangoes",the majority of which are found in the Malesian ecoregion.Worldwide,there are several hundred cultivars of mango.Depending on the cultivar, mango fruit varies in size,shape,sweetness,skin color,and flesh color which may be pale yellow,gold,green or onratechange.The mango is the national fruit of India,Pakistan and the Philippines,while the mango tree is the national tree of Bangladesh.There are many hundreds of named mango cultivars. In mango orchards, several cultivars are often grown in order to improve pollination. Many desired cultivars are monoembryonic and must be propagated by grafting or they do not breed true.A common monoembryonic cultivar is 'Alphonso', an important export product, considered as "the king of mangoes".Cultivars that excel in one climate may fail elsewhere. For example, Indian cultivars such as 'Julie', a prolific cultivar in Jamaica, require annual fungicide treatments to escape the lethal fungal disease anthracnose in Florida. Asian mangoes are resistant to anthracnose.`
}, {
    image: "./images/grapes_image.jpg",
    title: "Grapes",
    title_explain: `A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. Grapes can be eaten fresh as table grapes,used for making wine,jam,grape juice,jelly,grape seed extract,vinegar,and grape seed oil, or dried as raisins,currants and sultanas.Grapes are a non - climacteric type of fruit,generally occurring in clusters.Seedless cultivars now make up the overwhelming majority of table grape plantings. Because grapevines are vegetatively propagated by cuttings, the lack of seeds does not present a problem for reproduction. It is an issue for breeders, who must either use a seeded variety as the female parent or rescue embryos early in development using tissue culture techniques.There are several sources of the seedlessness trait, and essentially all commercial cultivators get it from one of three sources: Thompson Seedless, Russian Seedless, and Black Monukka, all being cultivars of Vitis vinifera. There are currently more than a dozen varieties of seedless grapes. Several, such as Einset Seedless, Benjamin Gunnels's Prime seedless grapes, Reliance, and Venus, have been specifically cultivated for hardiness and quality in the relatively cold climates of northeastern United States and southern Ontario.An offset to the improved eating quality of seedlessness is the loss of potential health benefits provided by the enriched phytochemical content of grape seeds .`

}]

var change_image = document.getElementById("image_slider");
var change_title = document.getElementById("image_content_heading");
var change_title_explain = document.getElementById("image_content_slider");


var currentItem = 0


function Previous() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = image_container_storage.length - 1;
    }
    change_image.src = image_container_storage[currentItem].image;
    change_title.innerHTML = image_container_storage[currentItem].title;
    change_title_explain.innerHTML = image_container_storage[currentItem].title_explain;

}

function Next() {
    currentItem++;
    if (currentItem >= image_container_storage.length) {
        currentItem = 0;
    }
    change_image.src = image_container_storage[currentItem].image;
    change_title.innerHTML = image_container_storage[currentItem].title;
    change_title_explain.innerHTML = image_container_storage[currentItem].title_explain;
}