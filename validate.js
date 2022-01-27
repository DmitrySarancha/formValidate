const form = document.querySelector('.form');

const validate = (e) => {
    const target = e.target;
    const elements = Array.from(target.elements);

    elements.forEach((el) => {
        el.setCustomValidity('');
        el.parentElement.classList.remove('invalid');
    });

    // email or password set?

    const err =
        form.email.value || form.password.value || form.name.value
            ? ''
            : 'error';

    form.email.setCustomValidity(err);
    form.password.setCustomValidity(err);
    form.name.setCustomValidity(err);

    if (!target.checkValidity()) {
        e.preventDefault();
        e.stopImmediatePropagation();

        elements.forEach((el) => {
            if (!el.checkValidity()) {
                el.parentElement.classList.add('invalid');
            }
        });
    }
};

form.addEventListener('submit', validate);
