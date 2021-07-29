  
// License badge//
function renderLicenseBadge(license) {
  if (license) {
    switch (license) {
      case (license = 'MIT License'):
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      case (license = 'GNU GPL License'):
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      case (license = 'Apache License 2.0'):
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      case (license = 'Mozilla Public License 2.0'):
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    };
  } else {
    return '';
  }
};

// Funcion returning the license link//
function renderLicenseLink(license) {
  
  if (license) {
    switch (license) {
      case (license = "Mozilla Public License 2.0"):
        return `[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)`;
      case (license = "MIT License"):
        return `[MIT License](https://choosealicense.com/licenses/mit/)`;
      case (license = "GNU GPL License"):
        return `[GNU GPL 3.0 License](https://choosealicense.com/licenses/gpl-3.0/)`;
      case (license = "Apache License 2.0"):
        return `[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
    
    

    };
  } else {
    return "No license provided.";
  }
};

// Function returning the license section of the README file//
function renderLicenseSection(license) {
  if (license) {
    return `${renderLicenseLink(license)}`
  }
  return '';
}

//Generate a markdown for README file//
function generateMarkdown(data) {
  return `
  # ${data.title}  
  ${renderLicenseBadge(data.license)}  
  ## Description
  ${data.description}
  [Deployed link](${data.link})
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Credits](#credits)
  * [License](#license)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ![Project Screenshot](/assets/images/${data.screenshot})
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Credits
  ${data.credits}
  ## License
  ${renderLicenseSection(data.license)}
  

  ## Questions
  If you have questions, please reach out via email or my GitHub account.
  * GitHub: [${data.github}](https://github.com/${data.github})
  * E-mail: [${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;

