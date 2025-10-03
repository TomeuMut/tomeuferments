export default function () {

    document.addEventListener("click", (e) => {
        if (e.target.closest('.c-accordion__header')) {
            const header = e.target.closest('.c-accordion__header');
            const activeAccordionHeader = document.querySelector(".c-accordion__header.is-active");
            if (activeAccordionHeader && activeAccordionHeader !== header) {
                activeAccordionHeader.classList.toggle("is-active");
                activeAccordionHeader.nextElementSibling.style.maxHeight = null;
            }

            header.classList.toggle("is-active");
            const accordionContent = header.nextElementSibling;
            if (accordionContent.style.maxHeight) {
                accordionContent.style.maxHeight = null;
            } else {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            }
        }
    });
}
