/**
 * Display a `confirm()` modal dialog when button is pressed.
 *
 * @version 1.0.0
 */
export default class ConfirmButton extends HTMLButtonElement {
	#message: string | undefined;

	constructor() {
		super();
	}

	connectedCallback(): void {
		const message = this.dataset.message;
		if (message === undefined) {
			throw new Error('Attribute: `data-message` is not set.');
		}
		this.#message = message;

		this.addEventListener('click', this._clickEvent);
	}

	disconnectedCallback(): void {
		this.removeEventListener('click', this._clickEvent);
	}

	/**
	 * ボタン押下時の処理
	 *
	 * @param {MouseEvent} ev - MouseEvent
	 */
	private _clickEvent(ev: MouseEvent) {
		if (!confirm(this.#message)) {
			ev.preventDefault();
		}
	}
}
