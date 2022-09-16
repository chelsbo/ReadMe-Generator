// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {""}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {""}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {""}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    - [Description]($description)
    - [Motivation]($motivation)
    - [Why]($why)
    - [Solved]($solved)
    - [What]($what)
    - [Install]($install)
    - [Collabs]($collabs)
    - [Licenses]($licenses)


    # Description
    ${description}
    ## Motivation
    ${motivation}
    ## Why
    ${why}
    ## Solved
    ${solved}
    ## What
    ${what}
    ## Install
    ${Install}
    ## Collabs
    ${collabs}
    ##Licenses
    ${licenses}

    # Contact
    *GitHub:${git}
    *LinkedIn :${linkedin}
    #Email: ${email}`;

}

module.exports = generateMarkdown;
then(({
  titles
})=>{
  const template = `# ${title}
 
  # Description
  ${description}}
  ## Motivation
  ${motivation}
  ## Why
  ${why}
  ## Solved
  ${solved}
  ## What
  ${what}
  ## Install
  ${Install}
  ## Collabs
  ${collabs}
  ##Licenses
  ${licenses}

  # Contact
  *GitHub:${git}
  *LinkedIn :${linkedin}
  #Email: ${email}`;

}
)