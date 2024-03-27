const testimonials = [  { text: "Found plenty of good books for a great price!", author: "Deborah Johnson" },  { text: "Employees were friendly and helped me find the books I wanted!", author: "Jobadiah Stone" },  { text: "Compared to other book stores, this place is the best!", author: "Krissy Mcphilips" }];
let currentTestimonial = 1;
const testimonialElem = document.getElementById("testimonial");
const authorElem = document.getElementById("author");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
function showTestimonial() {
    testimonialElem.innerText = testimonials[currentTestimonial].text;
    authorElem.innerText = testimonials[currentTestimonial].author;
  }
  function prevTestimonial() {
    currentTestimonial = (currentTestimonial === 0) ? testimonials.length - 1 : currentTestimonial - 1;
    showTestimonial();
  }
  function nextTestimonial() {
    currentTestimonial = (currentTestimonial === testimonials.length - 1) ? 0 : currentTestimonial + 1;
    showTestimonial();
  }
  prevBtn.addEventListener("click", prevTestimonial);
nextBtn.addEventListener("click", nextTestimonial);