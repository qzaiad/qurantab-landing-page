const faqLabelClickEvent1 = (element) => {
  element.onkeydown = (event) => { event.key == 'Enter' && element.click(); };
}

const faqLabelClickEvent2 = (element) => {
  element.addEventListener(
    'keydown',
    (event) => {
      console.log(event);
      if(event.key == 'Enter'){
        element.click();
      }
    }
  )
}

const observeSections = (sectionElements) => {
  const options = {threshold: 1.0};
  const callback = (entries) => { // entries = observed elements
    entries.forEach(entry => {
      if(entry.isIntersecting){
        console.log("In view");
        entry.target.classList.add('in-view'); // entry.target is the target element
      }else{
        entry.target.classList.remove('in-view');
      }
    });
  }

  const observer = new IntersectionObserver(callback, options);
  sectionElements.forEach(element => {
    observer.observe(element);
  }
  );
};

export{
  faqLabelClickEvent1,
  faqLabelClickEvent2,
  observeSections,
};