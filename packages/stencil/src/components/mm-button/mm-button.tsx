import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mm-button',
  styleUrl: 'mm-button.css',
  shadow: true,
})
export class MmButton {
  @Prop() text: string;
  @Prop() appearence: string;

  render() {
    return (
      <button class={`btn ${this.appearence}`} type="button">
        {this.text}
      </button>
    );
  }
}