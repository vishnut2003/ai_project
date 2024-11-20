
export function isDeviceMobile () {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}