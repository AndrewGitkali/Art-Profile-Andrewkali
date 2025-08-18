// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }),
)

// Gallery Filtering
const filterButtons = document.querySelectorAll(".filter-btn")
const galleryItems = document.querySelectorAll(".gallery-item")

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"))
    // Add active class to clicked button
    button.classList.add("active")

    const filterValue = button.getAttribute("data-filter")

    galleryItems.forEach((item) => {
      if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
        item.classList.remove("hide")
        item.classList.add("show")
      } else {
        item.classList.remove("show")
        item.classList.add("hide")
      }
    })
  })
})

// Lightbox Functionality
const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightbox-img")
const lightboxCaption = document.getElementById("lightbox-caption")
const lightboxClose = document.querySelector(".lightbox-close")

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img")
    const overlay = item.querySelector(".gallery-overlay")

    lightbox.style.display = "block"
    lightboxImg.src = img.src
    lightboxCaption.innerHTML = overlay.innerHTML
  })
})

const lightboxTriggers = document.querySelectorAll(".lightbox-trigger")

lightboxTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const img = trigger.querySelector("img")

    lightbox.style.display = "block"
    lightboxImg.src = img.src
    lightboxCaption.innerHTML = img.alt
  })
})

lightboxClose.addEventListener("click", () => {
  lightbox.style.display = "none"
})

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none"
  }
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add scroll effect to navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)"
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
  }
})
