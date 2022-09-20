sbiii=document.getElementById("sbiii");
hide=document.getElementById("hide");
hide.style.visibility = 'hidden';
sbiii.addEventListener('click', () =>
{
 if (hide.style.visibility = 'hidden') {
    hide.style.visibility = 'visible'
  }
}
);

hiid=document.getElementById("hiid");
hiid.addEventListener('click', () =>
    hide.style.visibility = 'hidden'
);





  class InteractiveChatbox {
    constructor(a, b, ) {
        this.args = {
            button: a,
            chatbox: b
        }
    }

    display() {
        const {button, chatbox} = this.args;
        
        button.addEventListener('click', () => this.toggleState(chatbox))
    }

    toggleState(chatbox) {
        this.state = !this.state;
        this.showOrHideChatBox(chatbox, this.args.button);
    }

    showOrHideChatBox(chatbox, button) {
        if(this.state) {
            chatbox.classList.add('chatbox--active')
            
        } 
        else if (!this.state) {
          chatbox.classList.remove('chatbox--active')
             }
    }
    
}




const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
const icons = {
    isClicked: ' ',
    isNotClicked: ' '
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();

  
