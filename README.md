# github-release-notes-generator

A small little node module that converts release notes of github releases into a `json` format

This action is based on the idea of [@Kellojo](https://github.com/Kellojo), so basically all the credits belong to him.
I modified his code to get all the release notes and not only a specific version.

It creates a json file with the following contents:

```json
[
  {
    "name": "Now featuring Planned Transactions",
    "url": "https://github.com/Kellojo/Budget-Book/releases/tag/untagged-605ac3664b967afc4552",
    "version": "v1.3.0",
    "creationDate": "2021-02-07T13:36:50Z",
    "releaseDate": "2021-05-22T12:37:31.093Z",
    "description": "In this release, you can now start planning recurring transactions with the new transaction planning feature.\r\nThis way you can easily automate your income and expense tracking for recurring payments (i.e. rent, salary, etc.).\r\nTransactions can be planned to recur on a daily, weekly, monthly, yearly basis.\r\n\r\nOther smaller enhancements have been added:\r\n- Besides that you can now find the used open source packages in the user help menu.\r\n- The onboarding has been updated to showcase the features of the app\r\n- Some smaller UI enhancements have been added\r\n- The app is now signed and notarized for (Mac OS only). This makes installation easier, as Mac OS will no longer show it as an untrusted app. \r\n- The MIT license has been removed and the project is from now on licensed under the [Commons Clause license](https://commonsclause.com/)",
    "author": "Kellojo",
    "authorAvatar": "https://avatars.githubusercontent.com/u/12833426?v=4"
  },
  {
    "name": "Cool Release",
    "url": "https://github.com/Kellojo/Budget-Book/releases/tag/untagged-605ac3664b967afc4552",
    "version": "v1.2.0",
    "creationDate": "2021-02-06T12:35:40Z",
    "releaseDate": "2021-0-22T12:37:31.093Z",
    "description": "Some cool release notes",
    "author": "Kellojo",
    "authorAvatar": "https://avatars.githubusercontent.com/u/12833426?v=4"
  }
]
```

This file can then be used to i.e. create a release notes dialog within an app or something else.

## Inputs

### `github-access-token`

**Required** The GitHub access token. This is required to create the release notes. Default ``.

### `destination`

**Required** Where should the resulting release notes be saved to (i.e. `./config/release-notes.json`)? Default ``.

## Example usage

```yaml
- name: Create Release Notes
  uses: Jerome1998/github-release-notes-generator@v1.0
  with:
    destination: './config/release-notes.json'
    github-access-token: ${{ secrets.GITHUB_TOKEN }}
```
