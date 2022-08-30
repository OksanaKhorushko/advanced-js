"use strict";

class Validator {
    constructor(form) {
        this.patterns = {
            name: /^[a-zа-яё]+$/i,
            phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
            email: /^[\w.-]+@\w+\.[a-z]{2,4}$/i
        };

        this.errors = {
            name: 'Имя должно содержать только буквы',
            phone: 'Введите номер по шаблону +7(000)000-0000',
            email: 'Введите E-mail по шаблону mymail@mail.ru или my.mail@mail.ru'
        };

        this.errorClass = 'error-msg';
        this.form = document.getElementById(form);
        this.valid = false;
        this._validateForm();
    }

    validate(regexp, value) {
        regexp.test(value);
    }

    _validateForm() {
        let errors = [...this.form.querySelectorAll(`.${this.errorClass}`)];
        for (let error of errors) {
            error.remove();
        }

        let formFields = [...this.form.getElementsByTagName('input')];
        for (let field of formFields) {
            this._validate(field);
        }

        if (![...this.form.querySelectorAll('.invalid')].length) {
            this.valid = true;
        }
    }

    _validate(field) {
        if (!this.patterns[field.name].test(field.value)) {
            field.classList.add('invalid');
            this._addErrorsMsg(field);
            this._watchField(field);
        }
    }

    _addErrorsMsg(field) {
        let error = `<div class="${this.errorClass}">${this.errors[field.name]}</div>`;
        field.parentNode.insertAdjacentHTML('beforeend', error);
    }

    _watchField(field) {
        field.addEventListener('input', () => {
            let error = field.parentNode.querySelector(`.${this.errorClass}`);
            if (this.patterns[field.name].test(field.value)) {
                field.classList.remove('invalid');
                field.classList.add('valid');
                if (error) {
                    error.remove();
                }
            } else {
                field.classList.remove('valid');
                field.classList.add('invalid');
                if (!error) {
                    this._addErrorsMsg(field);
                }
            }
        })
    }
}
