const  getCroppedImageUrl = (url: string) => {
    if (!url) return '';
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    console.log(target, index);
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;