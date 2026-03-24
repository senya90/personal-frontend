FROM node:25.8.1-alpine3.22 AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:25.8.1-alpine3.22 AS checker
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run lint:js && \
    npm run lint:css && \
    npm run format:check && \
    npm run test

FROM node:25.8.1-alpine3.22 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=checker /app .
ARG NEXT_PUBLIC_SERVICE_API
ENV NEXT_PUBLIC_SERVICE_API=$NEXT_PUBLIC_SERVICE_API
ARG NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY
ENV NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY=$NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN npm run build

FROM node:25.8.1-alpine3.22 AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]