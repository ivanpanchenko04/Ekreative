document.addEventListener("DOMContentLoaded", function () {
  const paletteContainer = document.getElementById("palette-container");
  const colorModal = document.getElementById("color-modal");
  const colorModalContent = document.getElementById("color-modal-content");
  const paletteSelect = document.getElementById("palette-select");
  paletteSelect.value = "flat-ui-colors-v1";
  fetch("pallete.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      function createColorBox(color) {
        const colorBox = document.createElement("div");
        colorBox.classList.add("color");
        colorBox.style.backgroundColor = color.color;
        colorBox.title = color.name;
        const colorName = document.createElement("div");
        colorName.classList.add("color-name");
        colorName.textContent = color.name;

        colorBox.appendChild(colorName);
        colorBox.addEventListener("click", function () {
          copyColorToClipboard(color.color);
          showColorModal(color.color);
        });
        return colorBox;
      }

      function playClickSound() {
        const clickSound = document.getElementById("click-sound");
        clickSound.currentTime = 0;
        clickSound.play();
      }
      paletteContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("color")) {
          const color = event.target.style.backgroundColor;
          playClickSound();
        }
      });

      function copyColorToClipboard(color) {
        navigator.clipboard
          .writeText(color)
          .then(() => console.log("Color copied to clipboard"))
          .catch((err) => console.error("Failed to copy color: ", err));
      }

      function showColorModal(color) {
        colorModal.style.display = "block";
        colorModalContent.style.backgroundColor = color;

        colorModalContent.addEventListener("click", function () {
          closeColorModal();
        });
      }

      function closeColorModal() {
        colorModal.style.display = "none";
      }

      function displayPalette(palette) {
        paletteContainer.innerHTML = "";
        const paletteDiv = document.createElement("div");
        paletteDiv.classList.add("palette");
        palette.colors.forEach((color) => {
          const colorBox = createColorBox(color);
          paletteDiv.appendChild(colorBox);
        });
        paletteContainer.appendChild(paletteDiv);
      }
      data.forEach((palette) => {
        const option = document.createElement("option");
        option.value = palette.id;
        option.textContent = palette.paletteName;
        paletteSelect.appendChild(option);
      });
      paletteSelect.addEventListener("change", function () {
        const selectedPaletteId = paletteSelect.value;
        const selectedPalette = data.find(
          (palette) => palette.id === selectedPaletteId
        );
        if (selectedPalette) {
          displayPalette(selectedPalette);
        }
      });
    })
    .catch((error) => console.error("Failed to fetch palette data: ", error));
});
