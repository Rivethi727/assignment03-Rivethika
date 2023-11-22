function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    let themeButton = document.getElementById("theme-button");
    if (element.classList.contains("dark-mode")) {
        themeButton.classList.remove("fa-moon");
        themeButton.classList.add("fa-sun");
    } else {
        themeButton.classList.remove("fa-sun");
        themeButton.classList.add("fa-moon");
    }
} 
 


// zoom function
const zoomImg = document.getElementById('zoom-image');

zoomImg.addEventListener('mousemove', (event) => {
    const containerRect = zoomImg.getBoundingClientRect();
    const x = event.clientX - containerRect.left;
    const y = event.clientY - containerRect.top;

    const percentX = (x / containerRect.width) * 100;
    const percentY = (y / containerRect.height) * 100;

    zoomImg.style.transformOrigin = `${percentX}% ${percentY}%`;
    zoomImg.classList.add('zoomed');
});

zoomImg.addEventListener('mouseleave', () => {
    zoomImg.classList.remove('zoomed');
});




let questions = document.querySelectorAll(".faq__question");
questions.forEach((question) => {
  question.addEventListener("click", function () {
    question.classList.toggle("faq__question_active");
    const nextElement = question.nextElementSibling;
    nextElement.classList.toggle("faq__panel_active");
  });
});

function initMap() {
    var options= {
      zoom:20,
      center:{lat:9.657770,lng:80.159210}
    }
    var googlemap = new google.maps.Map(document.getElementById("map"), options);
  }
