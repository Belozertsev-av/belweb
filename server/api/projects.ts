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
