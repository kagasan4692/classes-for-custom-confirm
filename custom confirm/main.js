
class  ButtonApply{
    constructor(textContent){

        this.eButtonWrapper = document.createElement('div');
        this.setAttributeeButtonWrapper();
        
        this.eButton = document.createElement('button');
        this.setAttributeButton(textContent);

        this.eButton.addEventListener('click', onConfirm)

        this.eButtonWrapper.append(this.eButton);

    }
s
    setAttributeButton(textContent){
        this.eButton.classList.add('btn');
        this.eButton.textContent = textContent;
    }

    setAttributeeButtonWrapper(){
        this.eButtonWrapper.classList.add('wrapper-button');
    }

    getButtonElement(){
      return this.eButtonWrapper  
    }
}

class ApplyPanel{
    constructor(){
        const eBody = document.querySelector('body');
        this.eApplyPanel = document.createElement('div');
        this.setAttributeApplyPanel();
        eBody.append(this.eApplyPanel); 

        this.eApplyPanel.append(new ButtonApply('Apply').getButtonElement());
 
    }

    setAttributeApplyPanel(){
        this.eApplyPanel.classList.add('apply-panel');
    } 
}

new ApplyPanel();


function onConfirm (e) {
    console.log(e);
    
}
var myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
var removed = myFish.splice(3, 2);
console.log(removed)
console.log(myFish)