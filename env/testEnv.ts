import { faker } from "@faker-js/faker";
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// .env dosyasını yükle
const envPath = path.resolve(__dirname, '../.env');
console.log('Loading .env from:', envPath);
const result = dotenv.config({ path: envPath });

if (result.error) {
    console.error('Error loading .env file:', result.error);
} else {
    console.log('Environment variables loaded successfully');
}

/**
 * Environment configuration class that manages test environment variables and constants
 */
class TestEnvironment {
    private readonly validEmail: string;
    private readonly validPassword: string;
    private readonly fakeEmail: string;
    private readonly fakePassword: string;
    private readonly sqlInj: string;

    constructor() {
        // Load environment variables with fallback values
        this.validEmail = process.env.TEST_USER_EMAIL || '';
        this.validPassword = process.env.TEST_USER_PASSWORD || '';
        this.sqlInj= `" OR "1"="1`;
        
        // Validate required environment variables
        if (!this.validEmail || !this.validPassword) {
            console.error('Required environment variables are missing:');
            console.error('TEST_USER_EMAIL:', this.validEmail ? 'Set' : 'Missing');
            console.error('TEST_USER_PASSWORD:', this.validPassword ? 'Set' : 'Missing');
            throw new Error('Required environment variables are missing');
        }
        
        // Generate fake test data
        this.fakeEmail = faker.internet.email();
        this.fakePassword = faker.internet.password();
    }

    /**
     * Gets the valid email for testing
     * @returns {string} The valid email address
     */
    public getValidEmail(): string {
        return this.validEmail;
    }

    /**
     * Gets the valid password for testing
     * @returns {string} The valid password
     */
    public getValidPassword(): string {
        return this.validPassword;
    }

    /**
     * Gets a randomly generated fake email
     * @returns {string} A fake email address
     */
    public getFakeEmail(): string {
        return this.fakeEmail;
    }

    /**
     * Gets a randomly generated fake password
     * @returns {string} A fake password
     */
    public getFakePassword(): string {
        return this.fakePassword;
    }

    /**
     * Gets the API key from environment variables
     * @returns {string} The API key
     */
    public getApiKey(): string {
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            console.warn('API_KEY is not set in environment variables');
        }
        return apiKey || '';
    }

    /**
     * Gets the base URL from environment variables
     * @returns {string} The base URL
     */
    public getBaseUrl(): string {
        const baseUrl = process.env.BASE_URL;
        if (!baseUrl) {
            console.warn('BASE_URL is not set in environment variables, using default');
        }
        return baseUrl || 'http://localhost:3000';
    }
      /**
     * Gets the SQL injection test string
     * @returns {string} The SQL injection test string
     */
      public getSqlInj(): string {
        return this.sqlInj;
    }

    /**
     * Creates a new instance with fresh fake data
     * @returns {TestEnvironment} A new TestEnvironment instance with fresh fake data
     */
    public static createWithNewFakeData(): TestEnvironment {
        return new TestEnvironment();
    }

}


// Export a singleton instance
export default new TestEnvironment();

