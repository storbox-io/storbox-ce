const Core = require('storbox-core').Core;

Core.run(`${__dirname}/config`).then(() => {
    require('storbox-core').Log.info("Exiting...");
});
