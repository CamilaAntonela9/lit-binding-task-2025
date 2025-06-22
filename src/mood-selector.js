import { LitElement, html, css } from 'lit-element';

export class MoodSelector extends LitElement {
  static get properties() {
    return {
      mood: { type: String }
    };
  }

  constructor() {
    super();
    this.mood = '😊';
  }

  static get styles() {
    return css`
      :host {
      display: flex;
      justify-content: center;
      align-items: flex-start;  
      min-height: 100vh;
      width: 100vw;
      box-sizing: border-box;
      }
      .panel {
      margin-top: 10vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      max-width: 400px;
      border: 1px solid #e0e0e0;
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      font-family: Arial, sans-serif;
      }
      h2 {
      margin-bottom: 15px;
      font-size: 22px;
      color: #333;
      }
      select {
      padding: 10px;
      font-size: 16px;
      border-radius: 5px;
      border: 1px solid #24b924;
      width: 100%;
      }
      .mood-display {
      margin-top: 20px;
      font-size: 40px;
      text-align: center;
      }
      .message {
      margin-top: 10px;
      font-size: 18px;
      font-family: Georgia, 'Times New Roman', Times, serif;
      text-align: center;
      color: #252323;
      }
      div {
      display: flex;
      justify-content: center;
      }
    `;
  }

  render() {
    return html`
      <div class="panel">
        <h2>Selecciona tu estado de ánimo</h2>
        <select @change="${this._updateMood}">
          <option value="😊">Feliz</option>
          <option value="😢">Triste</option>
          <option value="😠">Enojado</option>
          <option value="😴">Cansado</option>
          <option value="😎">Genial</option>
          <option value="🥰">Enamorado</option>
          <option value="😬">Nervioso</option>
          <option value="🤩">Emocionado</option>
          <option value="😐">Neutral</option>
          <option value="🤔">Pensativo</option>
          <option value="😭">Llorando</option>
        </select>
        <div class="mood-display">${this.mood}</div>
        <div class="message">${this._getMessage(this.mood)}</div>
      </div>
    `;
  }

  _updateMood(e) {
    this.mood = e.target.value;
  }

  _getMessage(mood) {
    const messages = {
      '😊': '¡Qué bueno que estás feliz!',
      '😢': 'Lo siento, espero que te sientas mejor pronto.',
      '😠': 'Respira hondo, todo estará bien.',
      '😴': 'Tal vez necesitas una siesta.',
      '😎': '¡Sigue brillando!',
      '🥰': 'El amor está en el aire.',
      '😬': 'Tranquila, todo saldrá bien.',
      '🤩': '¡Qué emocionante!',
      '😐': 'A veces está bien estar neutral.',
      '🤔': 'Reflexionar es importante.',
      '😭': 'Llora si necesitas, pero recuerda que todo pasa.'
    };
    return messages[mood] || '¿Cómo te sientes hoy?';
  }
}

customElements.define('mood-selector', MoodSelector);
