// GLOBAL 
const dummyTextInput        = document.getElementById('dummyText');
const sampleText            = document.getElementById('sampleText');
const boxLayout             = document.querySelector('.boxLaoyut');
const imageBackground       = document.getElementById('imageBackground');
const boldOption            = document.getElementById('boldOption');
const italicOption          = document.getElementById('italicOption');
const sampleTextStyle       = sampleText.style;
const fontFamilySelect      = document.getElementById('fontFamilySelect');
const googleFontsIcon       = document.getElementById('googleFontsIcon');
const imageUpload           = document.getElementById('imageUpload');
const textColorSection      = document.querySelector('.text-colors');
const textColor             = document.getElementById('textColor');
manualTextColor.value       = textColor.value;
const textContent           = document.getElementById('textContent');
const textShadowColor       = document.getElementById('textShadowColor');
const manualTextShadowColor = document.getElementById('manualTextShadowColor');
const textShadowOptions     = document.querySelector('.text-shadow-options');
manualTextShadowColor.value = textShadowColor.value;
// SIZE
const fontSizeInput         = document.getElementById('fontSize');
const fontSizeValue         = document.getElementById('fontSizeValue');
const sizeOptions           = document.querySelector('.size-options');
// HEIGHT
const textHeightInput       = document.getElementById('textHeight');
const textHeightValue       = document.getElementById('textHeightValue');
// ANGLE
const angleInput            = document.getElementById('angle');
const angleValue            = document.getElementById('angleValue');
// OPACITY
const opacityInput          = document.getElementById('opacity');
const opacityValue          = document.getElementById('opacityValue');
// Set initial values
textHeightInput.value = 10;
textHeightValue.value = 10;
opacityInput.value = 1;
opacityValue.value = 1;
angleInput.value = 45;
angleValue.value = 45;
updateText(); // Update text with initial values
// GLOBAL BOLD STYLE
boldOption.addEventListener('click', () => {
    sampleTextStyle.fontWeight = sampleTextStyle.fontWeight === 'bold' ? 'normal' : 'bold';
    boldOption.classList.toggle('active');
});

// GLOBAL ITALIC STYLE
italicOption.addEventListener('click', () => {
    sampleTextStyle.fontStyle = sampleTextStyle.fontStyle === 'italic' ? 'normal' : 'italic';
    italicOption.classList.toggle('active');
});

// GLOBAL FONT FAMILY
fontFamilySelect.addEventListener('change', () => {
    const selectedFont = fontFamilySelect.value;
    sampleText.style.fontFamily = selectedFont;
});

// GLOBAL BACKGROUND COLOR
imageBackground.addEventListener('click', () => {
    changeBackgroundColor('url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC1JREFUeNpiPHPmDAM2YGxsjFWciYFEMKqBGMD4//9/rBJnz54dDSX6aQAIMABCtQiAsDRF+wAAAABJRU5ErkJggg==")');
});

function changeBackgroundColor(color) {
    boxLayout.style.background = color;
}
whiteBox.addEventListener('click', () => {
    changeBackgroundColor('white');
});

blackBox.addEventListener('click', () => {
    changeBackgroundColor('black');
});

// GLOBAL REPLACE DUMMY CONTENT
dummyTextInput.addEventListener('input', () => {
    sampleText.textContent = dummyTextInput.value;
});

// GLOBAL TEXT COLOR CHANGE
textColor.addEventListener('input', () => {
    const colorValue = textColor.value;
    changeTextColor(colorValue);
    manualTextColor.value = colorValue;
});
manualTextColor.addEventListener('input', () => {
    const colorValue = manualTextColor.value;
    changeTextColor(colorValue);
});
function changeTextColor(color) {
    sampleText.style.color = color;
}

// GLOBAL TEXT SHADOW CHANGE
textShadowColor.addEventListener('input', () => {
    const colorValue = textShadowColor.value;
    changeTextShadowColor(colorValue);
    manualTextShadowColor.value = colorValue;
    updateText();
});

manualTextShadowColor.addEventListener('input', () => {
    const colorValue = manualTextShadowColor.value;
    changeTextShadowColor(colorValue);
    updateText();
});

function changeTextShadowColor(color) {
    const shadowValue = `2px 2px ${color}`;
    sampleText.style.textShadow = shadowValue;
}


// FONT SIZE
fontSizeInput.addEventListener('input', () => {
    const newSize = fontSizeInput.value + 'px';
    sampleText.style.fontSize = newSize;
    fontSizeValue.value = newSize;
});

fontSizeValue.addEventListener('input', () => {
    const newSize = fontSizeValue.value;
    sampleText.style.fontSize = newSize;
    fontSizeInput.value = newSize.replace('px', '');
});

// HEIGHT
textHeightInput.addEventListener('input', () => {
    textHeightValue.value = textHeightInput.value;
    updateText();
});
textHeightValue.addEventListener('input', () => {
    textHeightInput.value = textHeightValue.value;
    updateText();
});
// OPACITY
opacityInput.addEventListener('input', () => {
    opacityValue.value = opacityInput.value;
    updateText();
});

opacityValue.addEventListener('input', () => {
    opacityInput.value = opacityValue.value;
    updateText();
});
// ANGLE
angleInput.addEventListener('input', () => {
    angleValue.value = angleInput.value;
    updateText();
});
angleValue.addEventListener('input', () => {
    angleInput.value = angleValue.value;
    updateText();
});

// FOR 3D EFFECT METHODS

function generateTextShadow(height, opacity, angle, shadowColor) 
{
    const offsetX = Math.sin(angle * (Math.PI / 180));
    const offsetY = Math.cos(angle * (Math.PI / 180));
    let textShadow = "";
    for (let i = 0; i <= height; i++) {
        const offset = i * 1;
        const normalizedOpacity = opacity * (height - i) / height; // Adjusted opacity calculation
        textShadow += `${offsetX * offset}px ${offsetY * offset}px ${offset}px rgba(0, 0, 0, ${normalizedOpacity}), `;
    }
    return textShadow.slice(0, -2);
}

function updateText() {    
    sampleText.style.fontSize = fontSizeInput.value + 'px';
    const selectedTextShadowColor = textShadowColor.value;
    const textShadow = generateTextShadow(
        textHeightInput.value, 
        opacityInput.value, 
        angleInput.value, 
        textShadowColor.value
    );
    sampleText.style.textShadow = textShadow;
}

// Generated Code
const generateCodeButton = document.getElementById('generateCodeButton');
const generatedHtmlContainer = document.createElement('div');
generatedHtmlContainer.classList.add('generated-code-container');

generateCodeButton.addEventListener('click', () => {    
    // Clear previously generated code
    while (generatedHtmlContainer.firstChild) {
        generatedHtmlContainer.removeChild(generatedHtmlContainer.firstChild);
    } 
    const generatedHtml = generateHtml();
    const generatedCss = generateCss();        
    const generatedCodeHtmlHeading = document.createElement('h5');
    generatedCodeHtmlHeading.innerText = 'HTML';
    generatedHtmlContainer.appendChild(generatedCodeHtmlHeading);
    const generatedCodeHtml = document.createElement('pre');
    generatedCodeHtml.innerText = generatedHtml;
    generatedHtmlContainer.appendChild(generatedCodeHtml);
    const generatedCodeCssHeading = document.createElement('h5');
    generatedCodeCssHeading.innerText = 'CSS';
    generatedHtmlContainer.appendChild(generatedCodeCssHeading);
    const generatedCodeCss = document.createElement('pre');
    generatedCodeCss.innerText = generatedCss;
    generatedHtmlContainer.appendChild(generatedCodeCss);
    const formGenerator = document.querySelector('.form-generator');
    formGenerator.appendChild(generatedHtmlContainer);
});

function generateHtml() 
{ 
    const textValue = sampleText.textContent || '3D TEXT';
    return '<div id="sampleText">\n' +
            `    <p>${textValue}</p>\n` +
            '</div>';
}

function generateCss() 
{
    let css = '';
        css += '#sampleText {\n' +
        '    font-size: ' + fontSizeInput.value + 'px;\n' +
        '    color: ' + textColor.value + ';\n' +
        '    text-shadow: ' + sampleText.style.textShadow + ';\n' +
        '    /* Add other CSS properties here */\n' +
        '}\n';
    return css;
}
