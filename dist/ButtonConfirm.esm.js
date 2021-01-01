var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _message;
/**
 * Display a `confirm()` modal dialog when button is pressed.
 *
 * @version 1.0.1
 */
export default class ButtonConfirm extends HTMLButtonElement {
    constructor() {
        super();
        _message.set(this, void 0);
    }
    connectedCallback() {
        const message = this.dataset.message;
        if (message === undefined) {
            throw new Error('Attribute: `data-message` is not set.');
        }
        __classPrivateFieldSet(this, _message, message);
        this.addEventListener('click', this._clickEvent);
    }
    disconnectedCallback() {
        this.removeEventListener('click', this._clickEvent);
    }
    /**
     * ボタン押下時の処理
     *
     * @param {MouseEvent} ev - MouseEvent
     */
    _clickEvent(ev) {
        if (!confirm(__classPrivateFieldGet(this, _message))) {
            ev.preventDefault();
        }
    }
}
_message = new WeakMap();
