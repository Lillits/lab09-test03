/*document.addEventListener('DOMContentLoaded', function () {

    const panels = document.querySelector('div.panel');

    for (let p of panels) {
        p.addEventListener('click', function() {
          console.log("click");
          this.classList.toggle('open-active');
        })

    }

});*/

document.addEventListener('DOMContentLoaded', function () {

    const panels = document.querySelectorAll('.panel');
    for (let p of panels) {
        p.addEventListener("click", function() {
          console.log("test");
          this.classList.toggle('open');
        });
    }


});
