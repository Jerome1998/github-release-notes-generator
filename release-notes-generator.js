const { Octokit } = require("@octokit/rest");
const fs = require("fs");

module.exports.ReleaseNotesGenerator = class ReleaseNotesGenerator {
  constructor(sAuthToken, sOwner, sRepo) {
    this.owner = sOwner;
    this.repo = sRepo;

    this.octokit = new Octokit({
      auth: sAuthToken,
    });
  }

  async createReleaseNotes (sFilePath) {
    const oRelease = await this.getReleaseInfos(this.owner, this.repo);
    this.writeInfosToFile(oRelease, sFilePath);
  }

  async getReleaseInfos (sOwner, sRepo) {
    const { data } = await this.octokit.request(`/repos/${sOwner}/${sRepo}/releases`);
    return data;
  }

  writeInfosToFile (oRelease, sFilePath) {
    console.log(`Found ${oRelease.length} release(s)`);

    const mappedReleases = data.map((d) => ({
      name: d.name,
      url: d.html_url,
      version: d.tag_name,
      creationDate: d.created_at,
      releaseDate: d.published_at || new Date().toISOString(),
      description: d.body,
      author: d.author.login,
      authorAvatar: d.author.avatar_url,
    }))

    console.log(`Writing release notes to ${sFilePath}`);
    fs.writeFileSync(sFilePath, JSON.stringify(mappedReleases));
    console.log(`Done!`);
  }
}