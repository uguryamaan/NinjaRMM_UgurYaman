import TestEnvironment from './testEnv';
import PageEnvironment from './pageEnv';
import WarnText from './warnText';
import TestDataManager from './TestData';
import { Resources } from './resources';

/**
 * Central data management class that provides access to all environment and test data
 */
class DataManager {
    private static instance: DataManager;

    private constructor() {}

    /**
     * Gets the singleton instance of DataManager
     * @returns {DataManager} The DataManager instance
     */
    public static getInstance(): DataManager {
        if (!DataManager.instance) {
            DataManager.instance = new DataManager();
        }
        return DataManager.instance;
    }

    // Direct access to all managers
    public get testEnvironment() {
        return TestEnvironment;
    }

    public get pageEnvironment() {
        return PageEnvironment;
    }

    public get warnText() {
        return WarnText;
    }

    public get testData() {
        return TestDataManager;
    }

    public get resources() {
        return Resources;
    }
}

// Export a singleton instance
export default DataManager.getInstance(); 