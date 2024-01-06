export function initTitleAndIcon(iconSrc: string, title: string) {
    document.title = title;

    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        (link as HTMLLinkElement).rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    (link as HTMLLinkElement).href = iconSrc;
}