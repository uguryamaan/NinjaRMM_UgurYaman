/**
 * Interface defining the application's resource URLs
 */
interface Resources {
    readonly BASE_URL: string;
    readonly LOGIN_URL: string;
    readonly RESETPASSWORD_URL:string;
    readonly REGISTER_URL:string;
}

/**
 * Base URL for the application
 * @private
 */
const baseURL = "https://app.ninjarmm.com/";

/**
 * Application resource URLs
 * @constant
 */
export const Resources: Resources = {
    BASE_URL: baseURL,
    LOGIN_URL: `${baseURL}auth/#/login/`,
    RESETPASSWORD_URL:`${baseURL}auth/#/resetPassword`,
    REGISTER_URL: `${baseURL}auth/#/register`
} as const;

/**
 * Gets the complete URL for a given path
 * @param path - The path to append to the base URL
 * @returns The complete URL
 */
export function getUrl(path: string): string {
    return `${baseURL}${path}`;
}



  