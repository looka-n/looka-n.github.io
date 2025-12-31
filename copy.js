const copyBtn = document.querySelector('.copy-btn');
    const email = document.getElementById('email-text').innerText;

    const copyIcon = copyBtn.querySelector('.copy-icon');
    const checkIcon = copyBtn.querySelector('.check-icon');

    copyBtn.addEventListener('click', async () => {
        await navigator.clipboard.writeText(email);

        copyIcon.style.display = 'none';
        checkIcon.style.display = 'block';

        setTimeout(() => {
        checkIcon.style.display = 'none';
        copyIcon.style.display = 'block';
        }, 1200);
    });