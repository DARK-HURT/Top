body {
    margin: 0;
    overflow: hidden;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
}

.pixelated-screen {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    animation: pixelate 3s steps(20) forwards; /* Duración del efecto de pixelado */
}

.countdown-container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Courier New', Courier, monospace;
    font-size: 100px;
    color: white;
    background: black;
    border: 5px solid white;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    text-align: center;
    position: relative;
}

@keyframes pixelate {
    0% { filter: none; }
    100% { filter: pixelate(10px); } /* Cambia el valor de pixelado según lo que desees */
}
