import getElementFromTemplate from '../helpers/get-element-from-template';

export default class AbstractView {
  get template() {
    throw new Error(`Шаблон не задан`);
  }

  render() {
    return getElementFromTemplate(this.template);
  }

  bind() {

  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }

    return this._element;
  }
}
