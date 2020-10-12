import { customElement, property, query } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import accordionitemStyles from './accordionitem.styles';
import template from './accordionitem.template';
import { AccordionItemContent } from './accordionitemcontent.component';

@customElement('sp-accordionitem')
export class AccordionItem extends Base {
  public static componentStyles = accordionitemStyles;

  @property({ type: String }) header = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) open = false;
  @query('slot') private slot!: HTMLElement;

  firstUpdated() {
    this.handleAccordionElements();
  }

  _handleButtonClick() {
    this.open = !this.open;
    this.handleAccordionElements();
  }

  protected getItems(): AccordionItemContent[] {
    return (this.slot as HTMLSlotElement)
      .assignedNodes({ flatten: true })
      .filter((e: any) => (e instanceof AccordionItemContent)) as any as AccordionItemContent[];
  }

  protected handleAccordionElements() {
    if (this.slot) {
      const items = this.getItems();
      items.forEach((item: any) => {
        item.isopen = this.open;
      })
    }
  }

  _handleDisabledClick() {}

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-accordionitem': AccordionItem;
  }
}
