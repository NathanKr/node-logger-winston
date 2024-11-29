import { logger } from "./logger";

const s: string = "123";

logger.verbose("Verbose : Hello, Winston logger in TypeScript!"); // This is for detailed debugging information
logger.debug("Debug : Hello, Winston logger in TypeScript!"); // This is for debugging messages.
logger.info("Info : Hello, Winston logger in TypeScript!"); // This is for informational messages
logger.warn("Warning : Hello, Winston logger in TypeScript!");// This is for warning messages
logger.error("Error : Hello, Winston logger in TypeScript!");// This is for error messages
