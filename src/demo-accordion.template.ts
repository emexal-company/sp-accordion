import { html } from 'lit-element';
import { DemoAccordion } from './demo-accordion.component';

import '@spectrum/sp-accordion';
import '@spectrum/sp-container';
import '@spectrum/sp-accordion';

export default function template(this: DemoAccordion) {
  return html`
  <sp-container>
      <sp-rule medium label="accordion - Standard"></sp-rule>
      <sp-demo width="220">
        <pre>
<sp-accordion>
  <sp-accordionitem header="Recent" open>
    <sp-accordionitemcontent> element 1 </sp-accordionitemcontent>
    <sp-accordionitemcontent> element 2 </sp-accordionitemcontent>
    <sp-accordionitemcontent> element 3 </sp-accordionitemcontent>
  </sp-accordionitem>
  <sp-accordionitem header="Recent2" disabled>
    <sp-accordionitemcontent> element 1 </sp-accordionitemcontent>
    <sp-accordionitemcontent> element 2 </sp-accordionitemcontent>
    <sp-accordionitemcontent> element 3 </sp-accordionitemcontent>
  </sp-accordionitem>
  <sp-accordionitem header="Recent3" open>
    <sp-accordionitemcontent> element 1 </sp-accordionitemcontent>
    <sp-accordionitemcontent> element 2 </sp-accordionitemcontent>
    <sp-accordionitemcontent> element 3 </sp-accordionitemcontent>
  </sp-accordionitem>
</sp-accordion>
</pre>
      </sp-demo>

    </sp-container>
  `;
}
