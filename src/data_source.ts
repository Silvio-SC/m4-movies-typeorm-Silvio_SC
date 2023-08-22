import "dotenv/config"
import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";

const DataSourceConfig = (): DataSourceOptions => {
    const db_url: string | undefined = process.env.DATABASE_URL

    const entitiesPath = path.join(__dirname, "./entities/**.{ts,js}")
    const migrationPath = path.join(__dirname, "./migrations/**.{ts,js}")

    if (!db_url) throw new Error("Missing env var: DATABASE_URL") 
    
    return {
        type: 'postgres',
        url: db_url,
        logging: true,
        entities: [entitiesPath],
        migrations: [migrationPath]
        // entities: [Movie]
    };
} 

const AppDataSource = new DataSource(DataSourceConfig())

export { AppDataSource }