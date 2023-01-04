import { Octokit } from 'octokit';

/**
 * Github API Instance using octokit
 */
export class GithubApi {
  /**
   * Required Personal Access Token (PAT) for Use Github API.
   */
  constructor(
    private personalAccessToken: string,
    private repositoryOwner: string,
    private repositoryName: string,
  ) {
    this.OctokitInstance = new Octokit({
      auth: this.personalAccessToken,
    });
  }

  private OctokitInstance: Octokit;

  /**
   * Create Github Issue
   * ```
   * const githubApi = new GithubApi('PAT', 'REPO_OWNER', 'REPO_NAME');
   * await githubApi.createIssue('Found Issue', ['you', 'me']);
   * ```
   */
  public async createIssue(
    title: string,
    body: string,
    assignees?: string[],
  ): Promise<void> {
    await this.OctokitInstance.rest.issues.create({
      owner: this.repositoryOwner,
      repo: this.repositoryName,
      body,
      title,
      assignees,
    });
  }
}
