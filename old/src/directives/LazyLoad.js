export default {
  inserted: (el) => {
    function loadImage() {
      const imageElement = Array.from(el.children).find(
        (el) => el.nodeName === "IMG"
      );
      if (imageElement) {
        imageElement.addEventListener("error", () => console.log("error"));
      }
      imageElement.src = imageElement.dataset.src;
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: 0,
      };
      const observer = new IntersectionObserver((entries, observe) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadImage();
            observe.unobserve(el);
          }
        });
      }, options);

      observer.observe(el);
    }

    if (!window["IntersectionObserver"]) {
      loadImage();
    } else {
      // createObserver()
      setTimeout(() => {
        createObserver();
        console.log("54454321312112");
      }, 3000);
    }
  },
};
