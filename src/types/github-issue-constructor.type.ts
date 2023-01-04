export type GitHubIssueConstructorType = {
  /**
   * Github PAT
   */
  personalAccessToken: string;

  /**
   * Owner Name
   */
  repositoryOwner: string;

  /**
   * Repo Name
   */
  repositoryName: string;

  /**
   * Issue Title
   */
  issueTitle?: string;
};
