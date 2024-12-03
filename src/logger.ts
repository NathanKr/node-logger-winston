import { createLogger, format, transports } from "winston";

// --- This is a function from Winston that initializes and returns a new logger instance.
export const logger = createLogger({
  level: "verbose", // --- only log messages at the info level and higher (e.g., warn, error) will be logged. Levels below info (like debug) will be ignored.
  format: format.simple(), // --- This object contains different formatting options for your logs
  transports: [new transports.Console()], // --- This object contains different transport mechanisms for your logs (e.g., console, files, remote servers).
});
