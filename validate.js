const form = document.querySelector('.form');

const validate = (e) => {
    const target = e.target;
    const elements = Array.from(target.elements);

    elements.forEach((el) => {
        el.setCustomValidity('');
        el.parentElement.classList.remove('invalid');
    });

    // email or password re name set?

    const errEmail = form.email.value ? '' : 'error';
    const errPassword = form.password.value ? '' : 'error';
    const errName = form.name.value ? '' : 'error';

    form.email.setCustomValidity(errEmail);
    form.password.setCustomValidity(errPassword);
    form.name.setCustomValidity(errName);

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
