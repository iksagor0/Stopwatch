        const min = document.querySelector('.min');
        const sec = document.querySelector('.sec');
        const msec = document.querySelector('.msec');
        const startBtn = document.querySelector('.start');
        const pauseBtn = document.querySelector('.pause');
        const stopBtn = document.querySelector('.stop');

        let msecCounter = 0;
        let secCounter = 0;
        let minCounter = 0;
        let counter;
        let status = true;

        // START FUNC
        const start = () => {
            status = false;
            counter = setInterval(() => {
                msecCounter++
                if (msecCounter < 10) {
                    msecCounter = "0" + msecCounter;
                }

                if (msecCounter === 100) {
                    msecCounter = 0;
                    secCounter++

                    if (secCounter === 60) {
                        secCounter = 0;
                        minCounter++;
                        if (minCounter < 10) {
                            minCounter = "0" + minCounter;
                        }
                        min.innerText = minCounter;
                    }

                    if (secCounter < 10) {
                        secCounter = "0" + secCounter;
                    }
                    sec.innerText = secCounter;

                }

                msec.innerText = msecCounter;
            }, 10);
        }


        // PAUSE FUNC
        const pause = () => {
            clearInterval(counter)
            status= true;
        }
        
        // STOP FUNC
        const stop = () => {
            clearInterval(counter)
            msecCounter = 0;
            secCounter = 0;
            minCounter = 0;
            min.innerText = "00";
            sec.innerText = "00";
            msec.innerText = "00";
            status= true;
        }


        startBtn.addEventListener('click', ()=>{
            if (status) {
                start();
            }
        });
        pauseBtn.addEventListener('click', pause);
        stopBtn.addEventListener('click', stop);