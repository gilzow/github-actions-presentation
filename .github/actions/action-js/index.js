const core = require('@actions/core');
async function run() {
    try {
        const thename = core.getInput('thename')
        console.log(`Greetings, ${thename}, from the JavaScript Action!!!`)
    }
    catch (error) {
        core.setFailed(error.message);
    }
}

run()