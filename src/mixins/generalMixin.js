import * as bodyScrollLock from 'body-scroll-lock';
let dataScrollLocks;

export const customMixins = {
    methods: {
        isSafari: () => document.documentElement.classList.contains('is-browser-safari') || document.documentElement.classList.contains('is-browser-mobile-safari'),
        isDevices: () => innerWidth <= 1024,
        clearText: (text) => text.trim().replace(/\s+/g, ' '),
        lockScroll: (state, $element, name) => {
            const element = $element.get(0) ? $element.get(0) : $element;

            if (typeof dataScrollLocks === 'undefined') {
                dataScrollLocks = new Set();
            }

            let scrollLocks = dataScrollLocks;

            if (state) {
                if (typeof name === 'string') {
                    scrollLocks.add(name);
                }

                bodyScrollLock.disableBodyScroll(element, {
                    reserveScrollBarGap: true,
                });

                setImmediate(() => {
                    document.querySelector('html').classList.add('is-lock-scroll');
                });
            } else {
                if (typeof name === 'string') {
                    scrollLocks.delete(name);
                }

                bodyScrollLock.enableBodyScroll(element);

                if (!scrollLocks.size) {
                    bodyScrollLock.clearAllBodyScrollLocks();

                    document.querySelector('html').classList.remove('is-lock-scroll');
                }
            }
        },
    }
}