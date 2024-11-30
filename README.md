
<h2 id="motivation">Motivation</h2>
most minimal use of using node logger for debugging

<h2 id="installation">Installation</h2>

```bash
pnpm i
```


<h2 id="usage">Usage</h2>

```bash
npm run dev
```


index.ts

```ts
import { logger } from "./logger";

const s: string = "123";

logger.verbose("Verbose : Hello, Winston logger in TypeScript!"); // This is for detailed debugging information
logger.debug("Debug : Hello, Winston logger in TypeScript!"); // This is for debugging messages.
logger.info("Info : Hello, Winston logger in TypeScript!"); // This is for informational messages
logger.warn("Warning : Hello, Winston logger in TypeScript!");// This is for warning messages
logger.error("Error : Hello, Winston logger in TypeScript!");// This is for error messages

```

logger.ts

```ts
// --- This is a function from Winston that initializes and returns a new logger instance.
export const logger = createLogger({
  level: "info", // --- only log messages at the info level and higher (e.g., warn, error) will be logged. Levels below info (like debug) will be ignored.
  format: format.simple(), // --- This object contains different formatting options for your logs
  transports: [new transports.Console()], // --- This object contains different transport mechanisms for your logs (e.g., console, files, remote servers).
});

```


<h2>Demo</h2>

level is high

....


level is low


<h2 id="points-of-interest">Points of Interest</h2>
<ul>
    <li>log level enum</li>
    you might want to use this enum for level in createLogger

    ```ts
    export enum WinstonLogLevel {
      // --- do not change value
      ERROR = "error",
      WARN = "warn",
      INFO = "info",
      VERBOSE = "verbose",
      DEBUG = "debug",
      SILLY = "silly",
    }
    ```
</ul>

<h2 id="references">References</h2>
<ul>
    <li>External libraries or frameworks</li>
    <li>Articles or tutorials</li>
    <li>Other relevant resources</li>
</ul>

