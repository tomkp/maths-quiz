const key = 'maths-quiz';

export const loadState = () => {
    try {
        const state = localStorage.getItem(key);
        if (state) {
            return JSON.parse(state);
        }
    } catch (err) {
        console.error(`Error loading state from localStorage`);
    }
    return undefined;
};

export const saveState = (state) => {
    try {
        localStorage.setItem(key, JSON.stringify(state));
    } catch (err) {
        console.error(`Error saving state to localStorage`);
    }
};
