import {System} from 'ecsy';
import { Text as TroikaText } from 'troika-three-text';
import {Object3D, Text as TextComponent} from '../components/index.js';

const anchorXMapping = {
  left: 'left',
  center: 'center',
  right: 'right'
};

const anchorYMapping = {
  top: 'top',
  center: 'middle',
  bottom: 'bottom'
};

export class SDFTextSystem extends System {

  updateText(textMesh, textComponent) {
    textMesh.text = textComponent.text;
    textMesh.textAlign = textComponent.textAlign;
    textMesh.anchorX = anchorXMapping[textComponent.anchor] ?? 'center';
    textMesh.anchorY = anchorYMapping[textComponent.baseline] ?? 'middle';
    textMesh.color = textComponent.color;
    textMesh.font = textComponent.font;
    textMesh.fontSize = textComponent.fontSize;
    textMesh.letterSpacing = textComponent.letterSpacing || 0;
    textMesh.lineHeight = textComponent.lineHeight || null;
    textMesh.overflowWrap = textComponent.overflowWrap;
    textMesh.whiteSpace = textComponent.whiteSpace;
    textMesh.maxWidth = textComponent.maxWidth;
    if (textMesh.material) {
      textMesh.material.opacity = textComponent.opacity;
      textMesh.material.transparent = textComponent.opacity < 1 || textMesh.material.transparent;
    }
    textMesh.sync();
  }

  execute(delta, time) {
    var entities = this.queries.entities;

    entities.added.forEach(e => {
      var textComponent = e.getComponent(TextComponent);

      const textMesh = new TroikaText();
      textMesh.name = 'textMesh';
      textMesh.renderOrder = 1; //brute-force fix for ugly antialiasing, see issue #67
      this.updateText(textMesh, textComponent);
      e.addComponent(Object3D, {value: textMesh});
    });

    entities.removed.forEach(e => {
      var objectComponent = e.getComponent(Object3D);
      if (!objectComponent) {
        return;
      }
      var holder = objectComponent.value;
      var textMesh = holder && holder.getObjectByName ? holder.getObjectByName('textMesh') : holder;
      if (textMesh && typeof textMesh.dispose === 'function') {
        textMesh.dispose();
      }
      if (holder && holder !== textMesh && holder.remove && textMesh) {
        holder.remove(textMesh);
      }
    });

    entities.changed.forEach(e => {
      var object3D = e.getComponent(Object3D).value;
      if (object3D && typeof object3D.sync === 'function') {
        var textComponent = e.getComponent(TextComponent);
        this.updateText(object3D, textComponent);
      }
    });
  }
}

SDFTextSystem.queries = {
  entities: {
    components: [TextComponent],
    listen: {
      added: true,
      removed: true,
      changed: [TextComponent]
    }
  }
}
