const core = require("@actions/core");
const github = require("@actions/github");
const { ReleaseNotesGenerator } = require("./release-notes-generator");

const sRepo = github.context.repo.repo;
const sOwner = github.context.repo.owner
const sAuthToken = core.getInput("github-access-token");
const sFilePath = core.getInput("destination");

if (!sRepo) { core.error("no repository specified, aborting"); }
if (!sOwner) { core.error("no owner specified, aborting"); }
if (!sAuthToken) { core.error("no GitHub access token specified, aborting"); }

const run = async function () {
  new ReleaseNotesGenerator(sAuthToken, sOwner, sRepo).createReleaseNotes(sFilePath);
}

try {
  run();
} catch (error) {
  core.setFailed(error.message);
}

