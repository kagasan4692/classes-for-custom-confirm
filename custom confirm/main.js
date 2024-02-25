class ButtonWrapper {
    constructor(){
        
        const eBody = document.querySelector('body');
        this.eButtonWrapper = document.createElement('div');
        this.setAttributeeButtonWrapper();
        eBody.append(this.eButtonWrapper); 
    }

    setAttributeeButtonWrapper(){
        this.eButtonWrapper.classList.add('wrapper-button');
    } 
}

class  ButtonApply extends ButtonWrapper{
    constructor(){
        super();
        this.eButton = document.createElement('button');
        this.setAttributeButton();
        this.eButtonWrapper.append(this.eButton);
        
    }

    setAttributeButton(){
        this.eButton.classList.add('btn');
        this.eButton.textContent = 'Apply'
    }
}

class ApplyPanel {
    constructor(){
        
        const eBody = document.querySelector('body');
        this.eApplyPanel = document.createElement('div');
        this.setAttributeApplyPanel();
        eBody.append(this.eApplyPanel); 
    }

    setAttributeApplyPanel(){
        this.eApplyPanel.classList.add('apply-panel');
    } 
}

new ApplyPanel();
new ButtonApply();

// cunstomConfirm (['Apply', 'Cancel']);

// function cunstomConfirm (arrayTextContent) {
//     arrayTextContent.forEach(buttonTextContent => {
//         new ButtonApply(buttonTextContent);
//     })
    
// }