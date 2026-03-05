document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
    const modal = document.getElementById('modal');
    const player = document.getElementById('player');
    const closeBtn = document.getElementById('closeBtn');

    if (gallery) {
        gallery.addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            if (!card) return;
            const id = card.dataset.video;
            openVideo(id);
        });
    }

    if (closeBtn) closeBtn.addEventListener('click', closeVideo);
    if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeVideo(); });

    function openVideo(id) {
        if (!id) return;
        modal.setAttribute('aria-hidden', 'false');
        player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}?si=m3UZUI8ZrfEExwrs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    }

    function closeVideo() {
        modal.setAttribute('aria-hidden', 'true');
        player.innerHTML = '';
    }
});