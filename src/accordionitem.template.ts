import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { AccordionItem } from './accordionitem.component';

import '@spectrum/sp-icon';
import '@spectrum/sp-accordion'

export default function template(this: AccordionItem) {

    var classes = {
        'is-open': this.open,
        'is-disabled': this.disabled
    }

    return html`
        <div class="spectrum-Accordion-item ${classMap(classes)}" role="presentation">
            <h3 class="spectrum-Accordion-itemHeading">
            <button class="spectrum-Accordion-itemHeader" type="button" id="spectrum-accordion-item-0-header" aria-controls="spectrum-accordion-item-0-content" aria-expanded="true" @click="${(!this.disabled)? this._handleButtonClick: this._handleDisabledClick}">${this.header}</button>
            <sp-icon name="ChevronRightSmall" class="spectrum-Accordion-itemIndicator"></sp-icon>
        </h3>
        <slot></slot>
    `;
}
