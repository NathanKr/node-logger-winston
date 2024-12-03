import { logger } from "./logger";

const msg: string = "This is logger message";


    logger.silly(msg,"Silly : Hello, Winston logger in TypeScript!"); // This is for very detailed and low-level messages, often not necessary for everyday use
logger.verbose(msg,"Verbose : Hello, Winston logger in TypeScript!"); // This is for detailed debugging information
logger.debug(msg,"Debug : Hello, Winston logger in TypeScript!"); // This is for debugging messages.
logger.info(msg,"Info : Hello, Winston logger in TypeScript!"); // This is for informational messages
logger.warn(msg,"Warning : Hello, Winston logger in TypeScript!");// This is for warning messages
logger.error(msg,"Error : Hello, Winston logger in TypeScript!");// This is for error messages
