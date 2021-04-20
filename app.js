all_images = ["2.gif", "5.gif", "1.gif", "4.gif", "6.gif", "3.gif"]
all_images1 = ["2.gif", "3.gif", "1.gif", "5.gif", "4.gif", "6.gif"]




function Refresh(random_image, random_image1) {
    random_image = all_images[Math.floor(Math.random() * all_images.length)];
    random_image1 = all_images1[Math.floor(Math.random() * all_images.length)];
    x = document.getElementById("image1").src = random_image;
    y = document.getElementById("image2").src = random_image1;

    if (x > y) {
        document.getElementById("demo").innerHTML = "Player 1 won"


    } else if (x < y) {
        document.getElementById("demo").innerHTML = "Player 2 won"
    } else {
        document.getElementById("demo").innerHTML = "Draw"
    }


}