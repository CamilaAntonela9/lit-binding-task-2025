## `<mood-selector>` – Componente de Selección de Estado de Ánimo
### Nombre: Camila Antonela Obando Buitron
## Descripción general del componente

El componente `<mood-selector>` es un Web Component desarrollado con LitElement que permite a los usuarios seleccionar su estado de ánimo mediante un menú desplegable. Al elegir un estado, se muestra un emoji representativo junto con un mensaje personalizado que refleja ese estado emocional.

## Objetivo

Crear una interfaz interactiva que permita a los usuarios expresar su estado emocional de manera visual y textual.

## Tecnologías utilizadas

- **LitElement**
- **Web Components**
- **JavaScript (ES6+)**
- **CSS**
- **HTML5**

## Explicación técnica

### Propiedades (`@property`)

Se define una propiedad reactiva `mood` que almacena el emoji seleccionado. Esta propiedad se declara utilizando el decorador `@property` de LitElement, lo que permite que el componente se actualice automáticamente en el DOM cuando su valor cambia.

### Renderizado (`render()`)

El método `render()` devuelve un template HTML utilizando la función `html` de LitElement. Este template incluye un encabezado, un menú desplegable (`<select>`) con opciones de estados de ánimo, y dos elementos `<div>` que muestran el emoji y el mensaje correspondiente al estado seleccionado.

### Eventos (`@change`)

El evento `@change` en el `<select>` escucha los cambios en la selección y llama al método `_updateMood()`, que actualiza la propiedad `mood` con el valor seleccionado. Esto dispara una re-renderización automática del componente.

### Estilos encapsulados

Los estilos del componente se definen dentro de `static get styles()` utilizando la función `css` de LitElement. Estos estilos afectan únicamente al Shadow DOM del componente, garantizando su encapsulamiento y evitando conflictos con estilos globales.

## Pasos de instalación y ejecución

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/paulosk8/lit-binding-task-2025.git
   cd lit-binding-task-2025

| Error                                                                                   | Causa común                                                     | Solución                                                                                                                     |
|-----------------------------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| `Failed to execute 'define' on 'CustomElementRegistry': the name has already been used` | Intentar definir el mismo componente más de una vez             | Asegúrate de que `customElements.define` solo se ejecuta una vez por componente. Usa módulos ES para evitar redefiniciones. |
| El componente no se renderiza y muestra solo texto plano                                | No usar `type="module"` en la etiqueta `<script>`               | Asegúrate de que el script que importa LitElement es un módulo (`<script type="module">`).                                   |
| El evento `change` no actualiza la UI                                                   | No usar propiedad reactiva o no enlazar correctamente el método | Declara `mood` en `static get properties()` y usa `this.mood = ...` para actualizar y disparar render.                       |
| Estilos no aplican                                                                      | No usar Shadow DOM o estilos mal definidos                      | Usa `static get styles()` para definir estilos encapsulados con LitElement.                                                  |


## Usos y Ejemplos en la Vida Real

### 1. Apps de seguimiento emocional (“Mood Trackers”)
Aplicaciones como **Daylio** permiten a los usuarios elegir un estado de ánimo con emojis, registrar notas y generar estadísticas o gráficos para monitorear patrones emocionales a lo largo del tiempo :contentReference[oaicite:0]{index=0}.

### 2. Recomendación musical según el ánimo
Sistemas como “Mood-Based Music Recommender” analizan el estado emocional del usuario y sugieren listas de reproducción personalizadas basadas en ese ánimo :contentReference[oaicite:1]{index=1}.

### 3. Bienestar y atención a la salud mental
En entornos terapéuticos o de bienestar, seleccionar el ánimo sirve para identificar patrones de estrés o señales emocionales, apoyando estrategias de autocuidado :contentReference[oaicite:2]{index=2}.



## Codigo del componente mood-selector.js

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
