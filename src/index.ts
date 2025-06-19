import app from './app';
import dotenv from 'dotenv';
import logger from './common/logger';
import { getClient } from './connections/connection';

dotenv.config();

const PORT = process.env.PORT || '';



async function startServer() {
  try {
    await getClient();
    logger.info('✅ Successfully connected to the database');

    
    app.listen(PORT, () => {
      logger.info(`✅ Server is running on http://localhost:${PORT}`);
    });
  
  } catch (error) {
    logger.error('❌ Failed to connect to the database. Server not started.', { error });
    process.exit(1);
  }
}

startServer();
