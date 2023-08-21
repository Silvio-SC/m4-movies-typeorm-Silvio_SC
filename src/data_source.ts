import "dotenv"
import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";

const DataSourceConfig = (): DataSourceOptions => {
    const db_url: string | undefined = process.env.DATABASE_URL

    const entitiesPath = path.join(__dirname, "./entities/**.(ts,js)")
    if (!db_url) throw new Error("Missing env var: DATABASE_URL") 
    
    return {
        type: 'postgres',
        url: '',
        synchronize: true,
        logging: true,
        entities: [entitiesPath]
        // entities: [Movie]
    };
} 

const AppDataSource = new DataSource(DataSourceConfig())

export { AppDataSource }