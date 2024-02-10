/**
 * Taken from https://github.com/sindresorhus/debounce/blob/main/index.js
 * (MIT license)
 */

function debounce(
    function_: (...args: any[]) => any,
    wait = 100,
    options: { leading?: boolean; trailing?: boolean } = {
        leading: false,
        trailing: true,
    }
) {
    if (wait < 0) {
        throw new RangeError('`wait` must not be negative.');
    }

    const leading = Boolean(options.leading);
    const trailing = options.trailing !== false;

    let storedContext: any;
    let storedArguments: any;
    let timeoutId: any;
    let timestamp: any;
    let result: any;

    function later() {
        const last = Date.now() - timestamp;

        if (last < wait && last >= 0) {
            timeoutId = setTimeout(later, wait - last);
        } else {
            timeoutId = undefined;

            if (trailing) {
                const callContext = storedContext;
                const callArguments = storedArguments;
                storedContext = undefined;
                storedArguments = undefined;
                result = function_.apply(callContext, callArguments);
            }
        }
    }

    const debounced = function (this: any, ...arguments_: any[]) {
        if (storedContext && this !== storedContext) {
            throw new Error('Debounced method called with different contexts.');
        }

        storedContext = this; // eslint-disable-line unicorn/no-this-assignment
        storedArguments = arguments_;
        timestamp = Date.now();

        const callNow = leading && !timeoutId;

        if (!timeoutId) {
            timeoutId = setTimeout(later, wait);
        }

        if (callNow) {
            result = function_.apply(storedContext, storedArguments);
        }

        return result;
    };

    debounced.clear = () => {
        if (!timeoutId) return;

        clearTimeout(timeoutId);
        timeoutId = undefined;
    };

    debounced.flush = () => {
        if (!timeoutId) return;

        const callContext = storedContext;
        const callArguments = storedArguments;
        storedContext = undefined;
        storedArguments = undefined;
        result = function_.apply(callContext, callArguments);

        clearTimeout(timeoutId);
        timeoutId = undefined;
    };

    return debounced;
}

export { debounce };
