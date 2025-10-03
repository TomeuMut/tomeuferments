export default function() {
    // Selecciona todos los contenedores de pestañas
    const tabContainers = document.querySelectorAll(".js-tabContainer");

// Itera sobre cada contenedor de pestañas
    tabContainers.forEach(container => {
        const tabs = container.querySelectorAll(".js-tabMenu a");
        const tabContent = container.querySelectorAll(".js-tabContent");
        const tabImage = container.querySelector(".js-tab-image");
        tabs.forEach(tab => {
            tab.addEventListener('click', function (event) {
                event.preventDefault()
                // not active tabs at the moment
                tabs.forEach(t => {
                    t.classList.remove('is-active');
                })
                tabContent.forEach(element => {
                    if (tab.getAttribute('data-tab') == element.getAttribute('data-tab')) {
                        element.classList.add('is-active')
                        setTimeout(function () {
                            element.style.opacity = 1;
                        }, 100);
                        tab.classList.add('is-active')
                        const activeImage = tab.getAttribute('data-image');
                        tabImage.setAttribute('src', activeImage);
                    } else {
                        element.classList.remove('is-active')
                        setTimeout(function () {
                            element.style.opacity = 0;
                        }, 100);
                    }
                });
            })
        });

        const tabActive = container.querySelector(".js-tabMenu a.is-active");
        tabContent.forEach(element => {
            if (element.getAttribute('data-tab') == tabActive.getAttribute('data-tab')) {
                element.classList.add('is-active')
                setTimeout(function () {
                    element.style.opacity = 1;
                }, 100);
            }
        });
        console.log(tabActive.getAttribute('data-image'))
        const activeImage = tabActive.getAttribute('data-image');
        tabImage.setAttribute('src', activeImage);
    })
}
