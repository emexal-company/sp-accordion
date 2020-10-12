import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import accordionitemcontentStyles from './accordionitemcontent.styles';
import template from './accordionitemcontent.template';

@customElement('sp-accordionitemcontent')
export class AccordionItemContent extends Base {
  public static componentStyles = accordionitemcontentStyles;

  @property({ type: Boolean }) isopen = false;

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-accordionitemcontent': AccordionItemContent;
  }
}
