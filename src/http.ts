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
    const ids = resp.data
      .filter((project: any) => project.type === 'dir')
      .map((project: any) => project.name)
      .sort((a: any, b: any) => a.localeCompare(b))
    return ids
  }

  async getProjectData(type: string, id: string, features: { [key: string]: boolean } = {}) {
    const resp = await raw.get(`${type}/${id}/data.yml`)
    const data: any = yaml.load(resp.data)
    data.id = id
    data.type = type
    data.url = raw.resolvePath(`${type}/${id}`)
    data.baseUrl = raw.resolvePath(`${type}/${id}`)
    data.logoUrl = raw.resolvePath(`${type}/${id}/${data.logo}`)
    if (features['sosovalue']) {
      data.sosovalue = await this.getProjectSosovalue(type, id)
    }
    if (features['scv']) {
      data.scv = await this.getProjectSmartContractValidator(type, id)
    }
    if (features['securityAssessment']) {
      data.securityAssessment = await this.getProjectSecurityAssessment(type, id)
    }
    if (features['twitter']) {
      data.twitter = await this.getProjectTwitter(type, id)
    }
    if (features['sosoValueNews']) {
      data.sosoValueNews = await this.getProjectSosovalueNews(type, id)
    }
    if (features['stablecoin']) {
      data.stablecoin = await this.getProjectStablecoin(type, id)
    }
    if (features['zanRiskScore']) {
      data.zanRiskScore = await this.getProjectZanRiskScore(type, id)
    }
    if (features['securityScore']) {
      data.securityScore = await this.getProjectSecurityScore(type, id)
    }
    if (features['assetFlow']) {
      data.assetFlow = await this.getProjectAssetFlow(type, id)
    }
    if (features['coinMarketCap']) {
      data.coinMarketCap = await this.getProjectCoinMarketCap(type, id)
    }
    if (features['por']) {
      data.por = await this.getProjectPOR(type, id)
    }
    if (features['transactionMonitoring']) {
      data.transactionMonitoring = await this.getProjectTransactionMonitoring(type, id)
    }

    return data
  }

  async getProjectSosovalue(type: string, id: string) {
    try {
      const resp = await raw.get(`${type}/${id}/results/sosovalue_results.json`)
      if (resp.data.length > 0) {
        return resp.data[resp.data.length - 1]
      }
      return null
    } catch (e) {
      return null
    }
  }

  async getProjectSmartContractValidator(type: string, id: string) {
    try {
      const resp = await raw.get(`${type}/${id}/results/smart_contract_validator_results.json`)
      if (resp.data.length > 0) {
        return resp.data[resp.data.length - 1]
      }
      return null
    } catch (e) {
      return null
    }
  }

  async getProjectSecurityAssessment(type: string, id: string) {
    try {
      const resp = await raw.get(`${type}/${id}/results/security_assessment_results.json`)
      if (resp.data.length > 0) {
        return resp.data[resp.data.length - 1]
      }
      return null
    } catch (e) {
      return null
    }
  }

  async getProjectTwitter(type: string, id: string) {
    try {
      const resp = await raw.get(`${type}/${id}/results/twitter_results.json`)
      if (resp.data.length > 0) {
        return resp.data[resp.data.length - 1]
      }
      return null
    } catch (e) {
      return null
    }
  }

  async getProjectSosovalueNews(type: string, id: string) {
    try {
      const resp = await raw.get(`${type}/${id}/results/sosovalue_news_results.json`)
      if (resp.data.length > 0) {
        return resp.data[resp.data.length - 1]
      }
      return null
    } catch (e) {
      return null
    }
  }

  async getProjectStablecoin(type: string, id: string) {
    try {
      const resp = await raw.get(`${type}/${id}/results/stablecoin_results.json`)
      if (resp.data.length > 0) {
        return resp.data[resp.data.length - 1]
      }
      return null
    } catch (e) {
      return null
    }
  }

  async getProjectZanRiskScore(type: string, id: string) {
    try {
      const resp = await raw.get(`${type}/${id}/results/zan_risk_score_results.json`)
      if (resp.data.length > 0) {
        return resp.data
      }
      return null
    } catch (e) {
      return null
    }
  }

  async getProjectSecurityScore(type: string, id: string) {
    try {
      const resp = await raw.get(`${type}/${id}/results/security_score.json`)
      if (resp.data.length > 0) {
        return resp.data[resp.data.length - 1]
      }
      return null
    } catch (e) {
      return null
    }
  }

  async getProjectAssetFlow(type: string, id: string) {
    try {
      const resp = await raw.get(`${type}/${id}/results/asset_flow.json`)
      if (resp.data.length > 0) {
        return resp.data[resp.data.length - 1]
      }
      return null
    } catch (e) {
      return null
    }
  }

  async getProjectCoinMarketCap(type: string, id: string) {
    try {
      const resp = await raw.get(`${type}/${id}/results/coinmarketcap_results.json`)
      if (resp.data.length > 0) {
        return resp.data[resp.data.length - 1]
      }
      return null
    } catch (e) {
      return null
    }
  }

  async getProjectPOR(type: string, id: string) {
    try {
      const resp = await raw.get(`${type}/${id}/results/por.json`)
      if (resp.data.length > 0) {
        return resp.data[resp.data.length - 1]
      }
      return null
    } catch (e) {
      return null
    }
  }

  async getProjectTransactionMonitoring(type: string, id: string) {
    try {
      const resp = await raw.get(`${type}/${id}/results/transaction_monitoring_results.json`)
      return resp.data.sort((a: any, b: any) => {
        return new Date(b.created_date).getTime() - new Date(a.created_date).getTime()
      })
    } catch (e) {
      return null
    }
  }
}

export const api = new GitHubAPI()
export const raw = new GitHubRaw()
export const dataSource = new DataSource()
