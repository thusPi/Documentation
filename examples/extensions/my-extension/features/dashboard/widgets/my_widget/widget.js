// The Javascript code for a widget should be wrapped
// in a class named Widget (case-sensitive)
class Widget {
    constructor(elem) {
        // Store the widget element as a jQuery object
        this.$elem = $(elem);

        // Change the widget message
        this.setMessage('Widget loaded succesfully!');
    }

    setMessage(message) {
        // Find the message element using jQuery
        const $messageElem = this.$elem.find('.my-custom-widget-message');

        // Change message element content
        $messageElem.text(message);
    }
}