import { LoginBody } from '../pojos/loginBody';
import testEnv from './testEnv';
/**
 * Test data management class that provides test data instances
 */
class TestData {
    private readonly validLoginBody: LoginBody;
    private readonly fakeLoginBody: LoginBody;

    constructor() {
        // Initialize login bodies with environment data
        this.validLoginBody = new LoginBody(
            testEnv.getValidEmail(),
            testEnv.getValidPassword()
        );
        
        this.fakeLoginBody = new LoginBody(
            testEnv.getFakeEmail(),
            testEnv.getFakePassword()
        );
    }

    /**
     * Gets the valid login credentials
     * @returns {LoginBody} The valid login credentials
     */
    public getValidLoginBody(): LoginBody {
        return this.validLoginBody;
    }

    /**
     * Gets the fake login credentials
     * @returns {LoginBody} The fake login credentials
     */
    public getFakeLoginBody(): LoginBody {
        return this.fakeLoginBody;
    }

    /**
     * Creates a new instance with fresh test data
     * @returns {TestData} A new TestData instance with fresh data
     */
    public static createWithNewData(): TestData {
        return new TestData();
    }
}

// Export a singleton instance
export default new TestData();

