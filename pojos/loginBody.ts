/**
 * Represents the login credentials for a user
 */
export class LoginBody {
    private readonly email: string;
    private readonly password: string;

    /**
     * Creates a new LoginBody instance
     * @param {string} email - User's email address
     * @param {string} password - User's password
     */
    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    /**
     * Gets the user's email address
     * @returns {string} The email address
     */
    public getEmail(): string {
        return this.email;
    }

    /**
     * Gets the user's password
     * @returns {string} The password
     */
    public getPassword(): string {
        return this.password;
    }

    /**
     * Creates a LoginBody instance from a plain object
     * @param {Object} data - Object containing email and password
     * @returns {LoginBody} New LoginBody instance
     */
    public static fromObject(data: { email: string; password: string }): LoginBody {
        return new LoginBody(data.email, data.password);
    }
}



