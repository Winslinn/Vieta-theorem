<!DOCTYPE html>
<html lang="uk">
    <head>
        <link rel="stylesheet" type="text/css" href="style.css">
        <title>Калькулятор теореми Вієта</title>
        <meta http-equiv='cache-control' content='no-cache'> 
        <meta http-equiv='expires' content='0'> 
        <meta http-equiv='pragma' content='no-cache'>
        <meta name="description" content="Калькулятор теореми Вієта">
    </head>
    <body>
        <div id="calculator">
            <div id="text-boxes">
                <h1>Калькулятор теореми Вієта</h1>
                <input type="text" id="a" value=1>
                <span>x<sub>1</sub>+</span>
                <input type="text" id="b">
                <span>x<sub>2</sub>+</span>
                <input type="text" id="c">
                <span>= 0</span>
            </div>
            <div id="result">
                <h2>Результати розрахунків:</h2>
                <span id="discriminator">Дискримінант: 0</span>
                <br>
                <span>x<sub>1</sub>:</span>
                <input type="text" id="x1" readonly>
                <span>x<sub>2</sub>:</span>
                <input type="text" id="x2" readonly>
            </div>
        </div>
        <script src="script.js"></script>
    </body>
</html>
