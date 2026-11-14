/* Shared selection rules for the Nike library and the Work page. */
const NikeMedia = {
    rarity(item) {
        return item.rarity ?? (item.extraRare === true ? 4 : 0);
    },
    weight(item) {
        return 10 ** (-this.rarity(item) / 4);
    },
    choose(items, random = Math.random) {
        const eligible = items.filter(item => item.includeInBuild !== false);
        const total = eligible.reduce((sum, item) => sum + this.weight(item), 0);
        let ticket = random() * total;
        for (const item of eligible) {
            ticket -= this.weight(item);
            if (ticket < 0) return item;
        }
        return eligible.at(-1) ?? null;
    },
    dimensions(media) {
        return media.tagName === 'VIDEO' ? [media.videoWidth, media.videoHeight] :
            [media.naturalWidth, media.naturalHeight];
    },
    video(item, baseURL) {
        const video = document.createElement('video');
        video.src = new URL(item.src, baseURL).href;
        if (item.poster) video.poster = new URL(item.poster, baseURL).href;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.preload = 'auto';
        video.setAttribute('aria-label', item.alt);
        video.title = item.title;
        return video;
    }
};
