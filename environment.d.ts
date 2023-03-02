declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_GOOGLE_CLIENT_ID: string // this is the line you want
        NODE_ENV: "development" | "production" | "local"
        PORT?: string
        DB_NAME: string
        DB_PASSRORD: string
        DB_USERNAME: string
        DB_HOST: string
        MONGODB_URI:string
      }
    }
  }
  export{}
