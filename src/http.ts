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
}

class DataSource {
  async getProjectIds(type: string) {
    const resp = await api.get(`/${type}`)
    return resp.data
      .filter((project: any) => project.type === 'dir')
      .map((project: any) => project.name)
      .sort((a: any, b: any) => a.localeCompare(b))
  }

  async getProjectData(type: string, id: string) {
    const resp = await raw.get(`${type}/${id}/data.yml`)
    const data: any = yaml.load(resp.data)
    data.id = id
    data.type = type
    data.url = raw.resolvePath(`${type}/${id}`)
    data.logoUrl = raw.resolvePath(`${type}/${id}/${data.logo}`)
    return data
  }
}

export const api = new GitHubAPI()
export const raw = new GitHubRaw()
export const dataSource = new DataSource()
