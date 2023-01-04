import { GitHubIssueConstructorType } from './types';
import { GithubApi } from './api';

/**
 * Github Issue Instance
 */
export class GithubIssue {
  /**
   * Required Param for Github Issue Instance
   */
  constructor(param: GitHubIssueConstructorType) {
    this.GithubApiInstance = new GithubApi(
      param.personalAccessToken,
      param.repositoryOwner,
      param.repositoryName,
    );

    this.IssueTitle = param.issueTitle || this.IssueTitle;
  }

  private GithubApiInstance: GithubApi;

  private IssueTitle: string = 'OCCURS ISSUE';

  /**
   * create Github issue
   * ```
   * const gh = new GIthubIssue({
   *  personalAccessToken: 'PAT',
   *  repositoryOwner: 'OWNER',
   *  repositoryName: 'REPONAME',
   * });
   * await gh.snich(error, ['You', 'me']);
   * ```
   */
  public async snitch(error: Error, assignees: string[]): Promise<void> {
    const issueTitle = error.name || this.IssueTitle;

    await this.GithubApiInstance.createIssue(
      issueTitle,
      error.message,
      assignees,
    );
  }
}
