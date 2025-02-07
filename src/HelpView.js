import View from './View.js';

class HelpView extends View {
    constructor(element) {
        super(element);
        this.helpForm = this.element.querySelector('form');
        this.helpForm.addEventListener('submit', (event) => this.handleSubmit(event));
    }

    handleSubmit(event) {
        event.preventDefault();

        const subject = this.helpForm.querySelector('input[name=subject]').value;
        const body = this.helpForm.querySelector('textarea[name=body]').value;

        if (subject === "" || body === "") {
            alert("Tous les champs doivent être remplis");
            return false;
        } else {
            const encodeSubject = encodeURIComponent(subject);
            const encodeBody = encodeURIComponent(body);
            
            window.location.href = `mailto:help@jsteam.fr?subject=${encodeSubject}&body=${encodeBody}`;
            
            alert(`Merci pour votre message. Nous vous remercions de votre contribution.`);
            this.helpForm.reset();
            return true;
        }
    }
}

export default HelpView;
