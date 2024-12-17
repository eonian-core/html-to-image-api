export const isProduction = process.env.NODE_ENV !== 'development'
console.log(`Starting server in ${isProduction ? 'production' : 'development'} mode`)

export const port = +(process.env.PORT || "3000")
