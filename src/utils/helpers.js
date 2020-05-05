export const createUrlParams = params =>
    Object.keys(params)
        .map(paramKey => `${paramKey}=${params[paramKey]}`)
        .join("&");