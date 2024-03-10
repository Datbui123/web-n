const box = document.getElementById('box');
const radios = document.querySelectorAll('input[type=radio][name=color]');

radios.forEach(radio => {
    radio.addEventListener('click', function() {
        switch(this.value) {
            case 'red':
                box.textContent = 'Màu đã chọn là màu đỏ';
                box.style.backgroundColor = 'red';
                break;
            case 'blue':
                box.textContent = 'Màu đã chọn là màu xanh da trời';
                box.style.backgroundColor = 'blue';
                break;
            case 'green':
                box.textContent = 'Màu đã chọn là màu xanh lá cây';
                box.style.backgroundColor = 'green';
                break;
            default:
                box.style.backgroundColor = 'white';
        }
    });
});
