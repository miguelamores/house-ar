import { DEFAULT_THUMBNAILS, thumbnails, base_house } from "./thumbnails.js";

function showCamera() {
  navigator.mediaDevices
    .getUserMedia({
      video: {
        aspectRatio: { exact: 16 / 9 },
        facingMode: { exact: "environment" },
      },
    })
    .then((stream) => {
      const cameraEl = document.getElementById("cameraEl");
      cameraEl.srcObject = stream;
      cameraEl.play();
      cameraEl.muted = true;
      cameraEl.volume = 0;
      // cameraEl.onloadedmetadata = (e) => {
      //   cameraEl.muted = false;
      //   cameraEl.volume = 1;
      // };
    })
    .catch((err) => {
      console.log({ err });
    });
}

function getThumbnailKeyName() {
  const thumbnail = {};
  for (const key in DEFAULT_THUMBNAILS) {
    thumbnail[DEFAULT_THUMBNAILS[key].name] = Number(key);
  }

  return thumbnail;
}

function AddModelsFromUrl() {
  const querystring = window.location.search;
  const params = new URLSearchParams(querystring);
  const houseId = params.get("houseId");
  const sceneEl = document.querySelector("a-scene");
  const entityContainer = sceneEl.querySelector("#model-container");

  const el = document.createElement("a-entity");
  el.setAttribute("gltf-model", base_house[houseId]);
  el.setAttribute("position", "0 1.5 -0.3");
  entityContainer.appendChild(el);

  params.forEach((value, key) => {
    console.log(key, value);
    if (key !== "step" && key !== "houseId") {
      const isValueInteger = Number.isInteger(Number(value));
      if (isValueInteger) {
        const el = document.createElement("a-entity");
        const optionSelected = thumbnails[key].options[value];
        el.setAttribute("gltf-model", optionSelected.model);
        if (optionSelected.position) {
          const { x, y, z } = optionSelected.position[houseId];
          el.setAttribute("position", { x, y, z });
          // el.object3D.rotation.y = THREE.MathUtils.degToRad(45);
        } else {
          el.setAttribute("position", "0 1.5 -0.3");
        }

        entityContainer.appendChild(el);
      } else {
        const parsedValues = JSON.parse(decodeURIComponent(value));
        console.log(parsedValues);
        parsedValues.forEach((value) => {
          const el = document.createElement("a-entity");
          const optionSelected = thumbnails[key].options[value];
          el.setAttribute("gltf-model", optionSelected.model);
          if (optionSelected.position) {
            const { x, y, z } = optionSelected.position[houseId];
            el.setAttribute("position", { x, y, z });
            // el.object3D.rotation.y = THREE.MathUtils.degToRad(45);
          } else {
            el.setAttribute("position", "0 1.5 -0.3");
          }

          entityContainer.appendChild(el);
        });
      }

      //   if (isValueInteger) {
      //     setThumbnails(Number(value), thumbnailKeyName[key]);
      //   } else {
      //     const parsedValues = JSON.parse(decodeURIComponent(value));
      //     parsedValues?.forEach((value: number) => setThumbnails(value, thumbnailKeyName[key]));
      //   }
      // }
    }
  });

  // if (searchParams.has('houseId')) {
  //   setHouseId(Number(searchParams.get('houseId')));
  // }
  // if (searchParams.has('step')) {
  //   setStep(Number(searchParams.get('step')));
  // }

  //   const thumbnailKeyName = getThumbnailKeyName();
  //   console.log(thumbnailKeyName);

  // params.forEach((value, key) => {
  //   if (key !== 'houseId' && key !== 'step') {
  //     const isValueInteger = Number.isInteger(Number(value));
  //     if (isValueInteger) {
  //       setThumbnails(Number(value), thumbnailKeyName[key]);
  //     } else {
  //       const parsedValues = JSON.parse(decodeURIComponent(value));
  //       parsedValues?.forEach((value: number) => setThumbnails(value, thumbnailKeyName[key]));
  //     }
  //   }
  // });
  //   params.forEach((value, key) => {
  //     console.log(key, value);
  //   });
}

showCamera();
AddModelsFromUrl();
