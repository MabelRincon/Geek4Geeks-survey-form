document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.survey-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;
        const role = document.getElementById('role').value;
        const recommend = document.querySelector('input[name="recommend"]:checked').value;
        const comments = document.getElementById('comments').value;

        const languages = [];
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(function (checkbox) {
            languages.push(checkbox.name);
        });

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Age:', age);
        console.log('Role:', role);
        console.log('Recommend:', recommend);
        console.log('Languages:', languages);
        console.log('Comments:', comments);
    });
});
