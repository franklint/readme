// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//reference for this github license badges https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba 
///badges made here: https://shields.io/
function renderLicenseBadge(data) {
  let licenseChoice = data.license[0]; 
  let licenseString = " "; 
  if(licenseChoice === "WTFPL"){
    licenseString = `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)(http://unlicense.org/)`
  };
  if (licenseChoice === "The Unlicense"){
    licenseString = `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`
  }; 
  if(licenseChoice === "Perl"){
    licenseString = `![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)`
  }; 

  return licenseString; 
};



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  ${data.description} 

  #Table of Contents 
  *[Installation]
  *[Usage] 
  *[License]
  *[Contributing]
  *[Tests]
  *[Email]
  *[Questions]

  # Installation 
  ${data.install} 

  # Usage 
  ${data.usage}

  # License 
  This Project is license under ${data.license}

  ##Contributing 
  ${data.contributors}

  ## Tests
  ${data.test}

  ## E-mail 
  ${data.email}

  ## Questions 
  IF you have any quesitns about this project, well, don't.        
  
  ## License 
  ${renderLicenseBadge(data)}
`;
}

module.exports = generateMarkdown;