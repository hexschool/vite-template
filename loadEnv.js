import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'

const getCurrentTimeString = () => {
  const now = new Date()
  let hours = now.getHours()
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')
  const ampm = hours >= 12 ? '下午' : '上午'
  hours %= 12
  hours = hours || 12
  const hoursStr = String(hours).padStart(2, '0')
  return `${ampm}${hoursStr}:${minutes}:${seconds}`
}

const customLog = (tag, message, tagColor = '\x1b[36m', messageColor = '\x1b[32m') => {
  const timeString = getCurrentTimeString()
  // eslint-disable-next-line no-console
  console.log(`\x1b[90m%s\x1b[0m ${tagColor}\x1b[1m%s\x1b[0m ${messageColor}%s\x1b[0m`, timeString, `[${tag}]`, message)
}

export default (mode) => {
  const basePath = path.resolve(process.cwd(), '.env')
  const envPath = `${basePath}.${mode}`
  const finalPath = fs.existsSync(envPath) ? envPath : basePath

  const envConfig = dotenv.config({ path: finalPath })

  if (envConfig.error) {
    customLog('vite', '無法讀取到環境變數(Environment Variables)檔案。')
    customLog('vite', '請在終端機輸入「cp .env.example .env」 建立環境變數檔案。')
    customLog('vite', '目前僅支援 .env、.env.development、.env.production 三種模式。')
  }
}
