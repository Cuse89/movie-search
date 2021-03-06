export const createUrlParams = params =>
    Object.keys(params)
        .map(paramKey => `${paramKey}=${params[paramKey]}`)
        .join("&");

export const getUrlSearchParam = key => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(key);
};