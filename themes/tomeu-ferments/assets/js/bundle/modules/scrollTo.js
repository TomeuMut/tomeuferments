
export default function () {
// Obtener todos los elementos con atributo data-scrollTo
    const scrollItems = Array.from(document.querySelectorAll('[data-scrollTo]'));

// Obtener todos los elementos con atributo data-scrollToItem
    const scrollToItems = Array.from(document.querySelectorAll('[data-scrollToItem]'));

// Función para animar el desplazamiento suave
    function smoothScrollTo(element) {
        window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop - 100,
        });
    }

// Función para aplicar la clase is-active al elemento activo y quitarla del resto
    function setActiveElement(element) {
        scrollItems.forEach(item => {
            if (item === element) {
                item.classList.add('is-active');
            } else {
                item.classList.remove('is-active');
            }
        });
    }

// Función para determinar qué elemento está actualmente visible en la ventana
    function getVisibleItem() {
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY;

        return scrollToItems.find(item => {
            const itemTop = item.offsetTop - 100;
            const itemBottom = itemTop + item.offsetHeight;

            return itemTop <= scrollTop + windowHeight && itemBottom >= scrollTop;
        });
    }

// Asignar eventos de clic a los elementos con atributo data-scrollTo
    scrollItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = item.getAttribute('data-scrollTo');
            const targetElement = document.querySelector(`[data-scrollToItem="${targetId}"]`);

            if (targetElement) {
                smoothScrollTo(targetElement);
                setActiveElement(item);
            }
        });
    });

// Asignar evento de scroll para actualizar el elemento activo en función de la posición actual
    window.addEventListener('scroll', () => {
        const visibleItem = getVisibleItem();
        if (visibleItem) {
            const targetId = visibleItem.getAttribute('data-scrollToItem');
            const targetElement = document.querySelector(`[data-scrollTo="${targetId}"]`);

            setActiveElement(targetElement);
        }
    });
}
