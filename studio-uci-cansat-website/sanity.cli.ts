import {defineCliConfig} from 'sanity/cli'

// new secret for dataset and projectId
export default defineCliConfig({
  api: {
    projectId: 'nys0hkz1',
    dataset: 'production'
  }
})
