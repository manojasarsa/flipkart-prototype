export const filterReducer = (state, action) => {
    switch (action.type) {
        case "SORT_BY":
            return { ...state, sortBy: action.payload };

        case "ADDIDAS":
            return {
                ...state,
                brands: { ...state.brands, Addidas: !state.brands.Addidas }
            };

        case "ROADSTER":
            return {
                ...state,
                brands: { ...state.brands, Roadster: !state.brands.Roadster }
            };

        case "PUMA":
            return {
                ...state,
                brands: { ...state.brands, Puma: !state.brands.Puma }
            };

        case "HRX":
            return {
                ...state,
                brands: { ...state.brands, Hrx: !state.brands.Hrx }
            };

        case "MEN":
            return {
                ...state,
                categories: { ...state.categories, men: !state.categories.men }
            };

        case "WOMEN":
            return {
                ...state,
                categories: { ...state.categories, women: !state.categories.women }
            };

        case "BOYS":
            return {
                ...state,
                categories: { ...state.categories, boys: !state.categories.boys }
            };

        case "GIRLS":
            return {
                ...state,
                categories: { ...state.categories, girls: !state.categories.girls }
            };

        case "S":
            return {
                ...state,
                sizes: { ...state.sizes, s: !state.sizes.s }
            };

        case "M":
            return {
                ...state,
                sizes: { ...state.sizes, m: !state.sizes.m }
            };

        case "L":
            return {
                ...state,
                sizes: { ...state.sizes, l: !state.sizes.l }
            };

        case "XL":
            return {
                ...state,
                sizes: { ...state.sizes, xl: !state.sizes.xl }
            };

        case "CLEAR_ALL":
            return {
                sortBy: null,
                sizes: { "s": false, "m": false, "l": false, "xl": false },
                brands: { "Addidas": false, "Roadster": false, "Puma": false, "Hrx": false, },
                categories: { men: false, women: false, boys: false, girls: false }
            };

        default: return state;
    }
}