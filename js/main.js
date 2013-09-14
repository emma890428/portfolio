// Draw the flowers in myCanvas1
var ctx1=$("#myCanvas1")[0].getContext("2d");

// Back End Development
ctx1.shadowOffsetX = 2;  
ctx1.shadowOffsetY = 2;  
ctx1.shadowBlur = 5;  
ctx1.shadowColor = "#fdd651";

ctx1.beginPath();
ctx1.moveTo(60.9, 355.6);
ctx1.bezierCurveTo(49.30769231, 387.0769231, 87.30769231, 413.2307692, 113.30769231, 389.8461538);
ctx1.bezierCurveTo(136.7692308, 412.2307692, 177.5384615, 389.6153846, 164.7692308, 354);
ctx1.bezierCurveTo(192.6923077, 340.69230769, 186.2307692, 290.92307692, 145.2307692, 293.92307692);
ctx1.bezierCurveTo(141.9230769, 258.384615385, 88.30769231, 252.230769231, 81.46153846, 294.07692308);
ctx1.bezierCurveTo(43.92307692, 290.38461538, 31.923076923, 337.07692308, 61.84615385, 353.9230769);
ctx1.closePath();
ctx1.lineWidth=20;
ctx1.lineJoin = "round";
ctx1.strokeStyle="#836f5d";
ctx1.stroke();

ctx1.beginPath();
ctx1.moveTo(160,430);
ctx1.quadraticCurveTo(210,470,220,560);
ctx1.lineWidth=10;
ctx1.stroke();

var imageObj = new Image();

imageObj.onload = function() {
    ctx1.drawImage(imageObj, 84, 310);
};
imageObj.src = 'img/code.png';

ctx1.shadowOffsetX = 0;  
ctx1.shadowOffsetY = 0;  
ctx1.shadowBlur = 0;  

ctx1.beginPath();
ctx1.moveTo(75.9, 394.6);
ctx1.quadraticCurveTo(95.30769231, 405.2307692, 113.30769231, 389.8461538);
ctx1.bezierCurveTo(136.7692308, 412.2307692, 177.5384615, 389.6153846, 164.7692308, 354);
ctx1.bezierCurveTo(192.6923077, 340.69230769, 186.2307692, 290.92307692, 145.2307692, 293.92307692);
ctx1.quadraticCurveTo(139.9230769, 266.384615385, 111.46153846, 264.07692308);
ctx1.lineWidth=10;
ctx1.lineJoin = "round";
ctx1.strokeStyle="#fdd651";
ctx1.stroke();

ctx1.font = "bold 20px Arial";
ctx1.fillStyle = "#836f5d";
ctx1.fillText("Back End", 10, 440);  
ctx1.fillText("Development", 10, 465);
ctx1.font = "15px Arial";
ctx1.fillStyle = "#669478";
ctx1.fillText("I develop RESTful web", 10, 495);
ctx1.fillText("service using PHP and", 10, 515);
ctx1.fillText("Python. Also, I design and", 10, 535);
ctx1.fillText("develop SQL database.", 10, 555);

// Front End Development
ctx1.shadowOffsetX = 2;  
ctx1.shadowOffsetY = 2;  
ctx1.shadowBlur = 5;  
ctx1.shadowColor = "#f0609a";

ctx1.beginPath();
ctx1.moveTo(180.9, 105.6);
ctx1.bezierCurveTo(169.30769231, 137.0769231, 207.30769231, 163.2307692, 233.30769231, 139.8461538);
ctx1.bezierCurveTo(256.7692308, 162.2307692, 297.5384615, 139.6153846, 284.7692308, 104);
ctx1.bezierCurveTo(312.6923077, 90.69230769, 306.2307692, 40.92307692, 265.2307692, 43.92307692);
ctx1.bezierCurveTo(261.9230769, 8.384615385, 208.30769231, 2.230769231, 201.46153846, 44.07692308);
ctx1.bezierCurveTo(163.92307692, 40.38461538, 151.923076923, 87.07692308, 181.84615385, 103.9230769);
ctx1.closePath();
ctx1.lineWidth=20;
ctx1.lineJoin = "round";
ctx1.strokeStyle="#836f5d";
ctx1.stroke();

ctx1.beginPath();
ctx1.moveTo(240,180);
ctx1.quadraticCurveTo(290,290,260,520);
ctx1.lineWidth=10;
ctx1.stroke();

var imageObj2 = new Image();

    imageObj2.onload = function() {
        ctx1.drawImage(imageObj2, 202, 58);
    };
    imageObj2.src = 'img/browser-windows.png';

ctx1.shadowOffsetX = 0;  
ctx1.shadowOffsetY = 0;  
ctx1.shadowBlur = 0;  

ctx1.beginPath();
ctx1.moveTo(202, 45);
// ctx1.quadraticCurveTo(160.923076923, 89.07692308, 181.84615385, 103.9230769);
ctx1.bezierCurveTo(163.92307692, 40.38461538, 151.923076923, 87.07692308, 181.84615385, 103.9230769);
ctx1.bezierCurveTo(169.30769231, 137.0769231, 207.30769231, 163.2307692, 233.30769231, 139.8461538);
ctx1.bezierCurveTo(256.7692308, 162.2307692, 297.5384615, 139.6153846, 284.7692308, 104);
ctx1.bezierCurveTo(312.6923077, 90.69230769, 306.2307692, 40.92307692, 265.2307692, 43.92307692);
ctx1.quadraticCurveTo(258.9230769, 14.384615385, 232.46153846, 14.07692308);

ctx1.lineWidth=10;
ctx1.lineJoin = "round";
ctx1.strokeStyle="#f0609a";
ctx1.stroke();

ctx1.font = "bold 20px Arial";
ctx1.fillStyle = "#836f5d";
ctx1.fillText("Front End", 10, 40);  
ctx1.fillText("Development", 10, 65);
ctx1.font = "15px Arial";
ctx1.fillStyle = "#669478";
ctx1.fillText("I have abundant", 10, 95);
ctx1.fillText("experience of coding", 10, 115);
ctx1.fillText("with HTML5, CSS3", 10, 135);
ctx1.fillText("and JavaScript. Also,", 10, 155);
ctx1.fillText("I'm proficient in Bootstrap", 10, 175);
ctx1.fillText("framework and jQuery library", 10, 195);
ctx1.fillText("and experienced in AngularJS,", 10, 215);
ctx1.fillText("Backbone, D3JS libraries.", 10, 235);

// Draw the flowers in myCanvas2
var ctx2=$("#myCanvas2")[0].getContext("2d");

// Graphic Design
ctx2.shadowOffsetX = 2;  
ctx2.shadowOffsetY = 2;  
ctx2.shadowBlur = 5;  
ctx2.shadowColor = "#75d0f6";

ctx2.beginPath();
ctx2.moveTo(70.9, 275.6);
ctx2.bezierCurveTo(59.30769231, 307.0769231, 97.30769231, 333.2307692, 123.30769231, 309.8461538);
ctx2.bezierCurveTo(146.7692308, 332.2307692, 187.5384615, 309.6153846, 174.7692308, 274);
ctx2.bezierCurveTo(202.6923077, 260.69230769, 196.2307692, 210.92307692, 155.2307692, 213.92307692);
ctx2.bezierCurveTo(151.9230769, 178.384615385, 98.30769231, 172.230769231, 91.46153846, 214.07692308);
ctx2.bezierCurveTo(53.92307692, 210.38461538, 41.923076923, 257.07692308, 71.84615385, 273.9230769);
ctx2.closePath();
ctx2.lineWidth=20;
ctx2.lineJoin = "round";
ctx2.strokeStyle="#836f5d";
ctx2.stroke();

ctx2.beginPath();
ctx2.moveTo(90,350);
ctx2.quadraticCurveTo(60,430,50,550);
ctx2.lineWidth=10;
ctx2.stroke();

var imageObj3 = new Image();

    imageObj3.onload = function() {
        ctx2.drawImage(imageObj3, 94, 230);
    };
    imageObj3.src = 'img/compose.png';

ctx2.shadowOffsetX = 0;  
ctx2.shadowOffsetY = 0;  
ctx2.shadowBlur = 0;  

ctx2.beginPath();
ctx2.moveTo(72, 275);
// ctx2.quadraticCurveTo(160.923076923, 89.07692308, 181.84615385, 103.9230769);
// ctx2.bezierCurveTo(163.92307692, 40.38461538, 151.923076923, 87.07692308, 181.84615385, 103.9230769);
ctx2.bezierCurveTo(59.30769231, 307.0769231, 97.30769231, 333.2307692, 123.30769231, 309.8461538);
ctx2.bezierCurveTo(146.7692308, 332.2307692, 187.5384615, 309.6153846, 174.7692308, 274);
ctx2.bezierCurveTo(202.6923077, 260.69230769, 196.2307692, 210.92307692, 155.2307692, 213.92307692);
ctx2.quadraticCurveTo(148.9230769, 184.384615385, 122.46153846, 184.07692308);

ctx2.lineWidth=10;
ctx2.lineJoin = "round";
ctx2.strokeStyle="#75d0f6";
ctx2.stroke();

ctx2.font = "bold 20px Arial";
ctx2.fillStyle = "#836f5d";
ctx2.fillText("Graphic Design", 80, 25);  
ctx2.font = "15px Arial";
ctx2.fillStyle = "#669478";
ctx2.fillText("I love graphic design which makes things", 80, 55);
ctx2.fillText("very beautiful. And I'm excellent in", 80, 75);
ctx2.fillText("design tools such as", 80, 95);
ctx2.fillText("Adobe Photoshop,", 80, 115);
ctx2.fillText("Illustrator, and", 80, 135);
ctx2.fillText("InDesign.", 80, 155);

// Data Analysis
ctx2.shadowOffsetX = 2;  
ctx2.shadowOffsetY = 2;  
ctx2.shadowBlur = 5;  
ctx2.shadowColor = "#89d17b";

ctx2.beginPath();
ctx2.moveTo(250.9, 215.6);
ctx2.bezierCurveTo(239.30769231, 247.0769231, 277.30769231, 273.2307692, 303.30769231, 249.8461538);
ctx2.bezierCurveTo(326.7692308, 272.2307692, 367.5384615, 249.6153846, 354.7692308, 214);
ctx2.bezierCurveTo(382.6923077, 200.69230769, 376.2307692, 150.92307692, 335.2307692, 153.92307692);
ctx2.bezierCurveTo(331.9230769, 118.384615385, 278.30769231, 112.230769231, 271.46153846, 154.07692308);
ctx2.bezierCurveTo(233.92307692, 150.38461538, 221.923076923, 197.07692308, 251.84615385, 213.9230769);
ctx2.closePath();
ctx2.lineWidth=20;
ctx2.lineJoin = "round";
ctx2.strokeStyle="#836f5d";
ctx2.stroke();

ctx2.beginPath();
ctx2.moveTo(260,285);
ctx2.quadraticCurveTo(170,350,130,540);
ctx2.lineWidth=10;
ctx2.stroke();

var imageObj4 = new Image();

    imageObj4.onload = function() {
        ctx2.drawImage(imageObj4, 275, 168);
    };
    imageObj4.src = 'img/database.png';

ctx2.shadowOffsetX = 0;  
ctx2.shadowOffsetY = 0;  
ctx2.shadowBlur = 0;  

ctx2.beginPath();
ctx2.moveTo(238, 175);
// ctx2.quadraticCurveTo(160.923076923, 89.07692308, 181.84615385, 103.9230769);
ctx2.quadraticCurveTo(229.923076923, 197.07692308, 251.84615385, 213.9230769);
ctx2.bezierCurveTo(239.30769231, 247.0769231, 277.30769231, 273.2307692, 303.30769231, 249.8461538);
ctx2.bezierCurveTo(326.7692308, 272.2307692, 367.5384615, 249.6153846, 354.7692308, 214);
ctx2.bezierCurveTo(382.6923077, 200.69230769, 376.2307692, 150.92307692, 335.2307692, 153.92307692);
ctx2.quadraticCurveTo(328.9230769, 124.384615385, 302.46153846, 124.07692308);

ctx2.lineWidth=10;
ctx2.lineJoin = "round";
ctx2.strokeStyle="#89d17b";
ctx2.stroke();

ctx2.font = "bold 20px Arial";
ctx2.fillStyle = "#836f5d";
ctx2.fillText("Data Analysis", 250, 345);  
ctx2.font = "15px Arial";
ctx2.fillStyle = "#669478";
ctx2.fillText("I have been working", 250, 375);
ctx2.fillText("as a social network data", 222, 395);
ctx2.fillText("analyst since 2011. I use", 219, 415);
ctx2.fillText("Python to pre-process data,", 202, 435);
ctx2.fillText("use SPSS to do statistical", 212, 455);
ctx2.fillText("analysis, use UCINet and", 215, 475);
ctx2.fillText("RSiena to calculate social", 214, 495);
ctx2.fillText("network variables, and use D3,", 180, 515);
ctx2.fillText("Processing, and Gephi to", 215, 535);
ctx2.fillText("visualize and interact with data.", 180, 555);
