const core = require('@actions/core');
async function run() {
    try {
        const thename = core.getInput('thename')
        console.log(`Hello there, ${thename}!!!`)
    }
    catch (error) {
        core.setFailed(error.message);
    }
}

run()