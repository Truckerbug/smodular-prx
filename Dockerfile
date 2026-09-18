FROM node:22-alpine

ENV NODE_ENV=production
EXPOSE 8080/tcp

LABEL maintainer="Mercury Workshop"
LABEL summary="Scramjet Demo Image"
LABEL description="Example application of Scramjet"

WORKDIR /app

# Native build deps for bufferutil/utf-8-validate + pnpm itself
RUN apk add --no-cache python3 make g++ \
    && npm install -g pnpm@10.18.3

# Copy just what's needed for install first (better layer caching)
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile --prod

# Now copy the rest of the app
COPY . .

ENTRYPOINT [ "node" ]
CMD ["src/index.js"]