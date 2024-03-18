import axios, { type AxiosInstance } from 'axios'
import yaml from 'js-yaml'

class GitHubAPI {
  private readonly BASE_URL = 'https://api.github.com/repos/insightic/data/contents'
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: this.BASE_URL,
      withCredentials: false,
      headers: {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
  }

  resolvePath(path: string) {
    return `${this.BASE_URL}/${path}`
  }

  async get(path: string, params: Record<string, string> = {}): Promise<any> {
    return await this.client.get(path, { params: { ref: 'gh-pages', ...params } })
  }

  async getProjectIds(type: string) {
    const resp = await this.get(`/${type}`)
    return resp.data
      .filter((project: any) => project.type === 'dir')
      .map((project: any) => project.name)
      .sort((a: any, b: any) => a.localeCompare(b))
  }
}

class GitHubRaw {
  private readonly BASE_URL = 'https://raw.githubusercontent.com/insightic/data/gh-pages'
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: this.BASE_URL,
      withCredentials: false
    })
  }

  resolvePath(path: string) {
    return `${this.BASE_URL}/${path}`
  }

  async get(path: string): Promise<any> {
    return await this.client.get(path)
  }

  async getProjectData(project: string) {
    const resp = await this.get(`stablecoin/${project}/data.yml`)
    return yaml.load(resp.data)
  }
}

export const api = new GitHubAPI()
export const raw = new GitHubRaw()
