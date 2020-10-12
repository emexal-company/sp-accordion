import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { Accordion } from './accordion.component';

import '@spectrum/sp-icon';
import '@spectrum/sp-accordion';
import '@spectrum/sp-accordion'

export default function template(this: Accordion) {

    return html`
        <div class="spectrum-Accordion" role="region">
            <slot></slot>
        </div>
    `;
}
