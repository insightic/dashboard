import axios, { type AxiosInstance } from 'axios'

class GitHubAPI {
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: 'https://api.github.com/repos/insightic/data/contents',
      withCredentials: false,
      headers: {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
  }

  async get(path: string, params: Record<string, string> = {}): Promise<any> {
    return await this.client.get(path, { params: { ref: 'gh-pages', ...params } })
  }
}

const api = new GitHubAPI()

export async function getStablecoinProjects() {
  const resp = await api.get('/stablecoin')
  return resp.data
    .filter((project: any) => project.type === 'dir')
    .map((project: any) => {
      return { name: project.name }
    })
    .sort((a: any, b: any) => a.name.localeCompare(b.name))
}
