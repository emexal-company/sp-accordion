import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-accordion.styles';
import template from './demo-accordion.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { Accordion } from '@spectrum/sp-accordion';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

@customElement('demo-accordion')
export class DemoAccordion extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-accordion': DemoAccordion;
  }
}
