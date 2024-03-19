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

  async getProjectData(type: string, id: string, withDetails = true) {
    const resp = await raw.get(`${type}/${id}/data.yml`)
    const data: any = yaml.load(resp.data)
    data.id = id
    data.type = type
    data.url = raw.resolvePath(`${type}/${id}`)
    data.baseUrl = raw.resolvePath(`${type}/${id}`)
    data.logoUrl = raw.resolvePath(`${type}/${id}/${data.logo}`)

    if (!withDetails) return data

    try {
      const resp = await raw.get(`${type}/${id}/results/smart_contract_validator_results.json`)
      if (resp.data.length > 0) {
        data.scv = resp.data[resp.data.length - 1]
      }
    } catch (e) {
      // ignore
    }

    try {
      const resp = await raw.get(`${type}/${id}/results/security_assessment_results.json`)
      if (resp.data.length > 0) {
        data.securityassessment = resp.data[resp.data.length - 1]
      }
    } catch (e) {
      // ignore
    }

    try {
      const resp = await raw.get(`${type}/${id}/results/twitter_results.json`)
      if (resp.data.length > 0) {
        data.twitter = resp.data[resp.data.length - 1]
      }
    } catch (e) {
      // ignore
    }

    try {
      const resp = await raw.get(`${type}/${id}/results/sosovalue_news_results.json`)
      if (resp.data.length > 0) {
        data.sosovaluenews = resp.data[resp.data.length - 1]
      }
    } catch (e) {
      // ignore
    }

    return data
  }
}

export const api = new GitHubAPI()
export const raw = new GitHubRaw()
export const dataSource = new DataSource()
