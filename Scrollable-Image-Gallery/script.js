const gallery = document.querySelector(".gallery");

gallery.addEventListener("wheel", (e) => {

    if (e.deltaY !== 0) {

        e.preventDefault();

        gallery.scrollLeft += e.deltaY;

    }

}, { passive: false });