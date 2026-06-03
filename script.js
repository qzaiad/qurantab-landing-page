const faqQuestionLabels = document.querySelectorAll('.faq__question');

faqQuestionLabels.forEach(
  (element) => {
    // if boolean false is returned -> tab will stop working. returning undefined is OK
    element.onkeydown = (event) => { event.key == 'Enter' && element.click(); };
    // element.onkeydown = (event) => { event.key == 'Enter' ? element.click() : false };
    // element.addEventListener(
    //   'keydown',
    //   (event) => {
    //     console.log(event);
    //     if(event.key == 'Enter'){
    //       element.click();
    //     }
    //   }
    // )
  } // forEach
)