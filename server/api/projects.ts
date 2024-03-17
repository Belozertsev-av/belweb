import { Octokit } from "@octokit/core"

const octokit = new Octokit({
  auth: "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"
})

export default defineEventHandler(async (event) => {
  const result = await octokit.request('GET /user/repos', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
 return result
})
