import { Redis } from '@upstash/redis/cloudflare'

const redisKey = 'COUNTERS'
const redisMember = 'pageViews'


const getRedisKey = (key, {REDIS_KEY_PREFIX}) => {
  return `${REDIS_KEY_PREFIX}${key}`
}

const getRedis = ({ UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN }) => {
  return new Redis({
    url: UPSTASH_REDIS_REST_URL,
    token: UPSTASH_REDIS_REST_TOKEN,
  })
}

// Use onRequest as a catchall
// export async function onRequest(context) { ... }
// Or use named methods onRequestGet, onRequestPost, etc.

// Increment the counter and return its new value
export async function onRequestGet(context) {
  const redis = getRedis(context.env)
  const count = await redis.zincrby(getRedisKey(redisKey, context.env), 1, redisMember)
  const response = { count: count }
  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  })
}


export async function onRequestPost(context) {
  // ...
}

export const onRequestPut = onRequestPost
