export function getInquiryData(form) {
    const data = new FormData(form);

    return {
        name: data.get("name")?.trim() ?? "",
        email: data.get("email")?.trim().toLowerCase() ?? "",
        message: data.get("message")?.trim() ?? ""
    };
}

export function validateName(name) {
    return name.trim() === "" ? "Please enter your name." : null;
}

export function validateEmail(email) {
    if (email.trim() === "") {
        return "Please enter a valid email.";
    }

    if (!email.includes("@")) {
        return "Email must contain @";
    }

    return null;
}

export function validateMessage(message) {
    return message.trim().length < 10
        ? "Your message should be at least 10 characters."
        : null;
}

export function validateInquiry(formData) {
    const errors = {
        name: validateName(formData.name),
        email: validateEmail(formData.email),
        message: validateMessage(formData.message)
    };

    const hasErrors = Object.values(errors).some(Boolean);

    return {
        isValid: !hasErrors,
        errors
    };
}
