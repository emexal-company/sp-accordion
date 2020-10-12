import { customElement, property, query } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import accordionStyles from './accordion.styles';
import template from './accordion.template';
import { AccordionItem } from './accordionitem.component';

@customElement('sp-accordion')
export class Accordion extends Base {
  public static componentStyles = accordionStyles;

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-accordion': Accordion;
  }
}
