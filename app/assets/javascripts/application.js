//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {

  //Exclusive checkboxes to update details
  var cbs = document.querySelectorAll(".option")
  var none = document.querySelector(".none")
  
  cbs.forEach(cb => {
     cb.addEventListener("change", () => {
        if(cb.checked)
           none.checked = false
     })
  })
  
  none.addEventListener("change", () => {
    if(none.checked) {
      cbs.forEach(cb => cb.checked = false);
    }
  })
  
})
