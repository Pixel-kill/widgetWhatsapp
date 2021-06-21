popupWhatsApp = () => {
  
    let btnClosePopup = document.getElementById('wa-widget-close-button');

    let btnOpenPopup = document.getElementById("wa-widget-open-button");

    let popup = document.getElementById("whatsapp_chat_widget_block");
    
  
    btnClosePopup.addEventListener("click",  () => {
        popup.style.display= 'none';
    })
    
    btnOpenPopup.addEventListener("click",  () => {
        popup.style.display = 'block';
        popup.style.animation = "fadeIn .6s 0.0s both";
    })
    
  }
  
  popupWhatsApp();