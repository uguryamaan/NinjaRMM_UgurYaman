# NinjaRMM Test Automation Framework

This project is a test automation framework for the NinjaOne application, built using Playwright and TypeScript. It follows modern testing practices and implements the Page Object Model (POM) design pattern.

## 🚀 Features

- **Framework**: Playwright with TypeScript
- **Design Pattern**: Page Object Model (POM)
- **Test Reports**: Allure Reporting
- **Code Quality**: ESLint & Prettier
- **Browser Support**: Chrome, Firefox, WebKit
- **CI/CD**: GitHub Actions Integration
- **Environment Management**: Dotenv
- **Test Data Management**: POJO Structure

## 📁 Project Structure

```
├── tests/                  # Test scenarios
├── page-objects/          # Page Object Model classes
├── fixtures/              # Test fixtures
├── env/                   # Environment configurations
├── pojos/                 # Plain Old JavaScript Objects
├── allure-results/        # Allure test results
├── allure-report/         # Generated Allure reports
└── test-results/          # Test execution results
```

## 🛠️ Prerequisites

- Node.js >= 18.0.0
- npm or yarn
- Git

## 🔧 Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
TEST_USER_EMAIL=your_email
TEST_USER_PASSWORD=your_password
BASE_URL=your_base_url
```

## 🚀 Running Tests

### Run all tests
```bash
npm test
```

### Run tests in specific browsers
```bash
npm run execute:chrome    # Run tests in Chrome
npm run execute:firefox   # Run tests in Firefox
npm run execute:webkit    # Run tests in WebKit
npm run execute:mobile    # Run tests in Mobile Chrome
```

### Generate and view reports
```bash
npm run report           # Open Allure report
npm run test:report      # Run tests and generate report
```

## 📊 Test Reports

After test execution, you can find:
- Allure reports in the `allure-report/` directory
- Test results in the `test-results/` directory
- Playwright reports in the `playwright-report/` directory

## 🧪 Test Scenarios

Currently implemented test scenarios:
- Login functionality tests
- Password reset functionality tests
- Form validation tests
- Security tests (SQL injection, XSS)

## 🔍 Code Quality

The project uses:
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Author

- **Software QA Engineer Ugur Yaman** 

## 🔄 Future Improvements

- [ ] Add API test scenarios
- [ ] Implement performance testing
- [ ] Add more comprehensive documentation
- [ ] Create test data management system
- [ ] Add utility functions library
- [ ] Implement cross-browser testing
- [ ] Add visual regression testing
- [ ] Implement parallel test execution optimization # ninjaOne_UgurYaman
