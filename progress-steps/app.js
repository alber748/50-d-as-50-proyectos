
let steps = [
  { status: "active" },
  { status: "desactive" },
  { status: "desactive" },
  { status: "desactive" },
];
const activePrevStep = () => {

      let contador = 0;

      let reverseSteps = steps.reverse();
      reverseSteps.forEach((step) => {

            if (contador < 1 && step.status === "active") {
                  step.status = "desactive";
                  contador++;
            }
      });

        steps = reverseSteps.reverse();
};

const activeNextStep = () => {
      let contador = 0;
      
      steps.forEach((step) => {
            if (contador < 1 && step.status === "desactive") {
                  step.status = "active";
                  contador++;
            }
      });
};

/**
 * 
 * @param {HTMLDivElement[]} controlsNumb 
 * @param {HTMLDivElement[]} progressBar 
 */
const activeNextControl = (controlsNumb, progressBar)=>{

      for (let i = 0; i < steps.length; i++) {

            if(steps[i].status === 'active'){
                  controlsNumb[i].classList.add('control-active');
                  let bar = progressBar[i-1]
                  if(bar){
                        progressBar[i-1].classList.add('progress-bar-active')
                  }
            }else if(steps[i].status === 'desactive'){
                  controlsNumb[i].classList.remove('control-active');
                  let bar = progressBar[i-1]
                  if(bar){
                        progressBar[i-1].classList.remove('progress-bar-active')
                  }
            }
      }
}
/**
 * 
 * @param {HTMLButtonElement} btnNext 
 * @param {HTMLButtonElement} btnPrev 
 */
const controlButtons = (btnNext, btnPrev) => {
      let restStep = steps.find(step => step.status === 'desactive');
      let stepsActive = steps.filter(step => step.status === 'active');

      if(!restStep){
            btnNext.classList.remove('btn-active');
            btnNext.setAttribute('disabled', 'true');
      }else {
            btnNext.classList.add('btn-active');
            btnNext.removeAttribute('disabled')
      }
      if(stepsActive.length > 1){
            btnPrev.classList.add('btn-active');
            btnPrev.removeAttribute('disabled');
      }else {
            btnPrev.classList.remove('btn-active');
            btnPrev.setAttribute('disabled', 'true');
      }

}

(() => {
  let progressBar = document.querySelectorAll(".progress-bar");
  let btnPrev = document.querySelector(".left");
  let btnNext = document.querySelector(".right");
  let controlsNumb = document.querySelectorAll(".control-numb");

  btnNext.addEventListener("click", () => {
      activeNextStep();
      activeNextControl(controlsNumb, progressBar);
      controlButtons(btnNext, btnPrev);
  });

  btnPrev.addEventListener("click", () => {
      activePrevStep();
      activeNextControl(controlsNumb, progressBar);
      controlButtons(btnNext, btnPrev);
  });

})();
