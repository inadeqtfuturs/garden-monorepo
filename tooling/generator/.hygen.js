const path = require('path');

module.exports = {
  helpers: {
    relative: (from, to) => path.relative(from, to),
    root: () => path.join('../..'), 
    pathToType: (type) => path.join(`../../${type}`), src: () => __dirname
  }
};
