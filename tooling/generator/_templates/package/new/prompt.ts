module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message:
          'What is the dash-cased name of the package? (i.e. "new-package")'
      }
    ];

    return inquirer.prompt(questions);
  }
};
