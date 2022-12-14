// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.license ? data.license: ''}

  ## Table of contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)

  ## Demo
  
  ## Licenses
  ${data.license ? data.license: ''}

  ## Description
  * ${data.description}

  ## Installation
  * ${data.installation}

  ## Usage
  * ${data.usage}

  ## Contributing
  * ${data.contributing}

  ## Test
  * ${data.test}

  ## Questions
  How to reach me with any questions
  * GitHub: https://github.com/${data.github}
  * Email: ${data.email}


`;
}

module.exports = generateMarkdown;
