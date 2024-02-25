class  ButtonApply{
    constructor(){
        const eBody = document.querySelector('body');
        this.eButton = document.createElement('button');
        this.setAttributeButton();
        eBody.append(this.eButton);
        
    }
    setAttributeButton(){
        this.eButton.classList.add('btn');
        this.eButton.textContent = 'Applay'
    }
}
new ButtonApply();

class ApplayPanel{
    constructor(){
        const eBody = document.querySelector('body');
        this.eApplayPanel = document.createElement('button');
        this.setAttributeApplayPanel();
        eBody.append(this.eApplayPanel); 
    }
    setAttributeApplayPanel(){
        this.eApplayPanel.classList.add('wrapper-apply-panel');
        this.eApplayPanel.textContent = 'Applay'
    } 
}
new ApplayPanel();