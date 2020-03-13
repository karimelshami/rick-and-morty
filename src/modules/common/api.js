import { api, Urls } from 'utils'

const { portalCommon } = Urls;

export function getWhatever() {
    return api.get(portalCommon.getWhatever)
}