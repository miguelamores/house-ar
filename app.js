import { thumbnails, base_house } from "./thumbnails.js";

function AddModelsFromUrl() {
  const querystring = window.location.search;
  const params = new URLSearchParams(querystring);
  const houseId = Number(params.get("houseId"));
  const sceneEl = document.querySelector("a-scene");
  const entityContainer = sceneEl.querySelector("#model-container");

  const el = document.createElement("a-entity");
  el.setAttribute("gltf-model", base_house[houseId]);
  houseId == 1
    ? el.setAttribute("position", "0 1.33 -0.3")
    : el.setAttribute("position", "0 1.5 -0.3");
  entityContainer.appendChild(el);

  if (houseId == 1) {
    const base = document.createElement("a-entity");
    base.setAttribute("gltf-model", base_house[2]);
    base.setAttribute("position", "0 1.5 -0.3");
    entityContainer.appendChild(base);
  }

  if (houseId == 2) {
    const base = document.createElement("a-entity");
    base.setAttribute("gltf-model", "assets/ar/NorthPole_Base.glb");
    base.setAttribute("position", "0 1.5 -0.3");
    entityContainer.appendChild(base);
  }

  params.forEach((value, key) => {
    if (key !== "step" && key !== "houseId") {
      const isValueInteger = Number.isInteger(Number(value));
      if (isValueInteger) {
        const el = document.createElement("a-entity");
        const optionSelected = thumbnails[key].options[value];
        el.setAttribute("gltf-model", optionSelected.model);
        if (optionSelected.position) {
          const { x, y, z } = optionSelected.position[houseId];
          el.setAttribute("position", { x, y, z });
        } else {
          el.setAttribute("position", "0 1.5 -0.3");
        }

        entityContainer.appendChild(el);
      } else {
        const parsedValues = JSON.parse(decodeURIComponent(value));
        parsedValues.forEach((value) => {
          const el = document.createElement("a-entity");
          const optionSelected = thumbnails[key].options[value];
          Array.isArray(optionSelected.model)
            ? el.setAttribute("gltf-model", optionSelected.model[houseId - 1])
            : el.setAttribute("gltf-model", optionSelected.model);
          if (optionSelected.position) {
            const { x, y, z } = optionSelected.position[houseId];
            el.setAttribute("position", { x, y, z });
          } else {
            el.setAttribute("position", "0 1.5 -0.3");
          }

          if (optionSelected.rotation) {
            const { y = 0 } = optionSelected.rotation;
            el.object3D.rotation.y = THREE.MathUtils.degToRad(y);
          }

          entityContainer.appendChild(el);
        });
      }
    }
  });
}

AddModelsFromUrl();
