import { Octokit } from "@octokit/core"

const octokit = new Octokit({
  auth: process.env.API_KEY
})

export default defineEventHandler(async (event) => {
  const result = await octokit.request('GET /user/repos', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
 return result
})
