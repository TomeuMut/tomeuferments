export default function () {

    document.addEventListener('click',function(event) {
        const targetHasClass = event.target && event.target.hasAttribute('data-toggle-class');
        const parentHasClass = event.target && event.target.closest(`[data-toggle-class]`);
        let target= ''
        if (targetHasClass || parentHasClass) {
            if(parentHasClass) {
                target = event.target.closest(`[data-toggle-class]`);
            } else {
                target = event.target;
            }
            event.stopPropagation();
            event.preventDefault();
            const classToToggle = target.getAttribute('data-toggle-class');
            const container = target.getAttribute('data-toggle-class-container');
            const baseClassItem = target.getAttribute('data-toggle-class-item');
            const removeClassItem = target.getAttribute('data-remove-all-toggle');
            const baseQuery = '[data-toggle-class-item]:not([data-toggle-class-not-this])'
            const itemsQuery = container ? container + ' ' + baseQuery : baseQuery;
            const itemsToToggle = document.querySelectorAll(itemsQuery);
            document.querySelectorAll('[data-click-outside-target]').forEach(function (element) {
                const baseClasselement = element.getAttribute('data-toggle-class-item');
                if (baseClasselement !== baseClassItem) {
                    element.classList.remove('is-active');
                }
            })
            if(removeClassItem) {
                document.querySelectorAll('[data-toggle-class-item]').forEach(function (element) {
                        element.classList.remove(removeClassItem);
                })
            }
            itemsToToggle.forEach(item => {
                const classItem = item.getAttribute('data-toggle-class-item');
                if (classItem === baseClassItem) {
                    item.classList.toggle(classToToggle)
                }
            })
        }
    })

}
