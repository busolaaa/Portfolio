import { qs } from "../utils/dom.js";
import { getInquiryData, validateInquiry } from "../utils/validation.js";

export function initContactForm() {
    const contactForm = qs(".contact-form");

    if (!contactForm) {
        return;
    }

    function displayFieldError(fieldName, message) {
        const field = qs(`.form-${fieldName}`);

        if (!field) {
            return;
        }

        field.textContent = message;
    }

    function displayFormErrors(errors) {
        Object.keys(errors).forEach(function (fieldName) {
            displayFieldError(fieldName, errors[fieldName]);
        });
    }

    function focusFirstInvalidField(errors) {
        const firstErrorField = Object.keys(errors).find(function (fieldName) {
            return errors[fieldName] !== "";
        });

        if (firstErrorField) {
            qs(`[name="${firstErrorField}"]`)?.focus();
        }
    }

    let isSubmitting = false;

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (isSubmitting) {
            return;
        }

        const formData = getInquiryData(contactForm);
        const validation = validateInquiry(formData);

        displayFormErrors(validation.errors);

        const formMessage = qs(".form-result");

        if (!validation.isValid) {
            formMessage.textContent = "";
            focusFirstInvalidField(validation.errors);
            return;
        }

        isSubmitting = true;
        const submitButton = contactForm.querySelector("button[type='submit']");

        if (submitButton) {
            submitButton.disabled = true;
        }

        formMessage.textContent = "Thank you. Your message is ready to be sent.";
        contactForm.reset();
    });
}
