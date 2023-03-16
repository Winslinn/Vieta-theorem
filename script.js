const inputs = {
    a: document.getElementById('a'),
    b: document.getElementById('b'),
    c: document.getElementById('c')
};

const x1 = document.getElementById('x1')
const x2 = document.getElementById('x2')
const discriminator = document.getElementById('discriminator')

function inputChanged(){
    const values = {
        aValue: document.getElementById('a').value,
        bValue: document.getElementById('b').value,
        cValue: document.getElementById('c').value
    };
    
    const sum = -(values.bValue) / values.aValue
    const mul = values.cValue / values.aValue
    const D = values.bValue ** 2 - 4 * values.aValue * values.cValue
    const firstX = (-values.bValue + Math.sqrt(D)) / (2 * values.aValue)
    const secondX = (-values.bValue - Math.sqrt(D)) / ( 2 * values.aValue)

    x1.value = firstX
    x2.value = secondX
    discriminator.textContent = "Дискримінант: "+D
}

inputs.a.addEventListener('input', inputChanged);
inputs.b.addEventListener('input', inputChanged);
inputs.c.addEventListener('input', inputChanged);