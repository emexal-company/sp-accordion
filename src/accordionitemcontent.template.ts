import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { AccordionItemContent } from './accordionitemcontent.component';

import '@spectrum/sp-icon';

export default function template(this: AccordionItemContent) {

    return html`
    <div class="spectrum-accordionitem-itemContent" role="region" id="spectrum-accordionitem-item-0-content" aria-labelledby="spectrum-accordionitem-item-0-header" style="display: ${(this.isopen) ? 'block' : 'none'}">
        <slot></slot>
    </div>
    `;
}

